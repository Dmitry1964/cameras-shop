import { useEffect, useRef } from 'react';
import { changeStatus } from 'src/app/slices/user-review-slice';
import { removePositionFixed } from 'src/shared';
import { useAppDispatch } from 'src/shared/hooks/hooks';

const ReviewSuccess = (): JSX.Element => {
  const refElement = useRef(null);
  const dispatch = useAppDispatch();
  const onCloseBtnClick = () => {
    dispatch(changeStatus());
    removePositionFixed();
  };

  useEffect(() => {
    const closeModal = (evt: { keyCode: number }) => {
      if (evt.keyCode === 27) {
        dispatch(changeStatus());
        removePositionFixed();
      }
    };
    window.addEventListener('keydown', closeModal);
    return () => window.removeEventListener('keydown', closeModal);
  }, [dispatch]);

  useEffect(() => {
    const closeModal = (evt: MouseEvent) => {
      if (evt.target === refElement.current) {
        dispatch(changeStatus());
        removePositionFixed();
      }
    };
    document.addEventListener('click', (evt) => closeModal(evt));
    return () => {
      document.removeEventListener('click', closeModal);
    };
  }, [dispatch]);

  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div className="modal__overlay" ref={refElement}></div>
        <div className="modal__content">
          <p className="title title--h4">Спасибо за отзыв</p>
          <svg className="modal__icon" width="80" height="78" aria-hidden="true">
            <use xlinkHref="#icon-review-success"></use>
          </svg>
          <div className="modal__buttons">
            <button
              onClick={onCloseBtnClick}
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
            >
              Вернуться к покупкам
            </button>
          </div>
          <button
            onClick={onCloseBtnClick}
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

export default ReviewSuccess;
