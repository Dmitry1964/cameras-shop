import { useEffect, useState } from 'react';
import { fetchCamerasList, fetchPromoList } from 'src/app/actions/api-actions';
import { Spinner } from 'src/features';
import { FetchStatus, addPositionFixed, removePositionFixed } from 'src/shared';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks/hooks';
import { Banner } from 'src/widgets/banner';
import { Breadcrumbs } from 'src/widgets/breadcrumbs/ui';
import { CatalogFilter } from 'src/widgets/catalog-filter';
import { CatalogSort } from 'src/widgets/catalog-sort';
import { Pagination } from 'src/widgets/pagination';
import { ProductsList } from 'src/widgets/products-list';
import { TOTAL_CARD } from 'src/shared';
import { useLocation, useSearchParams } from 'react-router-dom';
import { AddProductModal } from 'src/features/add-product-modal';
import { closeAddBasket, closeAddModal, openAddModal } from 'src/app/slices/add-modal-slice/add-modal-slice';
import { AddProductModalSuccess } from 'src/features/add-product-success-modal';

type CurrentList = {
  start: number;
  end: number;
}

const Catalog = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const fetchListStatus = useAppSelector((state) => state.productsList.status);
  const camerasList = useAppSelector((state) => state.productsList.cameras);
  const filterList = useAppSelector((state) => state.productsList.filterList);
  const promoList = useAppSelector((state) => state.promoList.promoList);
  const showAddModal = useAppSelector((state) => state.showAddModal.showModal);
  const showAddBasketModal = useAppSelector((state) => state.showAddModal.showAddBasket);
  const idCamera = useAppSelector((state) => state.showAddModal.idCamera);

  const {pathname} = useLocation();

  const [currentList, setCurrentList] = useState<CurrentList>({start: 0, end: TOTAL_CARD});
  const [searchParams] = useSearchParams();


  const getCurrentCameras = (pageNumber: number) => {
    setCurrentList({...currentList, start: TOTAL_CARD * (pageNumber - 1), end: TOTAL_CARD * pageNumber});
  };

  const showAddItemModal = (id: number) => {
    dispatch(openAddModal(id));
    addPositionFixed();
  };

  const closeAddItemModal = () => {
    dispatch(closeAddModal());
    removePositionFixed();
  };

  const closeAddBasketSuccess = () => {
    dispatch(closeAddBasket());
    removePositionFixed();
  }

  useEffect(() => {
    if(fetchListStatus === FetchStatus.Idle) {
      dispatch(fetchCamerasList());
      dispatch(fetchPromoList());
    }
  }, [dispatch, fetchListStatus]);

  const page = searchParams.get('page');
  const pageNumber = page ? parseInt(page, 10) : 1;
  useEffect(() => {
    setCurrentList({...currentList, start: TOTAL_CARD * (pageNumber - 1), end: TOTAL_CARD * pageNumber});
  }, [pageNumber]);

  return (
    <main>
      <Banner promoList = {promoList} />
      <div className="page-content">
        <Breadcrumbs />
        <section className="catalog">
          <div className="container">
            <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
            <div className="page-content__columns">
              <div className="catalog__aside">
                <CatalogFilter camerasList={camerasList} />
              </div>
              <div className="catalog__content">
                <CatalogSort />
                {fetchListStatus === FetchStatus.Pending && <Spinner />}
                {fetchListStatus === FetchStatus.Fulfilled && <ProductsList camerasList = {filterList.slice(currentList.start, currentList.end)} showAddItemModal={showAddItemModal}/>}
                {fetchListStatus === FetchStatus.Rejected && <div>Ошибка загрузки</div>}
                {filterList.length > TOTAL_CARD && <Pagination length = {filterList.length} getCurrentCameras = {getCurrentCameras} pathname = {pathname} page={pageNumber}/>}
              </div>
            </div>
          </div>
        </section>
      </div>
      {showAddModal && <AddProductModal idCamera={idCamera} camerasList={camerasList} onCloseButtonClick={closeAddItemModal} />}
      {showAddBasketModal && <AddProductModalSuccess closeAddBasketSuccess={closeAddBasketSuccess} />}
    </main>
  );
};

export default Catalog;
