import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'src/shared';

type AddProductModalSuccessProps = {
  closeAddBasketSuccess: () => void;
}

const AddProductModalSuccess = ({ closeAddBasketSuccess }: AddProductModalSuccessProps) => {
  const modalOverlay = useRef(null);

  useEffect(() => {

    const onEscKeyDown = (evt: {keyCode: number}) => {
      if (evt.keyCode === 27) {
        closeAddBasketSuccess();
      }
    };
    document.addEventListener('keydown', (evt) => onEscKeyDown(evt));
    return () => {
      document.removeEventListener('keydown', onEscKeyDown);
    };
  }, [closeAddBasketSuccess]);

  useEffect(() => {
    const onModalOverlayClick = (evt: MouseEvent) => {
      if (evt.target === modalOverlay.current) {
        closeAddBasketSuccess();
      }
    };
    document.addEventListener('click', (evt) => onModalOverlayClick(evt));
    return () => {
      document.removeEventListener('click', onModalOverlayClick);
    };
  }, [closeAddBasketSuccess]);
  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div ref={modalOverlay} className="modal__overlay"></div>
        <div className="modal__content">
          <p className="title title--h4">Товар успешно добавлен в корзину</p>
          <svg className="modal__icon" width="86" height="80" aria-hidden="true">
            <use xlinkHref="#icon-success"></use>
          </svg>
          <div className="modal__buttons">
            <Link
              onClick={closeAddBasketSuccess}
              className="btn btn--transparent modal__btn"
              to={AppRoutes.Catalog}
            >
              Продолжить покупки
            </Link>
            <Link
              className="btn btn--purple modal__btn modal__btn--fit-width"
              to={AppRoutes.Basket}
            >
              Перейти в корзину
            </Link>
          </div>
          <button
            onClick={closeAddBasketSuccess}
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


export default AddProductModalSuccess;
