# Aphrodite

SayaKaya React UI Library

## Installation

To install this library, you can use npm:

```bash
npm install @sayakaya/aphrodite antd@5.15.1
```

Or, if you prefer yarn:

```bash
yarn add @sayakaya/aphrodite antd@5.15.1
```

## Usage

Here's a basic example of how to use this library:

```javascript
import { Button } from '@sayakaya/aphrodite';

export default () => (
  <>
    <Button buttonVariant="primary">PRESS ME</Button>
  </>
);
```

## Developing

This project uses Storybook for developing and testing UI components. To start the Storybook server, run:

```bash
npm run storybook
```

## Publishing

Before publishing this library, you'll need to login using tech@sayakaya.id npm account in your local npm CLI, run:

```bash
npm login
#login to tech@sayakaya.id in via browser
```

Update the version in `package.json` file

```
{
  ...
  "version": "x.y.z",
  ...
}
```

Then, build the library by running:

```bash
npm run build
```

Then, you can publish the library by running:

```bash
npm publish --access public
```