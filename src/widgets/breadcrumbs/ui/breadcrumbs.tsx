import { AppRoutes } from 'src/shared';
import { useAppSelector } from 'src/shared/hooks/hooks';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import cn from 'classnames';
import { Link } from 'react-router-dom';


const Breadcrumbs = (): JSX.Element => {
  const camera = useAppSelector((state) => state.cameraData.camera);
  const routes = [
    { path: AppRoutes.Catalog, breadcrumb: 'Каталог' },
    { path: AppRoutes.Camera, breadcrumb: 'Камера' },
    { path: `${AppRoutes.Camera}/:idCamera`, breadcrumb: `${camera.name}` },
  ];
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          {breadcrumbs && breadcrumbs.map((item, index) => (

            <li className="breadcrumbs__item" key={item.key} >
              <Link
                className={cn('breadcrumbs__link',
                  { 'breadcrumbs__link--active': index === breadcrumbs.length - 1 },
                  { 'breadcrumbs__link--active': item.match.route?.path === AppRoutes.Camera })}
                to={`${item.match.pathname}`}
              >
                {item.breadcrumb}
                {index < breadcrumbs.length - 1 &&
                  <svg width="5" height="8" aria-hidden="true" >
                    <use xlinkHref="#icon-arrow-mini"></use>
                  </svg>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Breadcrumbs;
