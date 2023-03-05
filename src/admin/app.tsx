import favicon from './extensions/favicon.png'

export default {
  config: {
    locales: ['pt-BR'],
    tutorials: false,
    notifications: {
      releases: false,
    },
  },
  head: {
    favicon: favicon,
  },
  bootstrap() {
  },
};
