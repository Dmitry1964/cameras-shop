import { useState } from 'react';
import { TReview } from 'src/shared';
import { ReviewCard } from 'src/widgets/review-card';
// import dayjs from 'dayjs';


type ReviewsListProps = {
  reviewsList: TReview[];
  onAddButtonClick: () => void;
}

const ReviewsList = ({ reviewsList, onAddButtonClick }: ReviewsListProps): JSX.Element => {
  const [count, setCount] = useState(3);
  // reviewsList.sort((a, b) => (dayjs(b.createAt).unix()) - (dayjs(a.createAt).unix()));
  return (
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button
            onClick={onAddButtonClick}
            className="btn"
            type="button"
          >
            Оставить свой отзыв
          </button>
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
            </button>}
        </div>
      </div>
    </section>
  );
};

export default ReviewsList;
