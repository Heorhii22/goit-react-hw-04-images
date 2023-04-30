import css from 'components/Styles.module.css';

export function Button({ onLoadMoreImg }) {
  return (
    <button type="submit" onClick={onLoadMoreImg} className={css.Button}>
      Load more
    </button>
  );
}
