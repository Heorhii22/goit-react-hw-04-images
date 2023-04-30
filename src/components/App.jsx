import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import Spinner from './Loader/Loader';
import { Notify } from 'notiflix';

export const App = () => {
  const [query, setQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }

    setLoading(true);

    fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=34193099-075808226620db616b3773f0f&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data.hits.length);
        setPictures(prevState => [...prevState, ...data.hits]);
        if (!data.hits.length) {
          Notify.failure(`По запиту "${query}" нічого не знайдено.`);
        }
        setLoading(false);
      });
  }, [query, page]);

  const handleSearch = query => {
    setQuery(query);
    setPage(1);
    setPictures([]);
  };

  const onLoadMoreImg = () => {
    setPage(prevState => prevState + 1);
  };
  return (
    <>
      <Searchbar onSearchQuery={handleSearch} searchQuery={query} />
      {loading ? <Spinner /> : <ImageGallery images={pictures} />}
      {pictures.length / 12 === page && (
        <Button onLoadMoreImg={onLoadMoreImg} />
      )}
    </>
  );
};
