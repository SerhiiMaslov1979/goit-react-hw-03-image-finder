import PropTypes from 'prop-types';

function ImageGalleryItem({
  webformatURL,
  alt,
  largeImageURL,
  id,
  onImageClick,
}) {
  const getlargeImageURL = e => {
    // console.log('event target', e.target);
    onImageClick({ url: e.target.dataset.largeimageurl, alt: e.target.alt });
  };

  return (
    <img
      src={webformatURL}
      alt={alt}
      className="ImageGalleryItem-image"
      data-largeimageurl={largeImageURL}
      data-id={id}
      onClick={getlargeImageURL}
    />
  );
}

ImageGalleryItem.propType = {
  webformatURL: PropTypes.string,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default ImageGalleryItem;
