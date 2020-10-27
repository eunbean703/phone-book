import React, {Component} from 'react';
import PhoneForm from './components/PhoneForm';

class App extends Component {
  render(){
  return (
    <div>
      <PhoneForm 
          onCreate= {this.handleCreate}/>
    </div>
  );
  }
}

export default App;
