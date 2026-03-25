# clsx-tw

The utility you always end up writing yourself.  
It simply merges `clsx` and `tailwind-merge` into one default export.

Was it really that hard to bake this functionality directly into clsx?

## Installation

```sh
pnpm add clsx-tw
```

## Usage

```jsx
import cx from 'clsx-tw';

const className = cx(
  'p-4 bg-red-500',
  isFull && 'w-full',
  'p-2' // this will correctly override 'p-4'
);
```

## Development

Setup:
```sh
fnm install # nodejs from .nvmrc
npm install -g corepack
corepack enable # package manager from package.json
corepack install # package manager from package.json
pnpm install
export $(grep -v '^#' .env | xargs)
pnpm test
```
