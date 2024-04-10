import cn from 'classnames';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { fetchReviewsList, fetchUserReview } from 'src/app/actions/api-actions';
import { TUserReview } from 'src/shared';
import { useAppDispatch} from 'src/shared/hooks/hooks';

type ReviewModalProps = {
  showModal: boolean;
  onCloseModal: () => void;
  id: number;
}

const ReviewModal = ({ showModal, onCloseModal, id }: ReviewModalProps): JSX.Element => {
  const modalEl = useRef(null);
  const [formData, setFormData] = useState<TUserReview>({
    rating: 0,
    userName: '',
    advantage: '',
    disadvantage: '',
    review: '',
    cameraId: id,
  });

  const dispatch = useAppDispatch();

  const onFormSubmitBtnClick = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(fetchUserReview(formData))
      .then (() => dispatch(fetchReviewsList(id)));
    onCloseModal();
  };

  useEffect(() => {
    dispatch(fetchReviewsList(id));
  }, [dispatch, id]);

  useEffect(() => {
    const closeModal = (evt: { keyCode: number }) => {
      if (evt.keyCode === 27) {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, [onCloseModal]);

  useEffect(() => {
    const closeModal = (evt: globalThis.MouseEvent) => {
      if (evt.target === modalEl.current) {
        onCloseModal();
      }
    };
    document.addEventListener('click', (evt) => closeModal(evt));
    return () => {
      document.removeEventListener('click', closeModal);
    };
  });

  return (
    <div
      className={cn('modal', { 'is-active': showModal })}
    >
      <div className="modal__wrapper">
        <div className="modal__overlay" ref={modalEl}></div>
        <div className="modal__content">
          <p className="title title--h4">Оставить отзыв</p>
          <div className="form-review">
            <form method="post" onSubmit={(evt) => onFormSubmitBtnClick(evt)}>
              <div className="form-review__rate">
                <fieldset className="rate form-review__item">
                  <legend className="rate__caption">Рейтинг
                    <svg width="9" height="9" aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"></use>
                    </svg>
                  </legend>
                  <div className="rate__bar">
                    <div className="rate__group">
                      <input onChange={(evt) => setFormData({ ...formData, rating: parseInt(evt.target.value, 10) })} className="visually-hidden" id="star-5" name="rate" type="radio" value="5" />
                      <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                      <input onChange={(evt) => setFormData({ ...formData, rating: parseInt(evt.target.value, 10) })} className="visually-hidden" id="star-4" name="rate" type="radio" value="4" />
                      <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                      <input onChange={(evt) => setFormData({ ...formData, rating: parseInt(evt.target.value, 10) })} className="visually-hidden" id="star-3" name="rate" type="radio" value="3" />
                      <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                      <input onChange={(evt) => setFormData({ ...formData, rating: parseInt(evt.target.value, 10) })} className="visually-hidden" id="star-2" name="rate" type="radio" value="2" />
                      <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                      <input onChange={(evt) => setFormData({ ...formData, rating: parseInt(evt.target.value, 10) })} className="visually-hidden" id="star-1" name="rate" type="radio" value="1" />
                      <label className="rate__label" htmlFor="star-1" title="Ужасно"></label>
                    </div>
                    <div className="rate__progress"><span className="rate__stars">{formData.rating}</span> <span>/</span> <span className="rate__all-stars">5</span>
                    </div>
                  </div>
                  <p className="rate__message">Нужно оценить товар</p>
                </fieldset>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">Ваше имя
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input
                      onChange={(evt) => setFormData({ ...formData, userName: evt.target.value })}
                      type="text"
                      name="user-name"
                      placeholder="Введите ваше имя"
                      required
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать имя</p>
                </div>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">Достоинства
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input
                      onChange={(evt) => setFormData({ ...formData, advantage: evt.target.value })}
                      type="text"
                      name="user-plus"
                      placeholder="Основные преимущества товара"
                      required
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать достоинства</p>
                </div>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">Недостатки
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input
                      onChange={(evt) => setFormData({ ...formData, disadvantage: evt.target.value })}
                      type="text"
                      name="user-minus"
                      placeholder="Главные недостатки товара"
                      required
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать недостатки</p>
                </div>
                <div className="custom-textarea form-review__item">
                  <label>
                    <span className="custom-textarea__label">Комментарий
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <textarea
                      onChange={(evt) => setFormData({ ...formData, review: evt.target.value })}
                      name="user-comment"
                      minLength={5}
                      placeholder="Поделитесь своим опытом покупки"
                    >
                    </textarea>
                  </label>
                  <div className="custom-textarea__error">Нужно добавить комментарий</div>
                </div>
              </div>
              <button className="btn btn--purple form-review__btn" type="submit">Отправить отзыв</button>
            </form>
          </div>
          <button
            onClick={onCloseModal}
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
          >
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};


export default ReviewModal;
