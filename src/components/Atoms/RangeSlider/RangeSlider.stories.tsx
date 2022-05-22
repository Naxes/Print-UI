import React, { useState } from 'react';
import { RangeSlider } from './RangeSlider';

export default {
  title: 'Atoms/RangeSlider',
  component: RangeSlider,
}

export const Default = (args: any) => {
  const [value, setValue] = useState('25');
  return <RangeSlider value={value} onChange={(e: { target: HTMLInputElement }) => setValue(e.target.value)} {...args} />;
};