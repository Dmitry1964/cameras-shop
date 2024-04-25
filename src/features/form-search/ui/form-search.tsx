import './form-search.css';
import { ChangeEvent, useState } from 'react';
import cn from 'classnames';
import { useAppSelector } from 'src/shared/hooks/hooks';
import { AppRoutes, TCamera, getSearchList } from 'src/shared';
import { Link } from 'react-router-dom';

const FormSearch = (): JSX.Element => {
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState<TCamera[]>([]);
  const camerasList = useAppSelector((state) => state.productsList.cameras);

  const handleSearchField = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearch(evt.target.value);
    setSearchList(getSearchList(camerasList, search));
  };
  const resetSearchList = () => {
    setSearch('');
    setSearchList([]);
  };

  const onCameraLinkClick = () => {
    resetSearchList();
  };

  const onResetButtonClick = () => {
    resetSearchList();
  };

  return (
    <div className="form-search">
      <form>
        <label>
          <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-lens"></use>
          </svg>
          <input
            value={search}
            onChange={(evt) => handleSearchField(evt)}
            className="form-search__input"
            type="text"
            autoComplete="off"
            placeholder="Поиск по сайту"
          />
        </label>
        <ul className={cn('form-search__select-list', { 'form-search__select-list--open': search.length >= 3 })}>
          {searchList.length > 0 &&
            searchList.map((item) => (
              <li key={item.id} className="form-search__select-item" tabIndex={0}>
                <Link
                  onClick={onCameraLinkClick}
                  to={`${AppRoutes.Camera}/${item.id}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
      </form>
      <button
        onClick={onResetButtonClick}
        className={cn('form-search__reset', { 'form-search__reset--open': search.length > 0 })}
        type="reset"
      >
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div >
  );
};

export default FormSearch;
