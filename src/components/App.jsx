import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import ModalImage from './Modal/ModalImage';
import imageApi from '../api/api';
import './styles.css';

export class App extends Component {
  state = {
    images: [],
    keyword: '',
    page: 1,
    largeImageURL: null,
    loading: false,
    error: null,
    totalImages: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { keyword, page } = this.state;

    if (prevState.keyword !== keyword || prevState.page !== page) {
      this.fetchImage();
    }
  }

  onSubmitForm = query => {
    this.setState({
      keyword: query,
      page: 1,
      images: [],
      totalImages: 0,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  fetchImage = () => {
    const { keyword, page } = this.state;
    this.setState({ loading: true });
    imageApi(keyword, page)
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          totalImages: data.totalHits,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  saveLargeImage = ImageURL => {
  this.setState({ largeImageURL: ImageURL });
  };

  hideLargeImage = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { images, loading, error, largeImageURL, totalImages } = this.state;
    // console.log('largeImageURL', largeImageURL);
    // console.log('TIME', Date.now());
    const showButton = !loading && images.length !== totalImages;

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

        {showButton && (
          <Button text="Load more" buttonAction={this.onLoadMore} />
        )}

        {loading && <Loader />}
        {error && <p>ERROR</p>}
      </>
    );
  }
}
