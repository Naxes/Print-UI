import React, { useState } from 'react';
import { Slider } from './Slider';

export default {
  title: 'Atoms/Slider',
  component: Slider,
}

export const Default = () => {
  const [value, setValue] = useState([25]);
  return <Slider value={value} step={0.5} onValueChange={(newValue: number[]) => setValue(newValue)} />;
};
