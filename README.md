# clsx-tw

A tiny utility to merge Tailwind classes without conflicts using `clsx` and `tailwind-merge`.  

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
pnpm lint
pnpm test
```
