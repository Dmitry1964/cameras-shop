import { Link } from 'react-router-dom';
import { Rating } from 'src/features/rating';
import { AppRoutes, TCamera } from 'src/shared';

type ProductCardProps = {
  product: TCamera;
  showAddItemModal: (param: boolean, id: number) => void;
}

const ProductCard = ({ product, showAddItemModal }: ProductCardProps): JSX.Element => {
  const { previewImgWebp2x, previewImgWebp, previewImg, previewImg2x, name, rating, reviewCount, price, id } = product;
  return (
    <div className="product-card is-active" style={{ width: '100%' }}>
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x}`} />
          <img src={`/${previewImg}`} srcSet={`/${previewImg2x}`} width="280" height="240" alt={name} />
        </picture>
      </div>
      <div className="product-card__info">
        <Rating rating={rating} reviewCount={reviewCount} rateClass={'product-card__rate'} />
        <p className="product-card__title">{name}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price.toLocaleString('ru-RU')} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button
          onClick={() => showAddItemModal(true, id)}
          className="btn btn--purple product-card__btn"
          type="button"
        >
          Купить
        </button>
        <Link className="btn btn--transparent" to={`${AppRoutes.Camera}/${product.id}`}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
