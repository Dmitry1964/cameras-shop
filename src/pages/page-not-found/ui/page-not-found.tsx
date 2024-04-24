import { Link } from 'react-router-dom';
import { AppRoutes } from 'src/shared';
import './page-not-found.css';


const PageNotFound = (): JSX.Element => (
  <main>
    <div className='container'>
      <div className='page-content'>
        <h2 className='page-content__title'>PAGE NOT FOUND</h2>
        <div className='page-content__image'>
          <img src="/img/content/bad-camera.png" srcSet="/img/content/bad-camera@2x.png 2x" width="600" height="400" alt="баннер" />
        </div>
        <Link className='page-content__link' to={AppRoutes.Catalog}>
          go home page
        </Link>
      </div>
    </div>
  </main>
);

export default PageNotFound;
