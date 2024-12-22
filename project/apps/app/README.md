Task 1:

I fetched the list of Pokémon using Axios, a powerful and flexible HTTP client for making requests. Here's a quick breakdown:

Install Axios: Used npm install axios to add Axios to the project.

Fetch Data: Made a GET request to the Pokémon API (https://pokeapi.co/api/v2/pokemon?limit=151) using Axios.

Update State: Upon receiving the API response, updated the component’s state with the list of Pokémon.

This process involves setting up Axios, making the request, and handling the response to display the data in the component.

Task 4:
1.createSlice in Redux Toolkit and a traditional reducer in Redux manage state, but createSlice simplifies and reduces boilerplate. It combines actions, action creators, and reducers into one. This makes state management cleaner and more efficient in modern Redux applications.
2.Immutablity Benifits
->Consistency - Immutable objects cannot be altered after creation, which ensures that data remains consistent throughout the application.
->Side Effect Reduction - Functions that use immutable data do not produce side effects, making it easier to understand and predict their behavior.
->Maintenance and Readability - Immutability simplifies code by eliminating complex state management, making the codebase easier to maintain and read.

Task 5:
To verify that an action has been dispatched in Redux:
Logging Actions: Add console logs in your actions.

Redux DevTools: Utilize the Redux DevTools extension for your browser to inspect actions and state.

Task 6:

7.The useEffect hook in React is used to manage side effects in functional components, such as data fetching, DOM manipulation. we can pass a function containing the side-effect logic and and optional dependency array to control when the it runs. Reduces the need for multiple lifecycle methods.
8.A Higher-Order Component is an advanced technique for reusing component logic. It’s a function that takes a component and returns a new component with enhanced functionality.
9.Code Reuse, Conditional Rendering, State Management, Data Fetching, Props Injection and more.
10.USE-When a component or function prefixed with use, it indicates that it is a custom hook. Custom hooks allow you to extract and reuse stateful logic across different components, promoting code reuse and organization.
WITH-When a component is prefixed with with, it typically indicates a Higher-Order Component. HOCs are functions that take a component and return a new component with enhanced functionality.
11.A Generic type in TypeScript allows you to create reusable components that work with any data type. Generics provide a way to define functions, classes, and interfaces that can operate with various types while preserving type safety.
12.Controlled Inputs: Manage input state via React state and onChange handlers.
Uncontrolled Inputs: Rely on the DOM for input state, accessed via refs.
