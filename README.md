# React Context Hook Example Project

This project is a simple demonstration aimed at helping you understand how to use the `useContext` hook in React. It shows how to create a context, provide values through context, and consume these values across multiple components in a component tree without having to pass props manually at every level.

## Project Structure

The project consists of several components (`A`, `B`, `C`, `D`) where values are passed through context from a parent component (`A`) down to the deeply nested component (`D`). This project illustrates how to implement the `useContext` hook and how it simplifies the process of passing values between components.

### File Breakdown

1. **`A.js`**
    - Creates a context `UserContaxt` using `createContext`.
    - Uses `useState` to manage the state of the `user`.
    - Wraps component `B` in `UserContaxt.Provider` to pass the `user` value down the component tree.

2. **`B.js`**
    - A simple component that renders `C` as a child component.

3. **`C.js`**
    - A simple component that renders `D` as a child component.

4. **`D.js`**
    - Uses the `useContext` hook to consume the `user` value from `UserContaxt` and displays it.

5. **`explanationContaxt.js`**
    - Provides an explanation of how to implement the `useContext` hook in React.

6. **`App.js`**
    - The main entry point of the project, renders component `A`.

7. **`index.js`**
    - Renders the `App` component into the DOM.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Hooks (`useContext`)**: A hook that allows you to share values between multiple levels of components without passing props through every level.
- **JavaScript (ES6+)**: The programming language used for the project.

## Features

- Demonstrates how to create and provide a context using `createContext`.
- Shows how to consume context values using `useContext` in a component deeply nested in the component tree.
- Provides a simple structure to help you understand React's context API in a practical example.

## Running the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/PopovEva/react-useContext.git
   ```  
2. Navigate to the project directory:

   ```bash
   cd <project_directory>
   ```  
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
    ```bash
    npm start
    ```
5. Open your browser and go to http://localhost:3000 to see the project in action.  

## Context API Explanation

The `useContext` hook allows for easy state sharing between multiple levels of a component tree without passing props at each level. 

For more details, check out the `explanationContaxt.js` file in the project, which provides a brief overview of how to use the context API.

---

## License

This project is for educational purposes only.




