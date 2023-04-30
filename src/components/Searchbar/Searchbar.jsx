import { useState } from 'react';
import { Notify } from 'notiflix';
import { FiSearch } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import css from 'components/Styles.module.css';
import PropTypes from 'prop-types';

export function Searchbar({ onSearchQuery }) {
  const [query, setQuery] = useState('');

  const onHandleInput = e => {
    setQuery(e.currentTarget.value);
  };

  const onSearch = e => {
    e.preventDefault();
    onSearchQuery(query);
    if (query === '') {
      Notify.info('Введіть Ваш пошуковий запит!');
    }
    setQuery('');
  };

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSearch}>
        <button type="submit" className={css.SearchForm_button}>
          <IconContext.Provider value={{ size: '1.5em' }}>
            <div>
              <FiSearch />
            </div>
          </IconContext.Provider>
          <span className={css.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={css.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onHandleInput}
          value={query}
          required
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSearchQuery: PropTypes.func.isRequired,
};
