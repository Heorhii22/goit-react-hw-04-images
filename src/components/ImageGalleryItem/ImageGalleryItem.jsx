import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Modal } from 'components/Modal/Modal';
import css from 'components/Styles.module.css';

export function ImageGalleryItem({ image, tags, modalImage }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.position = showModal ? 'fixed' : '';
  }, [showModal]);

  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={image}
        alt={tags}
        onClick={toggleModal}
        className={css.ImageGalleryItemImage}
      />
      {showModal && (
        <Modal tags={tags} image={modalImage} toggleModal={toggleModal} />
      )}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  modalImage: PropTypes.string.isRequired,
};
