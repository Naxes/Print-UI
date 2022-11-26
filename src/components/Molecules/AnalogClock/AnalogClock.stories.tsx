import React from 'react';
import { dark } from 'stitches.config';
import { Story } from '@storybook/react';
import { AnalogClock } from './AnalogClock';

export default {
  title: 'Molecules/AnalogClock',
  component: AnalogClock,
};

const Template: Story = () => <AnalogClock/>;

export const Light = {};
export const Dark = Template.bind({});

Dark.decorators = [(Story) => <div className={dark}>{Story()}</div>];
