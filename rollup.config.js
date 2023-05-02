
export default {
  input: "./src/index.js",
  output: [
    {
      file: "./dist/index.cjs.js",
      format: "cjs",
    },
    {
      file: "./dist/index.esm.js",
      format: "es",
    },
    {
        input: "./src/index.js",
        file: "./dist/index.js",
        format: "umd",
        name: "tracker"
    }
  ],
}
