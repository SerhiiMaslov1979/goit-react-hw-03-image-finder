import PropType from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images, onImageClick }) {
  console.log(images);
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <li key={image.id} className="ImagegalleryItem">
          <ImageGalleryItem
            webformatURL={image.webformatURL}
            alt={image.tags}
            largeImageURL={image.largeImageURL}
            id={image.id}
            // onImageClick={onImageClick}
          />
        </li>
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropType.arrayOf(
    PropType.shape({
      id: PropType.number.isRequired,
      webformatURL: PropType.string.isRequired,
      largeImageURL: PropType.string.isRequired,
      tags: PropType.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropType.func.isRequired,
};
export default ImageGallery;
