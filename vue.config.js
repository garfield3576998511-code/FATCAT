const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: [],
  devServer: {
    proxy: "https://m.bmtrip.com",
  },
});
