const Ques = [
  {
      "id": 1,
      "Ques": "What is Props ?",
      "Ans": "With the help of props we can share data between two components. Unidirectional, Immutable."
  },
  {
      "id": 2,
      "Ques": "What is map function purpose?",
      "Ans": "The map function is used to create a new array by applying a given function to each element of an existing array. It allows transforming and manipulating array elements easily."
  },
  {
      "id": 3,
      "Ques": "What is Callback in js?",
      "Ans": "In JavaScript, functions are objects and therefore, functions can take other functions as arguments and can also be returned by other functions. A callback is a JavaScript function that is passed to another function as an argument or a parameter."
  },
  {
      "id": 4,
      "Ques": "What is inheritance in js?",
      "Ans": "Inheritance is a mechanism in js where an object can inherit properties and methods from another object. It allows for code reuse and creating hierarchical relationships between objects."
  },
  {
      "id": 5,
      "Ques": "What is typeof operator?",
      "Ans": "JavaScript provides a typeof operator that can examine a value and tell you what type it is."
  },
  {
      "id": 6,
      "Ques": "Difference between ‘==’ and ‘===’ operators?",
      "Ans": "Both are comparison operators. The difference between them is that ‘==’ compares values while ‘===’ compares both values and types."
  },
  {
      "id": 7,
      "Ques": "What is the object type?",
      "Ans": "The object type refers to a compound value where you can set properties (named locations) that each holds their own values of any type."
  },
  {
      "id": 8,
      "Ques": "Explain arrays in JavaScript",
      "Ans": "An array is an object that holds values (of any type) not particularly in named properties/keys, but rather in numerically indexed positions."
  },
  {
      "id": 9,
      "Ques": "What is primitive types?",
      "Ans": "Primitive data types can store only a single value. Returns string, number, boolean, bigint, undefined, null, Symbol."
  },
  {
      "id": 10,
      "Ques": "What is non-primitive types?",
      "Ans": "To store multiple and complex values, non-primitive data types are used. Object - Used to store a collection of data."
  },
  {
      "id": 11,
      "Ques": "How to pass data from child to parent in ReactJS?",
      "Ans": "In ReactJS, data flow between components is typically unidirectional, meaning data is passed from parent components to child components. However, to pass data from a child component back to its parent, create a callback function in the parent component, pass it as a prop to the child component, and then call this callback from the child with the data."
  },
  {
      "id": 12,
      "Ques": "Define var keyword",
      "Ans": "The var keyword was used to declare variables globally or within a function, regardless of block scope. Variables declared with var are function-scoped or globally-scoped."
  },
  {
      "id": 13,
      "Ques": "Define let keyword",
      "Ans": "Variables declared with let are block-scoped, meaning they are only available within the block where they are defined."
  },
  {
      "id": 14,
      "Ques": "What is NaN property in JavaScript?",
      "Ans": "NaN stands for 'Not-a-Number'. It represents a value that is not a legal number. The typeof NaN returns 'number'. Use the isNaN() function to check if a value is NaN."
  },
  {
      "id": 15,
      "Ques": "Explain passed by value and passed by reference.",
      "Ans": "In JavaScript, primitive data types are passed by value while non-primitive data types are passed by reference."
  },
  {
      "id": 16,
      "Ques": "What are some advantages of using External JavaScript?",
      "Ans": "External JavaScript is written in a separate file and linked to HTML. Advantages include code reuse, better code organization, and improved readability."
  },
  {
      "id": 17,
      "Ques": "Explain Scope in JavaScript.",
      "Ans": "Scope determines the accessibility of variables and functions. Types include global scope, function scope, and block scope."
  },
  {
      "id": 18,
      "Ques": "Global Scope?",
      "Ans": "Variables or functions declared in the global namespace are accessible from anywhere in the code."
  },
  {
      "id": 19,
      "Ques": "Functional Scope?",
      "Ans": "Variables or functions declared inside a function are only accessible within that function."
  },
  {
      "id": 20,
      "Ques": "Block Scope?",
      "Ans": "Block scope is for variables declared with let and const. They are accessible only within the block where they are declared."
  },
  {
      "id": 21,
      "Ques": "Explain Closures in JavaScript.",
      "Ans": "Closures allow a function to remember its lexical scope even after its execution context has finished. This enables the function to access variables from its outer scope."
  },
  {
      "id": 22,
      "Ques": "Mention some advantages of JavaScript.",
      "Ans": "JavaScript is simple to learn, runs on both client and server sides, and provides a variety of frameworks and tools for development."
  },
  {
      "id": 23,
      "Ques": "What are object prototypes?",
      "Ans": "Prototypes are blueprints for objects that allow inheritance of properties and methods. All JavaScript objects inherit properties from a prototype."
  },
  {
      "id": 24,
      "Ques": "What is the use of a constructor function in JavaScript?",
      "Ans": "Constructor functions create objects with similar properties and methods, enabling code reuse."
  },
  {
      "id": 25,
      "Ques": "What is DOM?",
      "Ans": "DOM stands for Document Object Model. It is a programming interface for HTML and XML documents that allows manipulation of document elements."
  },
  {
      "id": 26,
      "Ques": "What do you mean by BOM?",
      "Ans": "BOM stands for Browser Object Model. It allows interaction with the browser, including properties like window, document, and location."
  },
  {
      "id": 27,
      "Ques": "What is the distinction between client-side and server-side JavaScript?",
      "Ans": "Client-side JavaScript runs in the browser, handling user interactions and UI updates. Server-side JavaScript runs on the server, managing data and business logic."
  },
  {
      "id": 28,
      "Ques": "What are arrow functions?",
      "Ans": "Arrow functions provide a concise syntax for writing functions. They are function expressions and do not have their own 'this' context."
  },
  {
      "id": 29,
      "Ques": "What is the rest parameter?",
      "Ans": "The rest parameter allows a function to accept an indefinite number of arguments as an array. It is denoted by three dots (...) before the parameter name."
  },
  {
      "id": 30,
      "Ques": "What is the use of promises in JavaScript?",
      "Ans": "Promises handle asynchronous operations. They can be in one of four states: pending, fulfilled, rejected, or settled."
  },
  {
      "id": 31,
      "Ques": "Which company developed JavaScript?",
      "Ans": "JavaScript was developed by Netscape and created by Brendan Eich in 1995."
  },
  {
      "id": 32,
      "Ques": "What is a prompt box?",
      "Ans": "A prompt box is a dialog box that prompts the user to input some text. It returns the text entered by the user or null if canceled."
  },
  {
      "id": 33,
      "Ques": "What are the types of Pop up boxes available in JavaScript?",
      "Ans": "The three types of pop-up boxes are Alert, Confirm, and Prompt."
  },
  {
      "id": 34,
      "Ques": "What is a confirm box?",
      "Ans": "The confirm() method displays a dialog box with a message and two buttons: OK and Cancel. It returns true if OK is clicked, and false if Cancel is clicked."
  },
  {
      "id": 35,
      "Ques": "What is Alert box?",
      "Ans": "The alert() method displays a dialog box with a message and an OK button. It is used to alert the user with information."
  },
  {
      "id": 36,
      "Ques": "What is the use of void(0)?",
      "Ans": "void(0) is used to call another method without refreshing the page, passing 'zero' as the parameter."
  },
  {
      "id": 37,
      "Ques": "What are Imports and Exports in JavaScript?",
      "Ans": "Imports and exports are used to include and share code between different files. Exports make code available for import in other files, while imports bring in code from other files."
  },
  {
      "id": 38,
      "Ques": "Explain the spread operator.",
      "Ans": "The spread operator (...) allows an iterable to be expanded in places where zero or more arguments or elements are expected. It is often used to copy or merge arrays and objects."
  },
  {
      "id": 39,
      "Ques": "What are template literals?",
      "Ans": "Template literals are string literals allowing embedded expressions. They use backticks (`) instead of quotes and can contain placeholders for variables."
  },
  {
  "id": 40,
  "Ques": "What is the significance of async/await?",
  "Ans": "Async/await simplifies handling asynchronous operations. 'async' declares a function that returns a promise, while 'await' pauses execution until the promise is resolved."
  },
  {
    "id": 41,
    "Ques": "What is Axios method to fetch API?",
    "Ans": "Axios is a popular JavaScript library for making HTTP requests, and it works great with React. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations (create, read, update and delete), as well as handle the responses."
  },
  {
    "id": 42,
    "Ques": "What is client-side Programming?",
    "Ans": "It is the program that runs on the client machine (browser) and deals with the user interface/display and any other processing that can happen on client machine like reading/writing cookies. 1) Interact with temporary storage, 2) Make interactive web pages, 3) Interact with local storage, 4) Sending request for data to server, 5) Send request to server, 6) Work as an interface between server and user."
  },
  {
    "id": 43,
    "Ques": "Server-Side Programming",
    "Ans": "It is the program that runs on server dealing with the generation of content of web page. 1) Querying the database, 2) Operations over database, 3) Access/Write a file on server, 4) Interact with other servers, 5) Structure web applications, 6) Process user input. For example if user input is a text in search box, run a search algorithm on data stored on server and send the results."
  },
  {
    "id": 44,
    "Ques": "What is End User?",
    "Ans": "The term /end user/ refers to the consumer of a good or service, often who has some innate know-how that is unique to consumers."
  },
  {
    "id": 45,
    "Ques": "What is Rest API?",
    "Ans": "They allow communication between different applications over the internet. REST (which stands for Representational State Transfer) APIs operate on a stateless client-server architecture, providing a standardized way to create, read, update, and delete resources."
  },
  {
    "id": 46,
    "Ques": "What do you understand about Redux Toolkit?",
    "Ans": "Redux Toolkit is Redux's official, opinionated, batteries included toolset for efficient Redux development. It also consists of the most widely used Redux add-ons, for instance, Redux Thunk for asynchronous logic, Reselect for writing selector functions and many more for making development easy for developers and saving them time."
  },
  {
    "id": 47,
    "Ques": "Is it true that Redux can only be used with React?",
    "Ans": "No, it is not true that Redux can only be used with React. Redux is being used as a data store for lots of UI layers. There are bindings available in Redux for React, Angular, Angular 2, Vue, etc."
  },
  {
    "id": 48,
    "Ques": "What are reducers in Redux's architecture?",
    "Ans": "Reducers in Redux's architecture are pure functions that are used to take the previous state and an action and return the next state. Its syntax is given below: (previous_state, action) => new_state."
  },
  {
    "id": 49,
    "Ques": "Describe what is meant by a 'store' in Redux.",
    "Ans": "“Store” in Redux is used to carry together all the states, reducers, and actions which create the app. Some of the responsibilities of the store are as follows: 1) The state of the current application from inside is held by the Redux Store, 2) We can access the current state using store.getState(), 3) We can update the state using store.dispatch(action), 4) We can also register listener callbacks using the store.subscriber(listener)."
  },
  {
    "id": 50,
    "Ques": "Name all the Redux Store methods.",
    "Ans": "1) getState(), 2) subscribe(listener), 3) dispatch(action), 4) replaceReducer(nextReducer)."
  },
  {
    "id": 51,
    "Ques": "What is useMemo Hook?",
    "Ans": "useMemo is a React Hook that lets you cache the result of a calculation between re-renders."
  },
  {
    "id": 52,
    "Ques": "What is useCallback hook?",
    "Ans": "useCallback can be used when we want to prevent unnecessary renders from the child components. It helps to resolve side effects."
  },
  {
    "id": 53,
    "Ques": "What is a state object?",
    "Ans": "A state object is a plain JavaScript object that developers use in React to show information on a component’s current properties. Developers can manage the state object in the component. Changing the state object causes the component to re-render."
  },
  {
    "id": 54,
    "Ques": "use custom hook?",
    "Ans": "Custom hooks are normal JavaScript functions whose names start with “use” and they may call other hooks. We use custom hooks to maintain the DRY concept that is Don’t Repeat Yourself. It helps us to write logic once and use it anywhere in the code."
  },
  {
    "id": 55,
    "Ques": "What are events in React?",
    "Ans": "Whenever there are actions performed in React, such as hovering the mouse or pressing a key on the keyboard, these actions trigger events. Events then perform set activities as a response to these triggers. Handling an event in React is very similar to that in the DOM architecture."
  },
  {
    "id": 56,
    "Ques": "What is Express JS?",
    "Ans": "Express is a framework or NPM package used to handle various tasks at the server side."
  },
  {
    "id": 57,
    "Ques": "In Express use of (app.get)",
    "Ans": "Doing something for that particular path happens at the backend whenever someone sends a request to that particular path."
  },
  {
    "id": 58,
    "Ques": "In Express use of (req, res) Line",
    "Ans": "This is a callback function with 2 parameters. req = request used to get data from the UI (frontend side). res = response is used to send data to UI (frontend side)."
  },
  {
    "id": 59,
    "Ques": "Which API method is used to send data backend to frontend?",
    "Ans": "GET."
  },
  {
    "id": 60,
    "Ques": "Which API method is used to send data frontend to backend?",
    "Ans": "POST."
  },
  {
    "id": 61,
    "Ques": "PORT Number?",
    "Ans": "Port number is a numeric value used in computer networking to identify a specific process or service on a host."
  }
]

export default Ques ;