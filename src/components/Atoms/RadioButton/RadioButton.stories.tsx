import React from 'react';
import { dark } from 'stitches.config';
import { RadioButton } from './RadioButton';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  argTypes: {
    size: {
      defaultValue: 'md',
      options: [
        'sm',
        'md',
        'lg',
      ],
      control: {
        type: 'select',
      },
    }
  },
}

export const Default = (args: any) => <RadioButton {...args} />;
export const Checked = (args: any) => <RadioButton {...args} checked />;