import favicon from './extensions/favicon.png'

export default {
  config: {
    locales: ['pt-BR'],
  },
  head: {
    favicon: favicon,
  },
  bootstrap(app) {
    console.log(app);
  },
};
