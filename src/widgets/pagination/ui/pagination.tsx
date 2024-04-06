import { useState, MouseEvent, useEffect } from 'react';
import { DEFAULT_END, DEFAULT_START, TOTAL_CARD, getArrNumbers, getIndex } from 'src/shared';
import cn from 'classnames';
import { Link } from 'react-router-dom';


type PaginationButton = {
  activeButton: number;
  end: number;
  start: number;
}

type PaginationProps = {
  length: number;
  getCurrentCameras: (pageNumber: number) => void;
  pathname: string;
  page: number;
}

const Pagination = ({ length, getCurrentCameras, pathname, page }: PaginationProps): JSX.Element => {
  const buttons = getArrNumbers(Math.ceil(length / TOTAL_CARD));
  const [paginationButtons, setPaginationButton] = useState<PaginationButton>({ activeButton: DEFAULT_START, start: DEFAULT_START, end: DEFAULT_END });

  const currentButtons = buttons.slice((paginationButtons.start - 1), (paginationButtons.end));

  const onPaginationBtnClick = (evt: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    const { textContent } = evt.target as HTMLElement;
    const pageNumber = textContent ? parseInt(textContent, 10) : 1;
    setPaginationButton({ ...paginationButtons, activeButton: pageNumber });
    getCurrentCameras(pageNumber);
  };

  const onNextButtonClick = () => {
    const index = currentButtons.indexOf(paginationButtons.activeButton);
    setPaginationButton({ ...paginationButtons, activeButton: paginationButtons.activeButton + DEFAULT_END - index, start: paginationButtons.start + DEFAULT_END, end: paginationButtons.end + DEFAULT_END });
    getCurrentCameras(paginationButtons.activeButton + DEFAULT_END - index);
  };

  const onPrevButtonClick = () => {
    const index = currentButtons.indexOf(paginationButtons.activeButton);
    setPaginationButton({ ...paginationButtons, activeButton: paginationButtons.activeButton - index - 1, start: paginationButtons.start - DEFAULT_END, end: paginationButtons.end - DEFAULT_END });
    getCurrentCameras(paginationButtons.activeButton - index - 1);
  };


  useEffect(() => {
    setPaginationButton({...paginationButtons, activeButton: page});
  }, []);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {paginationButtons.start !== DEFAULT_START &&
          <li className="pagination__item">
            <Link
              onClick={() => onPrevButtonClick()}
              className="pagination__link pagination__link--text"
              to={`${pathname}?page=${paginationButtons.activeButton - getIndex(currentButtons, paginationButtons.activeButton) - 1}`}
            >
              Назад
            </Link>
          </li>}
        {currentButtons.map((item) => (
          <li key={item}
            className="pagination__item"
          >
            <Link
              onClick={(evt) => onPaginationBtnClick(evt)}
              className={cn('pagination__link', { 'pagination__link--active': item === paginationButtons.activeButton })}
              to={`${pathname}?page=${item}`}
            >
              {item}
            </Link>
          </li>
        ))}
        {buttons.length > paginationButtons.end &&
          <li className="pagination__item">
            <Link
              onClick={() => onNextButtonClick()}
              className="pagination__link pagination__link--text"
              to={`${pathname}?page=${paginationButtons.activeButton + DEFAULT_END - getIndex(currentButtons, paginationButtons.activeButton)}`}
            >
              Далее
            </Link>
          </li>}
      </ul>
    </div>
  );
};

export default Pagination;
