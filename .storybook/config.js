import {configure, addParameters} from '@storybook/html';
import logo from '../public/static/mp_logo.jpg';

// automatically import all files ending in *.stories.js
addParameters({
  options: {
    theme: {
      base: 'light',

      colorPrimary: '#48b0f7',
      colorSecondary: '#48b0f7',

      // UI
      appBg: 'none',
      appContentBg: 'none',
      appBorderColor: 'transparent',
      appBorderRadius: 5,

      // Typography
      fontBase: '"Open Sans", sans-serif',
      fontCode: 'monospace',

      // Text colors
      textColor: '#232b2b',

      // Toolbar default and active colors
      barTextColor: '#232b2b',
      barSelectedColor: '#48b0f7',
      barBg: 'transparent',

      // Form colors
      inputBg: 'white',
      inputBorder: 'silver',
      inputTextColor: 'black',
      inputBorderRadius: 4,

      brandTitle: "Moneypool' Design System",
      brandUrl: 'https://www.moneypool.mx/'
      // brandImage: logo
    }
  }
});
configure(require.context('../src', true, /\.stories\.(js|md|mdx)$/), module);
