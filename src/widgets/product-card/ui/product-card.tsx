import { Rating } from 'src/features/rating';
import { TCamera } from 'src/shared';

type ProductCardProps = {
  product: TCamera;
}

const ProductCard = ({ product }: ProductCardProps): JSX.Element => {
  const {previewImgWebp2x, previewImgWebp, previewImg, previewImg2x, name, rating, reviewCount, price} = product;
  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x}`} />
          <img src={previewImg} srcSet={previewImg2x} width="280" height="240" alt={name} />
        </picture>
      </div>
      <div className="product-card__info">
        <Rating rating = {rating} reviewCount={reviewCount}/>
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price.toLocaleString('ru-RU')} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить
        </button>
        <a className="btn btn--transparent" href="#">Подробнее
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
