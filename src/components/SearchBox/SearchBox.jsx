import { useId } from 'react';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changefilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';

export const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();

  const reduxInputFilter = useSelector(selectNameFilter);
  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        id={searchId}
        value={reduxInputFilter}
        onChange={evt => {
          dispatch(changefilter(evt.target.value));
        }}
      />
    </div>
  );
};
