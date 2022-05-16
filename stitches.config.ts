import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      slate1: 'hsl(206 30.0% 98.8%)',
      slate2: 'hsl(210 16.7% 97.6%)',
      slate3: 'hsl(209 13.3% 95.3%)',
      slate4: 'hsl(209 12.2% 93.2%)',
      slate5: 'hsl(208 11.7% 91.1%)',
      slate6: 'hsl(208 11.3% 88.9%)',
      slate7: 'hsl(207 11.1% 85.9%)',
      slate8: 'hsl(205 10.7% 78.0%)',
      slate9: 'hsl(206 6.0% 56.1%)',
      slate10: 'hsl(206 5.8% 52.3%)',
      slate11: 'hsl(206 6.0% 43.5%)',
      slate12: 'hsl(206 24.0% 9.0%)',

      hiContrast: '$slate12',
      loContrast: 'white',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    fontWeights: {
      1: '100',
      2: '300',
      3: '500',
      4: '700',
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px',
    },
  },
  utils: {
    m: (value: string) => ({
      margin: value,
    }),
    mt: (value: string) => ({
      marginTop: value,
    }),
    mr: (value: string) => ({
      marginRight: value,
    }),
    mb: (value: string) => ({
      marginBottom: value,
    }),
    ml: (value: string) => ({
      marginLeft: value,
    }),
    mx: (value: string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string) => ({
      marginTop: value,
      marginBottom: value,
    }),

    p: (value: string) => ({
      padding: value,
    }),
    pt: (value: string) => ({
      paddingTop: value,
    }),
    pr: (value: string) => ({
      paddingRight: value,
    }),
    pb: (value: string) => ({
      paddingBottom: value,
    }),
    pl: (value: string) => ({
      paddingLeft: value,
    }),
    px: (value: string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    size: (value: string) => ({
      width: value,
      height: value,
    }),
  },
});

export const dark = createTheme({
  colors: {
    slate1: 'hsl(200, 7.0%, 8.8%)',
    slate2: 'hsl(195, 7.1%, 11.0%)',
    slate3: 'hsl(197, 6.8%, 13.6%)',
    slate4: 'hsl(198, 6.6%, 15.8%)',
    slate5: 'hsl(199, 6.4%, 17.9%)',
    slate6: 'hsl(201, 6.2%, 20.5%)',
    slate7: 'hsl(203, 6.0%, 24.3%)',
    slate8: 'hsl(207, 5.6%, 31.6%)',
    slate9: 'hsl(206, 6.0%, 43.9%)',
    slate10: 'hsl(206, 5.2%, 49.5%)',
    slate11: 'hsl(206, 6.0%, 63.0%)',
    slate12: 'hsl(210, 6.0%, 93.0%)',

    hiContrast: '$slate12',
    loContrast: '$slate1',
  }
});
