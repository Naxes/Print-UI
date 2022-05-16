import '../index.css';
import { dark } from 'stitches.config';
import React, { useState } from 'react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    const [theme] = useState(false);
    return (
      <div className={!theme ? 'light' : dark}>
        <Story />
      </div>
    )
  }
];