import { PlopTypes } from '@turbo/gen';

const s: PlopTypes.CustomActionFunction = async ans => {
  console.log(ans);

  return '';
};

// Learn more about Turborepo Generators at https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // A simple generator to add a new React component to the internal UI library
  plop.setGenerator('svelte-component', {
    description: 'Adds a new svelte component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.hbs'
      },
      {
        type: 'append',
        path: 'index.ts',
        pattern: /(\/\/ component exports)/g,
        template:
          'export { default as {{pascalCase name}} } from "./components/{{pascalCase name}}";'
      }
    ]
  });
}
