# @monorepo/ui-react

This is the UI React component library for the monorepo.

## Installation

To install the package, run the following command:

```bash
    pnpm install @monorepo/ui-react
```

Or manually add the package to your `package.json` file:

```json
    "@monorepo/ui-react": "workspace:*"
```

## Usage

You can use the components defined in this library, by using the following import:

```typescript
import { Button } from '@monorepo/ui-react/components';
```

It is recommended to alias your import with tsconfig and vite the following way\

For `tsconfig.json`

```json
    ...
    "baseUrl": ".",
    "paths": {
        "$ui": ["../../packages/ui-react/index.ts"],
    }
    ...
```

For `vite.config.ts`

```typescript
export default defineConfig({
    ...
    resolve: {
        alias: {
            // Use this when importing components
            $ui:"@monorepo/ui-react/components",
            // This here is a special alias for utils that the components call by themselves
            '@ui-utils': '@monorepo/ui-react/utils',
        },
    },
    ...
})
```
