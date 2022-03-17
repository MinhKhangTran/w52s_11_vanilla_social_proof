module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-custom-media"),
    require("postcss-calc"),
    require("postcss-each"),
    require("postcss-nested"),
    require("autoprefixer"),
    require("cssnano"),
  ],
};
