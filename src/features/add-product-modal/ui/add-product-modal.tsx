import { useEffect, useRef } from 'react';
import { TCamera } from 'src/shared';

type AddProductModalProps = {
  idCamera: number;
  onCloseButtonClick: () => void;
  camerasList: TCamera[];
}

const AddProductModal = ({ idCamera, onCloseButtonClick, camerasList }: AddProductModalProps): JSX.Element => {
  const modalOverlay = useRef(null);
  const currentCamera = camerasList.find((item) => item.id === idCamera);
  const { previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, name, vendorCode, level, category, price, type, } = currentCamera as TCamera;

  useEffect(() => {
    const closeAddItemModal = (evt: { keyCode: number }) => {
      if (evt.keyCode === 27) {
        onCloseButtonClick();
      }
    };
    window.addEventListener('keydown', closeAddItemModal);
    return () => {
      window.removeEventListener('keydown', closeAddItemModal);
    };
  }, [onCloseButtonClick]);

  useEffect(() => {
    const closeAddItemModal = (evt: globalThis.MouseEvent) => {
      if (evt.target === modalOverlay.current) {
        onCloseButtonClick();
      }
    };
    document.addEventListener('click', (evt) => closeAddItemModal(evt));
    return () => {
      document.removeEventListener('click', closeAddItemModal);
    };
  }, [onCloseButtonClick]);

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay" ref={modalOverlay}></div>
        <div className="modal__content">
          <p className="title title--h4">Добавить товар в корзину</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x}`} />
                <img src={previewImg} srcSet={previewImg2x} width="140" height="120" alt={name} />
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item"><span className="basket-item__article">Артикул:</span> <span className="basket-item__number">{vendorCode}</span>
                </li>
                <li className="basket-item__list-item">{`${category} ${type.toLowerCase()}`}</li>
                <li className="basket-item__list-item">{level} уровень</li>
              </ul>
              <p className="basket-item__price"><span className="visually-hidden">Цена:</span>{price.toLocaleString('ru-RU')} ₽</p>
            </div>
          </div>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
            >
              <svg width="24" height="16" aria-hidden="true">
                <use xlinkHref="#icon-add-basket"></use>
              </svg>Добавить в корзину
            </button>
          </div>
          <button
            onClick={onCloseButtonClick}
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
export default AddProductModal;
