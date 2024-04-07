import { Rating } from 'src/features/rating';
import {TCamera } from 'src/shared';
import { CameraTabs } from 'src/features/camera-tabs';

type CameraProps = {
  cameraData: TCamera;
}

const Camera = ({ cameraData }: CameraProps): JSX.Element => {
  const { rating, reviewCount, name, price, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = cameraData;


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
          <CameraTabs cameraData={cameraData} />
        </div>
      </div>
    </section>
  );
};

export default Camera;
