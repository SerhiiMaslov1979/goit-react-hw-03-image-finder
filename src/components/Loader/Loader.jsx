import { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class App extends Component {
  render() {
    return (
      <div className="loaderContainer">
        <Loader
          type="Puff"
          color="#000"
          height={40}
          width={40}
          timeout={5000}
        />
      </div>
    );
  }
}
