import { useEffect, useState } from 'react';
import { fetchCamerasList } from 'src/app/actions/api-actions';
import { Spinner } from 'src/features';
import { FetchStatus } from 'src/shared';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks/hooks';
import { Banner } from 'src/widgets/banner';
import { Breadcrumbs } from 'src/widgets/breadcrumbs/ui';
import { CatalogFilter } from 'src/widgets/catalog-filter';
import { CatalogSort } from 'src/widgets/catalog-sort';
import { Pagination } from 'src/widgets/pagination';
import { ProductsList } from 'src/widgets/products-list';
import { TOTAL_CARD } from 'src/shared';
import { useLocation } from 'react-router-dom';

type CurrentList = {
  start: number;
  end: number;
}

const Catalog = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const fetchListStatus = useAppSelector((state) => state.productsList.status);
  const camerasList = useAppSelector((state) => state.productsList.cameras);
  const {pathname} = useLocation();

  const [currentList, setCurrentList] = useState<CurrentList>({start: 0, end: TOTAL_CARD});


  const getCurrentCameras = (pageNumber: number) => {
    setCurrentList({...currentList, start: TOTAL_CARD * (pageNumber - 1), end: TOTAL_CARD * pageNumber});
  };

  useEffect(() => {
    dispatch(fetchCamerasList());
  }, [dispatch]);

  return (
    <main>
      <Banner />
      <div className="page-content">
        <Breadcrumbs />
        <section className="catalog">
          <div className="container">
            <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
            <div className="page-content__columns">
              <div className="catalog__aside">
                <CatalogFilter />
              </div>
              <div className="catalog__content">
                <CatalogSort />
                {fetchListStatus === FetchStatus.Pending && <Spinner />}
                {fetchListStatus === FetchStatus.Fulfilled && <ProductsList camerasList = {camerasList.slice(currentList.start, currentList.end)}/>}
                {fetchListStatus === FetchStatus.Rejected && <div>Ошибка загрузки</div>}
                {camerasList.length > TOTAL_CARD && <Pagination length = {camerasList.length} getCurrentCameras = {getCurrentCameras} pathname = {pathname}/>}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Catalog;
