import { Select } from './Select';
import { Option } from '../Option';
import React, { useState } from 'react';

export default {
  title: 'Atoms/Select',
  component: Select,
}

export const Default = (args: any) => (
  <Select {...args}>
    <Option value="Option 1">
      Option 1
    </Option>
    <Option value="Option 2">
      Option 2
    </Option>
    <Option value="Option 3">
      Option 3
    </Option>
  </Select>
);