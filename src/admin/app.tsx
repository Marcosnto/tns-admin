import favicon from './extensions/favicon.png'

export default {
  config: {
    locales: ['pt-BR'],
    tutorial: false,
    notifications: {
      release: false,
    },
  },
  head: {
    favicon: favicon,
  },
  bootstrap(app) {
    console.log(app);
  },
};
