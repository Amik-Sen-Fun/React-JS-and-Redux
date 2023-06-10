# Introduction

React builds single page application, menaing it doesn't have to request server for the next page's HTML code. 
It has them ready with a single call. 

Now, to route between these screens. There are basically two methods: 

- The `state` method: We mannually define a variable in state and then based on it's value the screen changes. 
  ```js
  // somwhere inside the class constructer 
  constructor(){
    super();
    this.state = {
      screen : "Page_1" // This is the variable that will control the displayed page 
    }

    this.removePhoto = this.removePhoto.bind(this);
  }
  
  render(){
    return (<div>
    {
        this.state.screen === "Page_1" && (
            <h1> This is Page 1 </h1>
        ) 
        // This HTML will be render because the state.screen is "Page_1"
        // We can use a button or some function to change this state value
    }
    {
       this.state.screen === "Page_2" && (
            <h1> This is Page 2 </h1>
        ) 
    }
    </div>)
  }
  ```
  - Problem: Upon pressing the back button in the browser, we wont be able to change the state of the application that will be 
  cause bad user experience that's why we use react router to deal with all these user experience thingy and ease our work. 
- The `React Router` method (commonly used): To use this we need to install it first. 
  ```shell
  npm install react-router-dom
  ```
  It has three components:
  - `Browser route`: That takes care of the use case that we talked earlier. To use this we implement it as:
    ```js
    // some code 
    import { BrowserRouter } from "react-router-dom";
    
    const root = createRoot(document.getElementById("root"));

    root.render(
      <BrowserRouter>
        {/* The rest of your app goes here */}
      </BrowserRouter>
    );
    ```
  - `Link`: This the replacement of the `<a>` tag in the web application and is used as follows, refer to the documentation for updated code:
    ```js
    // some code 
    import { Link } from "react-router-dom";
    
    // some more code :p 
     <Link to="about">About Us</Link> // notice the tahe and `to` keyword
    );
    ```
    
  - `Route`: The tag knows the path and knows what to render. This could be done using the `createBrowserRouter` or individual `Route` tags.
   - Implementation of the `createBrowserRouter`
    ```js
    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <div>
            <h1>Hello World</h1>
            <Link to="about">About Us</Link>
          </div>
        ),
      },
      {
        path: "about",
        element: <div>About</div>,
      },
    ]);
    ```
   - Implementation of the `Route`
   ```js
   // some code 
   render(){
    return (
      <div className="App">
      
      // for loading multiple components 
        <Route exact path = "/" render = {()=> (
            <header className="App-header">
              <h1>Photowall</h1>
              <Photowall posts ={this.state.posts} onRemove={this.removePhoto}/>
            </header>
        )}>
        
        // for loading single components 
        <Route path = "/AddPhoto" component = {AddPhoto}/>
      </div>
    );
  }
   ```
   
   
