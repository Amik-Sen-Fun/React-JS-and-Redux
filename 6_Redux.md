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

To define the store we write the following in the `index.js`

```js
import {createStore} from 'redux'

const store = createStore();
```

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

So we have created our store, but how to we connect it to our components. For this we will be needing the `provider`.

For this first install `react-redux` using `npm install react-redux`

Function of `provider`: provide state to deeply nested components directly and not as a prop. 

> As a debugging tool install `react dev tools`.

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

