const babel = require('babel-core');

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
  const myImport = template(`const a = b;`);

  return {
    visitor: {
      Program(path, state) {
        const lastImport = path.get("body").filter(p => p.isImportDeclaration()).pop();
        // console.log(lastImport);
        if (lastImport) lastImport.insertAfter(myImport());
      },
    },
  };
}