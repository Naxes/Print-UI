import React from 'react';
import { theme, styled } from 'stitches.config';

const thumbStyles = {
  width: '$4',
  height: '$6',
  border: 'none',
  appearance: 'none',
  visibility: 'hidden',
}

const Input = styled('input', {
  width: '100%',
  height: '$6',
  margin: 0,
  display: 'block',
  cursor: 'pointer',
  overflow: 'hidden',
  appearance: 'none',
  borderRadius: '$1',
  background: '$slate6',
  '&:focus': {
    outline: 'none',
  },
  '&::-webkit-slider-thumb': {
    ...thumbStyles,
  },
  '&::-moz-focus-outer': {
    border: 0,
  },
  '&::-moz-range-thumb': {
    ...thumbStyles,
  },
});

type Props = {
  max: number,
  value: number,
}

export const RangeSlider = ({ max, value, ...rest }: Props) => (
  <div
    style={{
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '9999px',
  }}
  >
    <Input
      max={max}
      step={0.5}
      type="range"
      value={value}
      style={{
        background: `linear-gradient(to right, ${theme.colors.slate12} 0%, ${theme.colors.slate12} ${(value / max) * 100}%, ${theme.colors.slate6} ${(value / max) * 100}%, ${theme.colors.slate6} 100%)`,
      }}
      {...rest}
    />
    <span
      style={{
        top: '50%',
        left: `${(value / max) * 100}%`,
        width: '35px',
        height: '35px',
        margin: '0 -1px',
        position: 'absolute',
        pointerEvents: 'none',
        transform: 'translateY(-50%)',
        borderRadius: '0 9999px 9999px 0',
        background: `${theme.colors.slate12}`,
      }}
    />
  </div>
);

RangeSlider.defaultProps = {
  max: 100,
};