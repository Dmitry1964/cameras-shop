import { stars } from 'src/shared';

type RatingProps = {
  rating: number;
  reviewCount: number;
}

const Rating = ({ rating, reviewCount }: RatingProps): JSX.Element => (
  <div className="rate product-card__rate">
    {stars.map((item) => (
      item <= rating
        ?
        <svg key={item} width="17" height="16" aria-hidden="true">
          <use xlinkHref="#icon-full-star"></use>
        </svg>
        :
        <svg key={item} width="17" height="16" aria-hidden="true">
          <use xlinkHref="#icon-star"></use>
        </svg>
    ))}
    <p className="visually-hidden">Рейтинг: {rating}</p>
    <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
  </div>
);

export default Rating;
