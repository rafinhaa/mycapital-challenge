import React, {useCallback, useState} from 'react';
import {Alert, SectionList} from 'react-native';
import {useFocusEffect} from '@react-navigation/core';

import {SectionActionData, TotalActionsValuesByData} from './types';

import {BaseScreen} from '../../components/BaseScreen';
import {actionGetAll} from '../../storage/action';
import {SectionTitle} from './components/SectionTitle';
import {ActionCard} from './components/ActionCard';
import {TitleScreen} from '../../components/TitleScreen';
import {Loader} from '../../components/Loader';
import {EmptyList} from './components/EmptyList';
import {VictoryPie} from 'victory-native';
import {formatToBRLCurrency} from '../../utils/formatToBRLCurrency';
import {ChartContainer} from './styles';

export const ListActions: React.FC = () => {
  const [actions, setActions] = useState<SectionActionData[]>([]);
  const [loading, setIsLoading] = useState(false);
  const title = actions.length > 1 ? 'Ações cadastradas' : 'Ação cadastrada';

  const getAllActions = async () => {
    try {
      setIsLoading(true);
      const actionsStored: string[] = await actionGetAll();

      const sectionActions = actionsStored.reduce(
        (acc: SectionActionData[], action) => {
          const parsedAction = JSON.parse(action);

          const alreadyExistingSection = acc.findIndex(
            item => item.date === parsedAction.date,
          );
          if (alreadyExistingSection === -1) {
            acc.push({date: parsedAction.date, data: [parsedAction]});
          } else {
            acc[alreadyExistingSection].data.push(parsedAction);
          }
          return acc;
        },
        [],
      );

      setActions(sectionActions);
    } catch (error) {
      Alert.alert('Erro!', 'Não foi possível carregar as ações!');
    } finally {
      setIsLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getAllActions();
    }, []),
  );

  const totalValuesByDate = actions.reduce(
    (acc: TotalActionsValuesByData, {data}) => {
      data.forEach(({date, value}) => {
        acc[date] = (acc[date] ?? 0) + Number(value);
      });
      return acc;
    },
    {},
  );

  const totalValuesByDateChartFormatted = Object.entries(totalValuesByDate).map(
    ([date, value]) => ({
      x: date,
      y: value,
    }),
  );

  const TotalByDayInChart =
    actions.length > 0 ? (
      <ChartContainer>
        <VictoryPie
          data={totalValuesByDateChartFormatted}
          labels={({datum}) => `${datum.x}: ${formatToBRLCurrency(datum.y)}`}
          labelRadius={15}
          style={{labels: {fill: 'white', fontSize: 16, fontWeight: 'bold'}}}
        />
      </ChartContainer>
    ) : null;

  return (
    <BaseScreen>
      <TitleScreen>{title}</TitleScreen>
      {loading ? (
        <Loader />
      ) : (
        <SectionList
          sections={actions}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <ActionCard code={item.code} name={item.name} value={item.value} />
          )}
          renderSectionHeader={({section: {date}}) => (
            <SectionTitle>{date}</SectionTitle>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={EmptyList}
          ListHeaderComponent={TotalByDayInChart}
        />
      )}
    </BaseScreen>
  );
};
