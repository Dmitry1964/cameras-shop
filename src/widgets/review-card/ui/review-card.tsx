import { TReview } from 'src/shared';
import { Rating } from 'src/features/rating';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

type ReviewCardProps = {
  reviewCard: TReview;
}

const ReviewCard = ({reviewCard}: ReviewCardProps): JSX.Element => {
  const {userName, createAt, rating, advantage, disadvantage, review} = reviewCard;

  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime="2022-04-13">{dayjs(createAt).locale('ru').format('DD MMMM')}</time>
      </div>
      <Rating rating={rating} rateClass={'review-card__rate'} />
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review}</p>
        </li>
      </ul>
    </li>
  );
};

export default ReviewCard;
