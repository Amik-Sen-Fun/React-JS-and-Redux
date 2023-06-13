# Why Redux?

- As the application grows, there will be more complexity meaning more bugs. 
- `redux` gives us a `store` to control the `state` of our application. 
- The `state` in `redux` is only `read-only`.
- So, `component` cannot change state. Instead each `component` can emit `actions` that are used to update state in a strict order.
- These action are reduced in a single place, the `Root reducer`. 
- `Reducer` updates the `store`.
- When is the `store` useful?
  - Passing data as `props` to sub-components. It becomes complicated. Access directly `store`.
  - It keeps the `state` _predictable_

So the three main parts of redux are: 
- Store
- Action 
- Reducer

To install redux: 
```
npm install redux
```

# Store

To define the store we write the following in the `index.js`

```js
import {createStore} from 'redux'

const store = createStore();
```

# Reducer

Now we will define `reducer` for managing our `state`. We define reducers in a new folder in `src` named `redux`.
- Create a file `reducer.js` and inside it write:

```js
import posts from '../data/posts'
const postReducer = function posts(state = posts, action){
    return state;
}

export default postReducer
```

- To envoke this reducer and initialise the state do: 
  ```js
  import {createStore} from 'redux'
  import rootReducer from '../redux/reducer'

  const store = createStore(rootReducer);
  ```

# Connect Store to Reducer

So we have created our store, but how to we connect it to our components. For this we will be needing the `provider`.

For this first install `react-redux` using `npm install react-redux`

Function of `provider`: provide state to deeply nested components directly and not as a prop. 

> As a debugging tool install `react dev tools` from chrome extension store. 

- First we will mention the provider in our application 
 ```js
  import {createStore} from 'redux'
  import { Provider } from 'react-redux'
  import rootReducer from '../redux/reducer'

  const store = createStore(rootReducer);
 
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  ```
- Now the component that we want to connect with the provider, we do as by defining a new connection file say `App.js` in photowall:
  ```js
  // App.js
  import Main from './Main'
  import {connect} from 'react-redux'

  function mapStateToProps(state) {
    return {
      posts: state
    }
  }

  const App = connect(mapStateToProps)(Main) // connect 
  export default App
  ```
  
  This can also be done inside `Main.js` as: 
  
  ```js
  // Main.js
  import {connect} from 'react-redux'

  function mapStateToProps(state) {
    return {
      posts: state
    }
  }
  
  function Main(){
    // blah blah
  }

  export default connect(mapStateToProps)(Main)
  ```
  Wherever you wanna access the store, just connect it like this, however, dont over-do it, it becomes complicated. 

# Defining Action

- Inside the `redux` folder make a file `action.js` where we will write actions. 
 ```js
 export function removePost(index){
    return{
        type: 'REMOVE_POST',
        index
    }
 }
 ```
 
 - Now to send this action to the reducer we need to connect it to the `dispatch` method inside the props.

  - So to do that in `Main.js`
  ```js
  import {removePost} from './action';
  
  class Main extends Component {
    constructor(){
      super();
    }
    render(){
        console.log(this.props.dispatch(removePost(1)));
        // blah blah code 
    }
  }
  ```
   - To remove this `.dispatch()` in `App.js`. 
   
  ```js
    // App.js
    import Main from './Main'
    import {connect} from 'react-redux'
    import {bindActionCreators} from 'redux'
    import {removePost} from './action';

    function mapStateToProps(state) {
      return {
        posts: state
      }
    }

    function mapDispatchToProps(dispatch){
        return bindActionCreators({removePost}, dispatch)
    }
    
    const App = connect(mapStateToProps,mapDispatchToProps)(Main) // connect both to main 
    export default App 
  ```
  - Now after this we can write : 
  ```js
  import {removePost} from './action';
  
  class Main extends Component {
    constructor(){
      super();
    }
    render(){
        console.log(this.props.removePost(1));
        // blah blah code 
    }
  }
  ```
  
  >  Tbh IDK how but this action is now accessible in the `postReducer` actions. 
  - However, we cannot directly change the state of the store. We do this by using `switch` cases in the `reducer`:
  ```js
  import posts from '../data/posts'
  const postReducer = function posts(state = posts, action){
      switch (action.type){
          case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index+1)]
          default: return state
      }
      return state;
  }

  export default postReducer
  ```
 - We need to bind the `react-router` with the store as well we do that by:
  ```js
  // App.js
  import {withRouter} from 'react-router'
  // blah blah

  const App = withRouter(connect(mapStateToProps,mapDispatchToProps)(Main)) // connect both to main 
  export default App 
  ```  

- `history` that we access in the router for getting history, is part of a greater set known as `params`

- To pass `params` we first pass the `this.props` and then `params`. Else gives error. 

# Multiple reducers

- We can have multiple reducers, however we have to combine them all to make a single Root Reducder. This is done by: 
  ```js
  import {combineReducers} from 'redux'
  
  const rootReducer = combineReducers({reducer1, reducer2});
  ```
- One reducer can affect only one `state` of the `store` make sure to give the `state variable` and `reducer` the same name 

- However, every action goes to every reducer, so name the `type` accordingly and unique

> Implementation Gimic: To add an object to a state with key as some vaue and value as an array do ` return {...state, [action.postid]: [action.comment]}`
  The key is not an array but is represented like this, however the value is an array 
  
