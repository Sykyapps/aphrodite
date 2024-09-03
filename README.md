# Aphrodite

SayaKaya React UI Library

Currently used in:
- [Persephone (Sales Dashboard)](https://github.com/Sykyapps/persephone)
- [Isis (CMS)](https://github.com/Sykyapps/isis)

## Development

### Install Node.js

#### For Debian and it's derivatives

_Download the n script to help with installing Node. You can check the source on GitHub [here](https://github.com/tj/n)_

```
curl -L https://git.io/n-install | bash
```

_Install the latest LTS release or at least version 18_

```bash
n lts
# or
n 18
```

_Verify installed version_

```
npm version
```

#### For Windows

_Install node via [GUI](https://nodejs.org/en/) or [chocholatey](https://chocolatey.org/)_.

### Clone this repository
```bash
git clone https://github.com/Sykyapps/aphrodite.git
```

### Install required packages

We prefer the [NPM package manager](https://www.npmjs.com/)

```
npm install
```

### Run Storybook

This project uses Storybook for developing and testing UI components. To start the Storybook server, run:

```bash
npm run storybook
```

### Use in Local Project

You can use this library in your project without publishing it to npm by creating a package in your local machine

_Note: You will need to publish the library to npm before you push your project to repository. After you publish, you can reinstall the package in your project from npm by following the "How To Use" guide_

#### Build

Build the library by running:

```bash
npm run build
```

#### Create `.tgz` Package

Create a local package from the build by running:

```bash
npm pack
```

#### Installation

Copy the `.tgz` file to your project directory, then install the package in your project by running:

```bash
npm install /path/to/sayakaya-aphrodite-x.y.z.tgz
```

## Publishing

### Login

Before publishing this library, you'll need to login using `tech@sayakaya.id` npm account in your local npm CLI, run:

```bash
npm login
# use login via browser
```

Insert the credential from [this page](https://www.notion.so/sayakaya/NPM-Credentials-0463b31bc7014025b6af31e867d2c2f0?pvs=4)

_Note: No need to login again if you've already logged in to `tech@sayakaya.id` before._

### Update the version

Update the version in `package.json` file

```
{
  ...
  "version": "x.y.z",
  ...
}
```

### Build

Build the library by running:

```bash
npm run build
```

### Publish

Then, you can publish the library by running:

```bash
npm publish --access public
```

## How to Use

After publishing the library, you can install it in your project

### Installation

To install this library, you can use npm:

```bash
npm install @sayakaya/aphrodite antd@5.15.1
```

Or, if you prefer yarn:

```bash
yarn add @sayakaya/aphrodite antd@5.15.1
```

### Usage

Here's a basic example of how to use this library:

```javascript
import { Button } from '@sayakaya/aphrodite';

export default () => (
  <>
    <Button buttonVariant="primary">PRESS ME</Button>
  </>
);
```
