import {configure, addParameters} from '@storybook/html';
// import logo from '../public/static/mp_logo.jpg';

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.(js|md|mdx)$/), module);
