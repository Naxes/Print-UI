import React from 'react';
import { styled } from 'stitches.config';
import { useSelectContext } from '../Select';

type Props = {
  value: string,
  children: React.ReactNode,
};

const ListItem = styled('li', {
  cursor: 'pointer',
  p: '$4 $2',
  '&:hover': {
    backgroundColor: '$slate2',
  },
  '& + li': {
    borderTop: '1px solid $slate6',
  },
});

export const Option = ({ value, children }: Props) => {
  const { changeSelectedOption } = useSelectContext();

  return (
    <ListItem onClick={() => changeSelectedOption(value)}>
      {children}
    </ListItem>
  );
};