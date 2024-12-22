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