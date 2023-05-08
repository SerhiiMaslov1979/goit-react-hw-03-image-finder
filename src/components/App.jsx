import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import ModalImage from './Modal/ModalImage';
import imageApi from '../api/api';

export class App extends Component {
  state = {
    images: [],
    largeImageURL: null,
    loading: false,
    error: null,
    keyword: '',
    page: 1,
    lastPage: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { keyword, page } = this.state;

    if (prevState.keyword !== keyword) {
      this.fetchImage();
    }

    if (page > 2 && prevState.page !== page) {
      this.scrollDown();
    }
  }

  onSubmitForm = query => {
    this.setState({
      keyword: query,
      page: 1,
      images: [],
      lastPage: false,
    });
  };

  saveLargeImage = largeImageURL => {
    this.setState({ largeImageURL: largeImageURL });
  };

  hideLargeImage = () => {
    this.setState({ largeImageURL: null });
  };

  isLastPage = data => {
    // console.log(this.state.images.length);
    // console.log(data.totalHits);
    if (this.state.images.length === data.totalHits) {
      this.setState({ lastPage: true });
    }
  };

  scrollDown() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  fetchImage = () => {
    const { keyword, page } = this.state;
    this.setState({ loading: true });
    imageApi(keyword, page)
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          page: prevState.page + 1,
        }));

        this.isLastPage(data);
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { images, loading, error, largeImageURL, lastPage } = this.state;
    // console.log(images.length <= 12 && images.length > 0);
    const first = images.length >= 0 && images.length <= 12;
    // const { images, loading, error, largeImageURL } = this.state;
    return (
      <>
        <Searchbar onSubmitForm={this.onSubmitForm} />
        {images.length > 0 && (
          <ImageGallery images={images} onImageClick={this.saveLargeImage} />
        )}
        {largeImageURL && (
          <Modal onCloseModal={this.hideLargeImage}>
            <ModalImage largeImage={largeImageURL} />
          </Modal>
        )}

        {first && !lastPage && !loading && (
          <Button text="Load more" buttonAction={this.fetchImage} />
        )}

        {/* {images.length > 12 && !lastPage && (
          <Button text="Load more" buttonAction={this.fetchImage} />
        )} */}

        {/* <Button text="Load more" buttonAction={this.fetchImage} /> */}

        {loading && <Loader />}
        {error && <p>ERROR</p>}
      </>
    );
  }
}
