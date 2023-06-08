import '../Stylesheets/App.css';
import Photowall from './Photowall';
import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state = {
      posts : [
          {
              name: 'Steve Jobs', 
              url: 'https://drive.google.com/uc?export=view&id=1NY0vrn7GzlYHlKk7Rynlz21ee1Q_zGYc'
          },
          {
              name: 'Amik Sen',
              url: 'https://drive.google.com/uc?export=view&id=1023md3ZN9dy--aeSgTKXWTsHFp2u8Dgz'
          },
          {
              name: 'Mridul Newar',
              url: 'https://drive.google.com/uc?export=view&id=1Nd3vxasz_MJHV23ocZOTaXMq6cbhTRR8'
          },
          {
              name: 'Dushyant Trivedi',
              url: 'https://drive.google.com/uc?export=view&id=18wsq-iOKzGetWMIfoVPYdpomgVAJUDyN'
          },
          {
              name: 'Bill Gates',
              url: 'https://drive.google.com/uc?export=view&id=18six-cV3eyXTrSdPkjE02fAWId5ns5f8'
          },
      ]
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Photowall</h1>
          <Photowall posts ={this.state.posts}/>
        </header>
      </div>
    );
  }
}

export default App;
