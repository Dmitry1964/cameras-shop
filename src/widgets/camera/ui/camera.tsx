import { useState } from 'react';
import { Rating } from 'src/features/rating';
import { TCamera } from 'src/shared';
import cn from 'classnames';

type CameraProps = {
  cameraData: TCamera;
}

const Camera = ({ cameraData }: CameraProps): JSX.Element => {
  const { rating, reviewCount, name, price, description, vendorCode, category, type, level, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = cameraData;
  const [tabButtons, setTabButtons] = useState({ options: false, desc: true });

  const onTabsBtnClick = () => {
    setTabButtons({...tabButtons, options: !tabButtons.options, desc: !tabButtons.desc});
  };

  return (
    <section className="product">
      <div className="container">
        <div className="product__img">
          <picture>
            <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x}`} />
            <img src={`/${previewImg}`} srcSet={`/${previewImg2x}`} width="560" height="480" alt={name} />
          </picture>
        </div>
        <div className="product__content">
          <h1 className="title title--h3">{name}</h1>
          <Rating rating={rating} reviewCount={reviewCount} />
          <p className="product__price"><span className="visually-hidden">Цена:</span>{price.toLocaleString('ru-RU')} ₽</p>
          <button className="btn btn--purple" type="button">
            <svg width="24" height="16" aria-hidden="true">
              <use xlinkHref="#icon-add-basket"></use>
            </svg>Добавить в корзину
          </button>
          <div className="tabs product__tabs">
            <div className="tabs__controls product__tabs-controls">
              <button
                onClick={onTabsBtnClick}
                className={cn('tabs__control', { 'is-active': tabButtons.options })}
                type="button"
              >
                Характеристики
              </button>
              <button
                onClick={onTabsBtnClick}
                className={cn('tabs__control', { 'is-active': tabButtons.desc })}
                type="button"
              >
                Описание
              </button>
            </div>
            <div className="tabs__content">
              <div className={cn('tabs__element', { 'is-active': tabButtons.options })}>
                <ul className="product__tabs-list">
                  <li className="item-list"><span className="item-list__title">Артикул:</span>
                    <p className="item-list__text">{vendorCode}</p>
                  </li>
                  <li className="item-list"><span className="item-list__title">Категория:</span>
                    <p className="item-list__text">{category}</p>
                  </li>
                  <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                    <p className="item-list__text">{type}</p>
                  </li>
                  <li className="item-list"><span className="item-list__title">Уровень:</span>
                    <p className="item-list__text">{level}</p>
                  </li>
                </ul>
              </div>
              <div className={cn('tabs__element', { 'is-active': tabButtons.desc })}>
                <div className="product__tabs-text">
                  <p>
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Camera;
