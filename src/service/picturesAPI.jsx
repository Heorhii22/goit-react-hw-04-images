import axios from 'axios';

export const fetchPhoto = async (searchQuery, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=34193099-075808226620db616b3773f0f&image_type=photo&orientation=horizontal&per_page=12`
  );

  return data;
};
