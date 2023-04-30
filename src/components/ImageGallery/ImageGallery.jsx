import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
import css from 'components/Styles.module.css';

export function ImageGallery({ images }) {
  return (
    <ul className={css.ImageGallery}>
      {images.length > 0 &&
        images.map(image => {
          return (
            <ImageGalleryItem
              image={image.webformatURL}
              key={nanoid()}
              tags={image.tags}
              modalImage={image.largeImageURL}
            />
          );
        })}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
