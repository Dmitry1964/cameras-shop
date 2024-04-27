import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks/hooks';
import { ProductCategory, ProductLevel, ProductType } from 'src/shared/types/app-types';
import { selectCategory, addLevel, removeLevel, addType, removeType, categoryReset, filtersReset } from 'src/app/slices/sort-filter-slice/sort-filter-slice';

const CatalogFilter = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const filterOptions = useAppSelector((state) => state.sortFilterOptions);

  const onCheckCategoryClick = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(categoryReset());
    if (evt.target.name === ProductCategory.Photo) {
      dispatch(selectCategory(ProductCategory.Photo));
    }
    if (evt.target.name === ProductCategory.Video) {
      dispatch(selectCategory(ProductCategory.Video));
    }
  };

  const onCheckTypeClick = (evt: ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name as ProductType;
    if (evt.target.checked) {
      dispatch(addType(name));
    } else {
      dispatch(removeType(name));
    }
  };

  const onCheckLevelClick = (evt: ChangeEvent<HTMLInputElement>) => {
    const name = evt.target.name as ProductLevel;
    if (evt.target.checked) {
      dispatch(addLevel(name));
    } else {
      dispatch(removeLevel(name));
    }
  };

  const onResetButtonClick = () => {
    dispatch(filtersReset());
  };

  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Цена, ₽</legend>
          <div className="catalog-filter__price-range">
            <div className="custom-input">
              <label>
                <input type="number" name="price" placeholder="от" />
              </label>
            </div>
            <div className="custom-input">
              <label>
                <input type="number" name="priceUp" placeholder="до" />
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Категория</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                onChange={(evt) => onCheckCategoryClick(evt)}
                type="checkbox"
                name={ProductCategory.Photo}
                checked={filterOptions.filterCategory === ProductCategory.Photo}
              />
              <span className="custom-checkbox__icon"></span>
              <span className="custom-checkbox__label">Фотокамера</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                onChange={(evt) => onCheckCategoryClick(evt)}
                type="checkbox"
                name={ProductCategory.Video}
                checked={filterOptions.filterCategory === ProductCategory.Video}
              />
              <span className="custom-checkbox__icon"></span>
              <span className="custom-checkbox__label">Видеокамера</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Тип камеры</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                onChange={(evt) => onCheckTypeClick(evt)}
                type="checkbox"
                name={ProductType.Digital}
              />
              <span className="custom-checkbox__icon"></span>
              <span className="custom-checkbox__label">Цифровая</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                onChange={(evt) => onCheckTypeClick(evt)}
                type="checkbox"
                name={ProductType.Analog}
                disabled={filterOptions.filterCategory === ProductCategory.Video}
              />
              <span className="custom-checkbox__icon"></span>
              <span className="custom-checkbox__label">Плёночная</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                onChange={(evt) => onCheckTypeClick(evt)}
                type="checkbox"
                name={ProductType.Instant}
                disabled={filterOptions.filterCategory === ProductCategory.Video}
              />
              <span className="custom-checkbox__icon"></span>
              <span className="custom-checkbox__label">Моментальная</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                onChange={(evt) => onCheckTypeClick(evt)}
                type="checkbox"
                name={ProductType.Collectible}
              /><span className="custom-checkbox__icon"></span>
              <span className="custom-checkbox__label">Коллекционная</span>
            </label>
          </div>
        </fieldset>
        <fieldset className="catalog-filter__block">
          <legend className="title title--h5">Уровень</legend>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                onChange={(evt) => onCheckLevelClick(evt)}
                type="checkbox"
                name={ProductLevel.Loser}
              />
              <span className="custom-checkbox__icon">
              </span><span className="custom-checkbox__label">Нулевой</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                onChange={(evt) => onCheckLevelClick(evt)}
                type="checkbox"
                name={ProductLevel.Amateur}
              />
              <span className="custom-checkbox__icon"></span>
              <span className="custom-checkbox__label">Любительский</span>
            </label>
          </div>
          <div className="custom-checkbox catalog-filter__item">
            <label>
              <input
                onChange={(evt) => onCheckLevelClick(evt)}
                type="checkbox"
                name={ProductLevel.Professional}
              />
              <span className="custom-checkbox__icon"></span>
              <span className="custom-checkbox__label">Профессиональный</span>
            </label>
          </div>
        </fieldset>
        <button
          onClick={ onResetButtonClick}
          className="btn catalog-filter__reset-btn"
          type="reset"
        >
          Сбросить фильтры
        </button>
      </form>
    </div>
  );
};
export default CatalogFilter;
