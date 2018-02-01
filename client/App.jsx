import React from 'react';
import ReactDOM from 'react-dom';

import Loading from './components/Loading.jsx'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded : false
    }

  }

  componentDidMount() {

  }


  render() {
    return !this.state.loaded
    ? ( <Loading />) 
    : (
        <div className="app">
          BOILER!
        </div> 
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
