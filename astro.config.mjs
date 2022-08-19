import vue from "@astrojs/vue";

export default {
  server: { port: 1234, host: true },
  integrations: [vue()],
};
