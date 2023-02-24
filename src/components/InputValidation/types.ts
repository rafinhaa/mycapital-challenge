import {Control} from 'react-hook-form';

import {ActionCreateFormData} from '../../screens/Home/types';
import {InputTextProps} from '../Input/types';

export interface InputValidationProps extends InputTextProps {
  control: Control<ActionCreateFormData>;
  name: keyof ActionCreateFormData;
  error: string | undefined;
}
