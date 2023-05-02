module.exports = {
  input: "./src/index.js",
  output: [
    {
      file: "./dist/miniVuex.cjs.js",
      format: "cjs",
    },
    {
      file: "./dist/miniVuex.esm.js",
      format: "es",
    },
    {
      input: "./src/index.js",
      file: "./dist/miniVuex.js",
      format: "umd",
      name: "tracker",
    },
  ],
};
