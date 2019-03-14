const babel = require('babel-core');
const t = require('babel-types');

const code = [
  "import A from 'a'",
  "import B from 'b'",
  "export default {",
  "  components: {",
  "  },",
  "  methods: {",
  "    init () {",
  "    }",
  "  }",
  "}"
].join("\n");

const result = babel.transform(code, {
  plugins: [myImportInjector]
});

console.log(result.code);


function myImportInjector({ types, template }) {
  const myImport = template(`const A = B;`);

  return {
    visitor: {
      Program(path, state) {
        const lastImport = path.get("body")[0];
        // console.log(lastImport);
        if (lastImport) lastImport.insertAfter(myImport({
          A: t.identifier('xxx'),
          B: t.identifier('yyy'),
        }));
      },
    },
  };
}