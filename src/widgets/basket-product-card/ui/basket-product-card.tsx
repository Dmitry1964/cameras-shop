import { ChangeEvent, useEffect, useState } from 'react';
import { TCamera } from 'src/shared';

type BasketProductCardProps = {
  camera: TCamera;
}

const BasketProductCard = ({ camera }: BasketProductCardProps): JSX.Element => {
  const { previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, name, vendorCode, type, level, price } = camera;
  const [count, setCount] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(price);
  const onBtnNextClick = () => {
    setCount(count + 1);
  };
  const onBtnPrtevClick = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleCounterField = (evt: ChangeEvent<HTMLInputElement>) => {
    const valueCount = evt.target.value;
    setCount(parseInt(valueCount, 10));
  };

  useEffect(() => {
    setTotalPrice(count * price);
  }, [count, price]);
  return (
    <li className="basket-item">
      <div className="basket-item__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x}`} />
          <img src={previewImg} srcSet={previewImg2x} width="140" height="120" alt="Фотоаппарат «Орлёнок»" />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{name}</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{type}</li>
          <li className="basket-item__list-item">{level}</li>
        </ul>
      </div>
      <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{price.toLocaleString('ru-RU')} ₽</p>
      <div className="quantity">
        <button
          onClick={onBtnPrtevClick}
          className="btn-icon btn-icon--prev"
          aria-label="уменьшить количество товара"
        >
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1"></label>
        <input
          value={count}
          onChange={(evt) => handleCounterField(evt)}
          type="number"
          id="counter1"
          min="1"
          max="99"
          aria-label="количество товара"
        />
        <button
          onClick={onBtnNextClick}
          className="btn-icon btn-icon--next"
          aria-label="увеличить количество товара"
        >
          <svg width="7" height="12" aria-hidden="true">
            <use xlinkHref="#icon-arrow"></use>
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price"><span className="visually-hidden">Общая цена:</span>{totalPrice.toLocaleString('ru-RU')} ₽</div>
      <button className="cross-btn" type="button" aria-label="Удалить товар">
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
      </button>
    </li>
  );
};
export default BasketProductCard;
