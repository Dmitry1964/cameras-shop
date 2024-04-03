import { useState, MouseEvent } from 'react';
import { DEFAULT_END, DEFAULT_START, TOTAL_CARD, getArrNumbers } from 'src/shared';
import cn from 'classnames';


type PaginationButton = {
  activeButton: number;
  end: number;
  start: number;
}

type PaginationProps = {
  length: number;
  getCurrentCameras: (pageNumber: number) => void;
}

const Pagination = ({ length, getCurrentCameras }: PaginationProps): JSX.Element => {
  const buttons = getArrNumbers(Math.ceil(length / TOTAL_CARD));
  const [paginationButtons, setPaginationButton] = useState<PaginationButton>({ activeButton: DEFAULT_START, start: DEFAULT_START, end: DEFAULT_END });

  const currentButtons = buttons.slice((paginationButtons.start - 1), (paginationButtons.end));

  const onPaginationBtnClick = (evt: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    evt.preventDefault();
    const { textContent } = evt.target as HTMLElement;
    const pageNumber = textContent ? parseInt(textContent, 10) : 1;
    setPaginationButton({ ...paginationButtons, activeButton: pageNumber });
    getCurrentCameras(pageNumber);
  };

  const onNextButtonClick = (evt: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    evt.preventDefault();
    const index = currentButtons.indexOf(paginationButtons.activeButton);
    setPaginationButton({ ...paginationButtons, activeButton: paginationButtons.activeButton + DEFAULT_END - index, start: paginationButtons.start + DEFAULT_END, end: paginationButtons.end + DEFAULT_END });
    getCurrentCameras(paginationButtons.activeButton + DEFAULT_END - index);
  };

  const onPrevButtonClick = (evt:MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    evt.preventDefault();
    const index = currentButtons.indexOf(paginationButtons.activeButton);
    setPaginationButton({ ...paginationButtons, activeButton: paginationButtons.activeButton - index - 1, start: paginationButtons.start - DEFAULT_END, end: paginationButtons.end - DEFAULT_END });
    getCurrentCameras(paginationButtons.activeButton - index - 1);
  };

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {paginationButtons.start !== DEFAULT_START &&
          <li className="pagination__item">
            <a
              onClick={(evt) => onPrevButtonClick(evt)}
              className="pagination__link pagination__link--text"
              href="2"
            >
              Назад
            </a>
          </li>}
        {currentButtons.map((item) => (
          <li key={item}
            className="pagination__item"
          >
            <a
              onClick={(evt) => onPaginationBtnClick(evt)}
              className={cn('pagination__link', { 'pagination__link--active': item === paginationButtons.activeButton })}
              href={`${item}`}
            >
              {item}
            </a>
          </li>
        ))}
        {buttons.length > paginationButtons.end &&
          <li className="pagination__item">
            <a
              onClick={(evt) => onNextButtonClick(evt)}
              className="pagination__link pagination__link--text"
              href="2"
            >
              Далее
            </a>
          </li>}
      </ul>
    </div>
  );
};

export default Pagination;
