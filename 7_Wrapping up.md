 - If you are hosting your app on Firebase or any otehr hosting service, install
  - `import {applyMiddleware} from 'redux'`
  - Install `thunks` and import as `import thunk from 'react-thunk'` 
  - use this in the store as
    `store = createStore(applyMiddleware(thunk), ...)`  
    
 - Find the snapshot to add and load post from firebase: 
 
 ![alt text](https://github.com/Amik-Sen-Fun/React-JS-and-Redux/blob/main/API%20calls%20firebase.png)
