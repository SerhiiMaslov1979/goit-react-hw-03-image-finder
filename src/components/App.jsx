import { Component } from 'react';
import { apiSearch } from '../api/apiSearch';

export class App extends Component {
  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(console.log);
  }

  render() {
    return <div style={{}}> Hello my!!!</div>;
  }
}
