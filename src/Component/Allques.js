 const Ques=[
{     
       Stat:"Question  ",
       id:"1",
       Ques:"What is Props ? ",
       Ans:" With the help of props we can share data between two components.  Undirectional ,Immutable ",
      },
      {
         id:2,
        Ques:"What is map function purpose ?",
        Ans:"The map function is used to create a new array by applying a given function to each element of an existing array .It allows transforming and manipulating array elements easily.",
      },
     {
      id:3,
     Ques:"What is Callback in js ?",
     Ans:"In JavaScript, functions are objects and therefore, functions can take other functions as arguments and can also be returned by other functions. A callback is a JavaScript function that is passed to another function as an argument or a parameter.",
    },
    {
      id:4,
      Ques:"What is inheritance in js",
      Ans:"Inheritance is a mechanism in js where an object can inherit properities and method object. IT allows for code reuse and creating hierical relationship between objects."
    },
    {
      id:5,
      Ques:"What is typeof operator?",
      Ans:"JavaScript provides a typeof operator that can examine a value and tell you what type it is:"
    },

    {
      id:6,
      Ques:"Difference between “ == “ and “ === “ operators. ?",
      Ans:" Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types."
    },
    {
      id:7,
      Ques:"What is the object type? ",
      Ans:" The object type refers to a compound value where you can set properties (named locations) that each holds their own values of any type."
    },
    {
      id:8,
      Ques:"Explain arrays in JavaScript",
      Ans:" An array is an object that holds values (of any type) not particularly in named properties/keys, but rather in numerically indexed positions:"
    },
    {
      id:9,
      Ques:" what is primitive types ? ",
      Ans:"Primitive data types can store only a single value. <br/>Returns string,number,boolean, bigint, undefined , null , Symbol "
    },
    {
      id:10,
      Ques:"What is  Non-primitive types ",
      Ans:"To store multiple and complex values, non-primitive data types are used.<br/>Object - Used to store collection of data. "
    },
    {
      id:11,
      Ques:"How to pass data from child to parent in reactjs ",
      Ans:"In ReactJS, data flow between components is typically unidirectional, meaning data is passed from parent components to child components. However, there are scenarios where you may need to pass data from a child component back to its parent component.<br/>In the parent component, create a callback function.<br/> This callback function will retrieve the data from the child component.Pass the callback function to the child as a prop from the parent component.<br/>The child component calls the parent callback function using props and passes the data to the parent component"
    },
    {
      id:12,
      Ques:"define var keyword ",
      Ans:"  There was only one way of declaring variables and that was using the var keyword. A variable declared with var is defined throughout the program. One of the issues with using the var keyword was redeclaring a variable inside a block will also redeclare the variable outside the block.  "
    },
    {
      id:13,
      Ques:"Define let keyword ",
      Ans:"Variables declared by let are only available inside the block where they’re defined. "
    },
    {
      id:14,
      Ques:" What is NaN property in JavaScript?",
      Ans:"NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number.typeof of NaN will return a Number.To check if a value is NaN, we use the isNaN() function, "
    },
    {
      id:15,
      Ques:"Explain passed by value and passed by reference. ",
      Ans:"In JavaScript, primitive data types are passed by value and non-primitive data types are passed by reference . "
    },
    {
      id:16,
      Ques:" What are some advantages of using External JavaScript? ",
      Ans:" External JavaScript is the JavaScript Code (script) written in a separate file with the extension.js, and then we link that file inside the <head> or <body> element of the HTML file where the code is to be placed. It allows web designers and developers to collaborate on HTML and javascript files.We can reuse the code.Code readability is simple in external javascript"
    },
    {
      id:17,
      Ques:" Explain Scope in javascript. ",
      Ans:"Scope in JS determines the accessibility of variables and functions at various parts of one’s code.<br/>Global Scope Local or Function Scope Block Scope "
    },
    {
      id:18,
      Ques:"Global Scope ? ",
      Ans:" Variables or functions declared in the global namespace have global scope, which means all the variables and functions having global scope can be accessed from anywhere inside the code."
    },
    {
      id:19,
      Ques:" Functional scope ?",
      Ans:"  Any variables or functions declared inside a function have local/function scope, which means that all the variables and functions declared inside a function, can be accessed from within the function and not outside of it."
    },
    {
      id:20,
      Ques:"Block scope ",
      Ans:"Block scope is related to the variables declared using let and const. Variables declared with var do not have block scope. Block scope tells us that any variable declared inside a block { }, can be accessed only inside that block and cannot be accessed outside of it. "
    },
    {
      id:21,
      Ques:"Explain Closures in JavaScript. ",
      Ans:"Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.<br/>This ability of a function to store a variable for further reference even after it is executed is called Closure. "
    },
    {
      id:22,
      Ques:" Mention some advantages of javascript.",
      Ans:" Javascript is executed on the client-side as well as server-side also. There are a variety of Frontend Frameworks that you may study and utilize. However, if you want to use JavaScript on the backend, you'll need to learn NodeJS. It is currently the only JavaScript framework that may be used on the backend<br/> 1.Javascript is a simple language to learn,Web pages now have more functionality because of Javascript, 2 To the end-user, 3 Javascript is quite quick"
    },
    {
      id:23,
      Ques:"What are object prototypes? ",
      Ans:"All javascript objects inherit properties from a prototype.<br/> A prototype is a blueprint of an object. The prototype allows us to use properties and methods on an object even if the properties and methods do not exist on the current object. "
    },
    {
      id:24,
      Ques:"What is the use of a constructor function in javascript? ",
      Ans:"Constructor functions are used to create objects in javascript.When do we use constructor functions? If we want to create multiple objects having similar properties and methods, constructor functions are used. "
    },
    {
      id:25,
      Ques:"What is DOM? ",
      Ans:"OM stands for Document Object Model.  DOM is a programming interface for HTML and XML documents.When the browser tries to render an HTML document, it creates an object based on the HTML document called DOM. Using this DOM, we can manipulate or change various elements inside the HTML document. "
    },
    {
      id:26,
      Ques:"What do you mean by BOM? ",
      Ans:" Browser Object Model is known as BOM. It allows users to interact with the browser. A browser's initial object is a window. As a result, you may call all of the window's functions directly or by referencing the window. The document, history, screen, navigator, location, and other attributes are available in the window object"
    },
    {
      id:27,
      Ques:"What is the distinction between client-side and server-side JavaScript? ",
      Ans:" Client-side JavaScript is made up of two parts, a fundamental language and predefined objects for performing JavaScript in a browser. JavaScript for the client is automatically included in the HTML pages. At runtime, the browser understands this script."
    },
    {
      id:28,
      Ques:" What are arrow functions? ",
      Ans:"Arrow functions were introduced in the ES6 version of javascript. They provide us with a new and shorter syntax for declaring functions. Arrow functions can only be used as a function expression. "
    },
    {
      id:29,
      Ques:" What is the rest parameter ?",
      Ans:" It provides an improved way of handling the parameters of a function.Using the rest parameter syntax, we can create functions that can take a variable number of arguments.Any number of arguments will be converted into an array using the rest parameter.It also helps in extracting all or some parts of the arguments.Rest parameters can be used by applying three dots (...) before the parameters."
    },
    {
      id:30,
      Ques:" What is the use of promises in javascript?",
      Ans:"Promises are used to handle asynchronous operations in javascript.<br/> Promise object has four states -Pending - Initial state of promise. This state represents that the promise has neither been fulfilled nor been rejected, it is in the pending state.2.Fulfilled - This state represents that the promise has been fulfilled, meaning the async operation is completed. 3.Rejected - This state represents that the promise has been rejected for some reason, meaning the async operation has failed. 4 Settled - This state represents that the promise has been either rejected or fulfilled. "
    },
    {
      id:31,
      Ques:"Which company developed JavaScript? ",
      Ans:" Netscape developed JavaScript and was created by Brenden Eich in the year of 1995."
    },
    {
      id:33,
      Ques:"What are the types of Pop up boxes available in JavaScript? ",
      Ans:" There are three types of pop boxes available in JavaScript. : Alert,Confirm,Prompt"
    },
    {
      id:32,
      Ques:" What is a prompt box? ",
      Ans:"The prompt box is a dialog box with an optional message prompting the user to input some text. It is often used if the user wants to input a value before entering a page. It returns a string containing the text entered by the user, or null. "
    },
   
    {
      id:34,
      Ques:" What is a confirm box ?  ",
      Ans:" The confirm() method in JavaScript displays a dialog box with a message and two buttons: OK and Cancel. It is often used to get user confirmation before proceeding with an action, returning true if OK is clicked, and false if Cancel is clicked."
    },
    {
      id:35,
      Ques:"What is Alert box ? ",
      Ans:" HTML Window alert() method is used to display an alert box. It displays a specified message along with an OK button and is generally used to make sure that the information comes through the user. It returns a string that represents the text to display in the alert box. "
    },
    {
      id:36,
      Ques:" What is the use of void(0) ? ",
      Ans:" The void(0) is used to call another method without refreshing the page during the calling time parameter “zero” will be passed."
    },
    {
      id:37,
      Ques:" What are Imports and Exports in JavaScript",
      Ans:"Imports and exports help in writing modular code for our JavaScript applications. With the help of imports and exports, we can split a JavaScript code into multiple files in a project. This greatly simplifies the application source code and encourages code readability "
    },
    
{
  id:38,
  Ques:" What is react redux ? ",
  Ans:"Redux allows React components to read data from a Redux Store, and dispatch Actions to the Store to update ... Redux provides a pair of custom React hooks that allow your React components to interact with the Redux store.useSelector reads a value from the store state and subscribes to updates, while useDispatch returns the store's dispatch method to let you dispatch actions. ",

},
{
  id:39,
  Ques:"What is API ",
  Ans:"An API call in React is the process of sending a request to a web API from within React, which allows your application to interact and exchange information with other systems. There are three common ways to make API calls in React:XMLHttpRequest,Fetch API,Axios ",

},{
  id:40,
  Ques:"What is Fetch API Method ? ",
  Ans:"Fetch API is a modern, promise-based API for making HTTP requests in JavaScript. It provides a simple and flexible interface for making GET, POST, PUT and DELETE requests and handling the response from the server.Here’s an example of how you can use fetch to make a GET request to retrieve data from a server in a React component:",

},{
  id:41,
  Ques:"What is Axios method to fetch API ?  ",
  Ans:"Axios is a popular JavaScript library for making HTTP requests, and it works great with React. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations (create, read, update and delete), as well as handle the responses. ",

},{
  id:42,
  Ques:"What is clint-side-Programming ?  ",
  Ans:"It is the program that runs on the client machine (browser) and deals with the user interface/display and any other processing that can happen on client machine like reading/writing cookies.1) Interact with temporary storage,2) Make interactive web pages,3) Interact with local storage,4) Sending request for data to server,5) Send request to server,6) work as an interface between server and user ",

},{
  id:43,
  Ques:"Server-Side-Programing ",
  Ans:"It is the program that runs on server dealing with the generation of content of web page. 1) Querying the database,2) Operations over database,3) Access/Write a file on server,4) Interact with other servers,5) Structure web applications.,6) Process user input. For example if user input is a text in search box, run a search algorithm on data stored on server and send the results. ",

},{
  id:44,
  Ques:"What is End User ? ",
  Ans:"The term /end user/ refers to the consumer of a good or service, often who has some innate know-how that is unique to consumers. ",

},{
  id:45,
  Ques:"What is Rest API ? ",
  Ans:"They allow communication between different applications over the internet. REST (which stands for Representational State Transfer) APIs operate on a stateless client-server architecture, providing a standardized way to create, read, update, and delete resources ",

},{
  id:46,
  Ques:"What do you understand about Redux Toolkit?",
  Ans:"Redux Toolkit is Redux's official, opinionated, batteries included toolset for efficient Redux development. It also consists of the most widely used Redux add-ons, for instance, Redux Thunk for asynchronous logic,  Reselect for writing selector functions and many more for making development easy for developers and saving them time. ",

},{
  id:47,
  Ques:"Is it true that Redux can only be used with React? ",
  Ans:"No, it is not true that Redux can only be used with React. Redux is being used as a data store for lots of UI layers. There are bindings available in Redux for React, Angular, Angular 2, Vue, etc ",

},{
  id:48,
  Ques:" What are reducers in Redux's architecture?",
  Ans:"Reducers in Redux's architecture are pure functions that are used to take the previous state and an action and return the next state. Its syntax is given below:  (previous_state, action) => new_state ",

},{
  id:49,
  Ques:"Describe what is meant by a 'store' in Redux. ",
  Ans:"“Store” in Redux is used to carry together all the states, reducers, and actions which create the app. Some of the responsibilities of the store are as follows: 1)The state of the current application from inside is held by the Redux Store, 2)We can access the current state using store.getState(),3)We can update the state using store.dispatch(action),4)We can also register listener callbacks using the store.subscriber(listener) ",

},{
  id:50,
  Ques:"Name all the Redux Store methods. ",
  Ans:" 1)getState(), 2)subscribe(listener), 3)dispatch(action), 4)replaceReducer(nextReducer) ",

},{
  id:51,
  Ques:" What is useMemo Hook ? ",
  Ans:"useMemo is a React Hook that lets you cache the result of a calculation between re-renders. ",

},{
  id:52,
  Ques:" What is useCallback hook ?",
  Ans:"useCallback can be used when we want to prevent unnecessary renders from the chld components. It helpd to resolve side effects ",

},{
  id:53,
  Ques:" What is a state object? ",
  Ans:"A state object is a plain JavaScript object that developers use in React to show information on a component’s current properties. Developers can manage the state object in the component. Changing the state object causes the component to re-render. ",

},{
  id:54,
  Ques:"use custom hook ? ",
  Ans:"Custom hooks are normal JavaScript functions whose names start with “use” and they may call other hooks. We use custom hooks to maintain the DRY concept that is Don’t Repeat Yourself. It helps us to write a logic once and use it anywhere in the code. ",

},{
  id:55,
  Ques:"What are events in React? ",
  Ans:" Whenever there are actions performed in React, such as hovering the mouse or pressing a key on the keyboard, these actions trigger events. Events then perform set activities as a response to these triggers. Handling an event in React is very similar to that in the DOM architecture.",

},{
  id:56,
  Ques:" what is express js ?",
  Ans:" Express is a framework  or NPM package used to different type of task at the server side. ",

},{
  id:57,
  Ques:"In  express use of (app.get) ",
  Ans:" Doing something for that particular path happen at the backend , whenever someone send the request at the particular path. ",

},{
  id:58,
  Ques:"In express use of (req,res) Line  ",
  Ans:"this is a callback function with 2 parametre. req = request used to get data from the UI (Frontedend side). res = response is used to send data on ui (frontend side)  ",

},{
  id:59,
  Ques:"Which API method use to send data backend to frontend ? ",
  Ans:" Get ",

},{
  id:60,
  Ques:"Which API method use to send data frontend  to backend  ?  ",
  Ans:"Post ",

},{
  id:61,
  Ques:" PORT Number ?",
  Ans:" Port number is a numaric value ,used in computer networking to identify specific process or service on host . ",

},{
  id:62,
  Ques:" ",
  Ans:" ",

},{
  id:63,
  Ques:" ",
  Ans:" ",

},{
  id:64,
  Ques:" ",
  Ans:" ",

},{
  id:65,
  Ques:" ",
  Ans:" ",

},{
  id:66,
  Ques:" ",
  Ans:" ",

},{
  id:67,
  Ques:" ",
  Ans:" ",

},{
  id:68,
  Ques:" ",
  Ans:" ",

},{
  id:69,
  Ques:" ",
  Ans:" ",

},{
  id:70,
  Ques:" ",
  Ans:" ",

},{
  id:71,
  Ques:" ",
  Ans:" ",

},{
  id:72,
  Ques:" ",
  Ans:" ",

},{
  id:73,
  Ques:" ",
  Ans:" ",

},{
  id:74,
  Ques:" ",
  Ans:" ",

},{
  id:75,
  Ques:" ",
  Ans:" ",

},{
  id:76,
  Ques:" ",
  Ans:" ",

},{
  id:77,
  Ques:" ",
  Ans:" ",

},{
  id:78,
  Ques:" ",
  Ans:" ",

},{
  id:79,
  Ques:" ",
  Ans:" ",

},
]
export default Ques