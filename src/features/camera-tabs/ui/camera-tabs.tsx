import { Link, useLocation, useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import { DESCRIPTION, OPTIONS, TCamera } from 'src/shared';

type CameraTabsProps = {
  cameraData: TCamera;
}

const CameraTabs = ({cameraData} : CameraTabsProps): JSX.Element => {

  const {vendorCode, description, category, type, level} = cameraData;
  const {pathname} = useLocation();
  const [searchParams] = useSearchParams();

  const tab = searchParams.get('tab') || DESCRIPTION;

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <Link
          className={cn('tabs__control', { 'is-active': tab === OPTIONS})}
          to={`${pathname}?tab=${OPTIONS}`}
        >
          Характеристики
        </Link>
        <Link
          className={cn('tabs__control', { 'is-active': tab === DESCRIPTION })}
          to={`${pathname}?tab=${DESCRIPTION}`}
        >
          Описание
        </Link>
      </div>
      <div className="tabs__content">
        <div className={cn('tabs__element', { 'is-active': tab === OPTIONS })}>
          <ul className="product__tabs-list">
            <li className="item-list"><span className="item-list__title">Артикул:</span>
              <p className="item-list__text">{vendorCode}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Категория:</span>
              <p className="item-list__text">{category}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">{type}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Уровень:</span>
              <p className="item-list__text">{level}</p>
            </li>
          </ul>
        </div>
        <div className={cn('tabs__element', { 'is-active': tab === DESCRIPTION })}>
          <div className="product__tabs-text">
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CameraTabs;
