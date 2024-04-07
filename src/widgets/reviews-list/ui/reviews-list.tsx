import { useState } from 'react';
import { TReview } from 'src/shared';
import { ReviewCard } from 'src/widgets/review-card';


type ReviewsListProps = {
  reviewsList: TReview[];
}

const ReviewsList = ({ reviewsList }: ReviewsListProps): JSX.Element => {
  const [count, setCount] = useState(3);
  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button className="btn" type="button">Оставить свой отзыв</button>
        </div>
        <ul className="review-block__list">
          {reviewsList.slice(0, count).map((item) => (
            <ReviewCard key={item.id} reviewCard={item} />
          ))}
        </ul>
        <div className="review-block__buttons">
          {reviewsList.length > count &&
            <button
              onClick={() => setCount(count + 3)}
              className="btn btn--purple"
              type="button"
            >
              Показать больше отзывов
            </button>
          }
        </div>
      </div>
    </section>
  );
};

export default ReviewsList;
