import { styled } from 'stitches.config';

export const Card = styled('div', {
  backgroundColor: '$slate3',
  position: 'relative',
  p: '$4',

  variants: {
    space: {
      1: { p: '$1' },
      2: { p: '$2' },
      3: { p: '$3' },
      4: { p: '$4' },
      5: { p: '$5' },
    },
    radius: {
      1: { borderRadius: '$1' },
      2: { borderRadius: '$2' },
      3: { borderRadius: '$3' },
      4: { borderRadius: '$4' },
      pill: { borderRadius: '$pill' },
      round: { borderRadius: '$round' },
    },
  },
  defaultVariants: {
    space: 4,
    radius: 3,
  },
});