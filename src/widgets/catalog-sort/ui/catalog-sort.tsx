import { ChangeEvent, useEffect } from 'react';
import { sortList } from 'src/app/slices/product-list-slice/product-list-slice';
import { sortPricePopular, sortUpDown } from 'src/app/slices/sort-filter-slice/sort-filter-slice';
import { SORT_PRICE_POPULAR, SORT_UP_DOWN, SortedOptions } from 'src/shared';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks/hooks';

const CatalogSort = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const filterOptions = useAppSelector((state) => state.sortFilterOptions);
  const onSortButtonClick = (evt: ChangeEvent<HTMLInputElement>) => {
    if (evt.target.name === SORT_PRICE_POPULAR) {
      const id = evt.target.id;
      dispatch(sortPricePopular(id));
    }

    if (evt.target.name === SORT_UP_DOWN) {
      const id = evt.target.id;
      dispatch(sortUpDown(id));
    }
  };

  useEffect(() => {
    dispatch(sortList(filterOptions));
  }, [dispatch, filterOptions]);

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input
                onChange={(evt) => onSortButtonClick(evt)}
                type="radio"
                id={SortedOptions.Price}
                name={SORT_PRICE_POPULAR}
              />
              <label htmlFor={SortedOptions.Price}>по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input
                onChange={(evt) => onSortButtonClick(evt)}
                type="radio"
                id={SortedOptions.Popular}
                name={SORT_PRICE_POPULAR}
              />
              <label htmlFor={SortedOptions.Popular}>по популярности</label>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn--up">
              <input
                onChange={(evt) => onSortButtonClick(evt)}
                type="radio"
                id={SortedOptions.SortUp}
                name={SORT_UP_DOWN}
                aria-label="По возрастанию"
              />
              <label htmlFor={SortedOptions.SortUp}>
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn--down">
              <input
                onChange={(evt) => onSortButtonClick(evt)}
                type="radio"
                id={SortedOptions.SortDown}
                name={SORT_UP_DOWN}
                aria-label="По убыванию"
              />
              <label htmlFor={SortedOptions.SortDown}>
                <svg width="16" height="14" aria-hidden="true">
                  <use xlinkHref="#icon-sort"></use>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CatalogSort;
