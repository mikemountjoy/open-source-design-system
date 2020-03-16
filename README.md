# CRC Design System

<!-- [![codecov](https://codecov.io/gh/Client-Relationship-Consultancy/design-system/branch/master/graph/badge.svg?token=1SiETTL2PR)](https://codecov.io/gh/Client-Relationship-Consultancy/design-system) [![Build Status](https://travis-ci.com/Client-Relationship-Consultancy/design-system.svg?token=CQ9Zb5xHzheSq3sjrYKj&branch=master)](https://travis-ci.com/Client-Relationship-Consultancy/design-system) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/b221e55a31c348faa09c6740b5ca117b)](https://www.codacy.com?utm_source=github.com&utm_medium=referral&utm_content=Client-Relationship-Consultancy/design-system&utm_campaign=Badge_Grade) ![core size](https://img.shields.io/bundlephobia/min/emotion.svg?label=core%20size) -->

This a guide to help everyone (developers and designers)
understand the core design principles of CRC. As a company that highly values
relationships, we mirror this focus in our UX. Our design decisions
prioritises user satisfaction, making sure any aesthetic/functional additions
only improve on that aspect.

### Prerequisites

This design system uses **React**.

## Using the Design System

### Installation

To install this repo and use its components, install with yarn.

```
yarn add @crcdevops/open-source-design-system
```

### Importing Components

Once installation is done, the package.json file will update with the design-system in the
dependency. Import the chosen components into your react app and voilà.

```javascript
import { Label } from "@crcdevops/open-source-design-system";
```

You can view the different components and their name via storybook.

## Editing the Design System

The design system is alive and ever evolving. If you wish to contribute, clone and open a new branch
to begin making changes. Remember **user satisfaction** is of utmost priority.

### Cloning the repo

Like with all repos git clone and then enter your password as this is a private repo.
Then install all necessary dependencies.

```
git@github.com:Client-Relationship-Consultancy/open-source-design-system.git
yarn install
```

### Linking locally to packages using the Design-system

This is a bit of a pain right now and we will create a better way of doing it soon.

- yarn build
- yarn link
- then in the package using the design system, run `yarn link @crcdevops/open-source-design-system`

### Migrating to Typescript
- example PR: https://github.com/Client-Relationship-Consultancy/open-source-design-system/pull/42
1. Change component file from `.js` -> `.ts` and type the Component file!
2. Change the `Component` and `Interface` as names exports:
```
export const Component = ...
export interface IComponent { ...
```
3. Update the `Component/index.js` file to
```
export {Component, IComponent} from "./Component"
```
4. Update the `src/index.js` to export the new named Component and Interface
5. Update package patch version! (e.g. `1.0.X`)

#### Gotcha - Jest Snapshots failing


### Versioning

Patch versions should be taken care of automatically by CircleCI.
But if you want to bump a minor or major version then you'll have to do it manually in the package.json
  - You should bump the minor version if your change is breaking

### Storybook

Storybook is a very useful development environment for creating and managing components.
Run storybook by typing the following command in the command line:

```javascript
yarn storybook
```

All existing and new components go in the src/components directory.
The repo is structured based on an atomic design principle. The smallest components, such as
buttons, labels and input, shoud be placed in the atoms directory. More complex components would
go either in molecules or organisms. Note that these components are meant to be reusable, so please
think about how they can be customised for all used cases. If there are meaningful restrictions,
please state wherever is appropiate.

In order for storybook to render your components, please import them into the stories/index.js file.
Below is an example story:

```javascript
import { MyComponent } from "../src/components/atoms/MyComponent";

storiesOf("MyComponent Story", module)
    .add("MyComponent", () => {
        return <MyComponent>Hello World!</MyComponent>;
    })
    .add("MyComponent Alt", () => {
        return <MyComponent foo="bar">Hello World!</MyComponent>;
    });
```

### Writing Tests

All tests are handled by Jest and Enzyme. Everything is already configured which you can find in the
jestSetup.js file in the root directory. Further Jest settings can be seen in the package.json file.
**Please do not touch the \_\_mocks\_\_ directory, as jest needs it to be able to read the css files.**

When writing enzyme tests, you may sometimes run into difficulties when shallow rendering.
This is due to styled components adding an outer wrapper. If you mount render instead, it will work.

All components should have a test file written for it. The test files need to end in \*.test.js;
Jest will automatically pick this up. Please place the tests files in the same directory as the component
it is testing. This will make it obvious as to which component does not have a test file.

Below is an example test file:

```javascript
import React from "react";
import { mount } from "enzyme";
import "jest-styled-components";
import MyComponent from "./MyComponent";

describe("MyComponent Tests", () => {
    const component = mount(<MyComponent foo="bar">Hello World!</MyComponent>);

    it("render MyComponent", () => {
        expect(component.prop(foo)).toEqual("bar");
    });
    it("match snapshot?", () => {
        expect(component).toMatchSnapshot();
    });
});
```

### Gotchas

- If you import from `index` within the design-system you may get circular dependency issues. Avoid doing this from files within the design-system and instead use the alias paths to the file you would like
- When you `yarn link`, the Jest snapshots may fail. Clearing the jest cache should fix it: `yarn jest --clearCache`


### 13/12/19 - Storybook Version Errors
- please note that we have had some versioning issues with storybook recently - if you face errors related to storybook please try the following versions:
`
  "@storybook/addon-notes": "5.2.4",
    "@storybook/addon-options": "5.2.4",
    "@storybook/addons": "5.2.4",
    "@storybook/react": "5.2.5",
    `
