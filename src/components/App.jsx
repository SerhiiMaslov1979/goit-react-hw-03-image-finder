import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  // componentDidMount() {
  //   fetch(
  //     'https://pixabay.com/api/?q=cat&page=1&key=34473275-92c4bd108423fa9b9bf2a0798&image_type=photo&orientation=horizontal&per_page=12'
  //   )
  //     .then(res => res.json())
  //     .then(console.log);
  // }

  // state = {
  //   images: [],
  //   largeImageURL: null,
  //   loading: false,
  //   error: null,
  //   keyword: '',
  //   page: 1,
  //   lastPage: false,
  // };

  // onSubmintForm = query => {
  //   this.setState({
  //     keyword: query,
  //     page: 1,
  //     images: [],
  //     lastPage: false,
  //   });
  // };

  // onSubmintForm = query => {};

  render() {
    return (
      <>
        <Searchbar onSubmintForm={this.onSubmintForm} />
      </>
    );
  }
}
