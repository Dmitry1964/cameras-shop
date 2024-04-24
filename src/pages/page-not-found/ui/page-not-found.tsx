import { Link } from 'react-router-dom';
import { AppRoutes } from 'src/shared';
import './page-not-found.css';


const PageNotFound = (): JSX.Element => (
  <main>
    <div className='container'>
      <div className='page-info'>
        <h2 className='page-info__title'>PAGE NOT FOUND</h2>
        <div className='page-info__image'>
          <img src="/img/info/bad-camera.png" srcSet="/img/info/bad-camera@2x.png 2x" width="600" height="400" alt="баннер" />
        </div>
        <Link className='page-info__link' to={AppRoutes.Catalog}>
          go home page
        </Link>
      </div>
    </div>
  </main>
);

export default PageNotFound;
