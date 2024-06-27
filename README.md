<<<<<<< HEAD
## Namaste React Course By Akshay Saini🚀.

### Episode_05 Let's get Hooked

## Q: What is difference between `named export` and `default export`?

A: There are two primary ways to export values with JavaScript:

- default exports
- named exports.

You can use one or both of them in the same file. A file can have no more than one default export, but it can have as many named exports as you like.

How you export your component dictates how you must import it.
You will get an error if you try to import a default export the same way you would a named export!

### Syntax

#### Default

```
`Export Statment`

export default function Button() {}

`import Statment`

import Button from './Button.js';

```

#### Named Export

```

`Export Statment`

export function Button() {}

`import Statment`

import { Button } from './Button.js'
```

People often use default exports if the file exports only one component, and use named exports if it exports multiple components and values.

## Q: Why do we need `useState Hook`?

## Q: What are `React Hooks`?

A: In React version 16.8, React introduced a new pattern called Hooks. React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects.
Hooks allow you to reuse stateful logic without changing your component hierarchy. This makes it easy to share Hooks among many components or with the community.

### React provides a bunch of standard in-built hooks:

- useState: To manage states. Returns a stateful value and an updater function to update it.
- useEffect: To manage side-effects like API calls, subscriptions, timers, mutations, and more.
- useContext: To return the current value for a context.
- useReducer: A useState alternative to help with complex state management.
- useCallback: It returns a memorized version of a callback to help a child component not re-render unnecessarily.
- useMemo: It returns a memoized value that helps in performance optimizations.
- useRef: It returns a ref object with a current property. The ref object is mutable. It is mainly used to access a child component imperatively.
- useLayoutEffect: It fires at the end of all DOM mutations. It's best to use useEffect as much as possible over this one as the useLayoutEffect fires synchronously.
- useDebugValue: Helps to display a label in React DevTools for custom hooks.

## Q: Why do we need `useState Hook`?

A: `useState hook` is used to maintain the state in our React application. It keeps track of the state changes so basically useState has the ability to encapsulate local state in a functional component.
The useState hook is a special function that takes the `initial state` as an `argument` and `returns an array` of two entries. UseState encapsulate only singular value from the state, for multiple state need to have useState calls.

#### Syntax for useState hook

```
const [state, setState] = useState(initialstate);
```

#### Importing: To use useState you need to import useState from react as shown below:

```
import React, { useState } from "react";
```

we can use Hooks in Functional Components

```
const Example = (props) => {
  // You can use Hooks here!
  return <div />;
}
```
=======
- [🚀 Wokeats Live Project App Link 😍](https://wokeats.netlify.app/)
>>>>>>> 07d9bbbcc9c555b7e1f47fdaa1f815b4d74af8a3
