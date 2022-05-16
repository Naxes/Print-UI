import { styled } from 'stitches.config';

export const Button = styled('button', {
  $$color1: '$colors$slate6',
  $$color2: '$colors$slate8',
  $$color3: '$colors$slate9',
  $$color4: '$colors$slate11',
  $$color5: '$colors$slate12',

  alignItems: 'center',
  backgroundColor: '$$color5',
  border: '2px solid transparent',
  color: '$colors$loContrast',
  cursor: 'pointer',
  display: 'flex',
  fontWeight: '$4',
  textDecoration: 'none',

  variants: {
    size: {
      sm: {
        fontSize: '$2',
        padding: '$1 $2',
      },
      md: {
        fontSize: '$3',
        padding: '$2 $3',
      },
      lg: {
        fontSize: '$4',
        padding: '$3 $4',
      },
    },
    radius: {
      1: { borderRadius: '$1' },
      2: { borderRadius: '$2' },
      3: { borderRadius: '$3' },
      4: { borderRadius: '$4' },
      pill: { borderRadius: '$pill' },
      round: { borderRadius: '$round' },
    },
    color: {
      slate: {
        $$color1: '$colors$slate6',
        $$color2: '$colors$slate8',
        $$color3: '$colors$slate9',
        $$color4: '$colors$slate11',
        $$color5: '$colors$slate12',
      },
    },
    outlined: {
      true: {
        backgroundColor: '$colors$loContrast',
        borderColor: '$colors$hiContrast',
        color: '$$color5',
      },
    },
  },
  defaultVariants: {
    radius: 1,
    size: 'md',
    color: 'slate',
  },
});