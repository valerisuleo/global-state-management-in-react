# Simple Guide to Zustand with TypeScript

Zustand is a minimalistic state management library designed to simplify the process of managing state across React components. It's particularly praised for its simplicity and the use of a straightforward `set` function to update the state.

## What is Zustand?

Zustand is a state management tool that removes much of the boilerplate associated with state management in React applications. It allows you to create global state stores using hooks. Unlike Redux, which often requires a lot of setup and boilerplate, Zustand aims to be minimal and simple to use.

## Features

- **Minimal API:** Easy to understand and use.
- **TypeScript Support:** Offers type safety, enhancing developer experience and reducing bugs.
- **No boilerplate:** Reduces the complexity in setting up and maintaining state.

## Installation

Install Zustand in your project by running:

```bash
npm install zustand
```

## Basic Usage

Here’s how you can set up a simple counter store with Zustand:

#### Step 1: Create a Store

You create a store by calling the `create` function from Zustand. The `create` function takes a setup function where you define your initial state and the actions to mutate this state.

```typescript
import create from 'zustand';

interface CounterStore {
  counter: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterStore>((set) => ({
  counter: 0,
  increment: () => set((state) => ({ counter: state.counter + 1 })),
  reset: () => set({ counter: 0 })
}));
```

#### Explanation:

- **`create` Function:** This is used to create a new store.
- **`set` Function:** This is a function provided by Zustand that you use to update the state. It's a central piece in Zustand's simplicity. You pass it a function that receives the current state and returns a new state.

#### Step 2: Use the Store in a Component

You use the store in your React components by calling the store hook, in this case, `useCounterStore`.

```typescript
function Counter() {
  const { counter, increment, reset } = useCounterStore();
  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

This component displays the current count and has buttons to increment and reset the counter, demonstrating a basic interaction with the Zustand store.

#### Why Use `set`?

The `set` function simplifies state updates. You don’t have to deal with reducers or actions like in Redux. Instead, you directly set the new state. This makes Zustand less verbose and easier to manage, especially for small to medium-sized projects.


Let's integrate the provided code snippet into the README, focusing on accurately reflecting the use of `simple-zustand-devtools` for integrating Zustand store with development tools.


## Integrating DevTools

For a better development experience, especially in a development environment, you can integrate Zustand with DevTools to track and visualize state changes:

```typescript
if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('Counter Store', useCounterStore);
}
```

#### Explanation:

- **`mountStoreDevtool` Function:** This function from `simple-zustand-devtools` is used to connect your Zustand store to the browser's DevTools. It helps in monitoring the state changes live as you develop the application.
- **Environment Check:** It’s a good practice to mount the store dev tools only in a development environment to avoid performance impacts in production.

### Viewing State in DevTools

Once you have set up Zustand with DevTools, you can view and interact with your state directly in the Redux DevTools extension. This can be incredibly useful for debugging state-related issues or for understanding how state changes over time in your application.
