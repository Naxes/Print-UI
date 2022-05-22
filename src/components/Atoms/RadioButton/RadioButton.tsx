import React from 'react';
import { styled } from 'stitches.config';

const Input = styled('input', {
  alignItems: 'center',
  appearance: 'none',
  borderRadius: '50%',
  boxShadow: 'inset 0 0 0 2px $colors$slate7',
  cursor: 'pointer',
  display: 'inline-flex',
  justifyContent: 'center',
  overflow: 'hidden',
  position: 'relative',
  size: '$$size',
  '&:hover': {
    boxShadow: 'inset 0 0 0 2px $colors$slate8',
  },
  '&:after': {
    borderRadius: '50%',
    content: '',
    size: '$$sizeChecked',
  },
  '&:checked': {
    boxShadow: 'inset 0 0 0 2px $colors$slate12',
    '&:after': {
      backgroundColor: '$slate12',
    },
  },

  variants: {
    size: {
      sm: {
        $$size: '$sizes$4',
        $$sizeChecked: '$sizes$2',
      },
      md: {
        $$size: '$sizes$5',
        $$sizeChecked: '$sizes$3',
      },
      lg: {
        $$size: '$sizes$6',
        $$sizeChecked: '$sizes$5',
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export const RadioButton = ({ ...rest }) => (
  <Input type="radio" {...rest} />
);