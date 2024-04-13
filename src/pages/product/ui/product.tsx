import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCameraData, fetchReviewsList, fetchSimilarList } from 'src/app/actions/api-actions';
import { Spinner } from 'src/features';
import { FetchStatus, addPositionFixed, removePositionFixed } from 'src/shared';
import { useAppDispatch, useAppSelector } from 'src/shared/hooks/hooks';
import { Breadcrumbs } from 'src/widgets/breadcrumbs/ui';
import { Camera } from 'src/widgets/camera';
import ReviewModal from 'src/features/review-modal/ui/review-modal';
import { ReviewSuccess } from 'src/features/review-success';
import { ReviewsList } from 'src/widgets/reviews-list';
import { SimilarList } from 'src/widgets/similar-list';

const Product = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const cameraData = useAppSelector((state) => state.cameraData.camera);
  const fetchCameraStatus = useAppSelector((state) => state.cameraData.status);
  const similarList = useAppSelector((state) => state.similarList.similarList);
  const fetchSimilarStatus = useAppSelector((state) => state.similarList.status);
  const reviewsList = useAppSelector((state) => state.reviewsList.reviewsList);
  const fetchReviewsStatus = useAppSelector((state) => state.reviewsList.status);
  const fetchUserReviewStatus = useAppSelector((state) => state.userReview.status);
  const param = useParams();


  const id = param ? parseInt((param.idCamera as string), 10) : 1;

  const [showModal, setShowModal] = useState(false);

  const onAddReviewBtnClick = () => {
    setShowModal(true);
    addPositionFixed();

  };
  const onCloseModalBtnClick = () => {
    setShowModal(false);
    removePositionFixed();
  };

  useEffect(() => {
    dispatch(fetchCameraData(id));
    dispatch(fetchSimilarList(id));
    dispatch(fetchReviewsList(id));
  }, [id, dispatch]);
  return (
    <>
      <main>
        <div className="page-content">
          {fetchCameraStatus === FetchStatus.Fulfilled && <Breadcrumbs/>}
          <div className="page-content__section">
            {fetchCameraStatus === FetchStatus.Pending && <Spinner />}
            {fetchCameraStatus === FetchStatus.Fulfilled &&
              <Camera cameraData={cameraData} />}
            {fetchCameraStatus === FetchStatus.Rejected && <div>Ошибка загрузки</div>}
          </div>
          {similarList.length > 0 &&
            <div className="page-content__section">
              {fetchSimilarStatus === FetchStatus.Pending && <Spinner />}
              {fetchSimilarStatus === FetchStatus.Fulfilled &&
                <SimilarList similarList={similarList} />}
            </div>}
          <div className="page-content__section">
            {fetchReviewsStatus === FetchStatus.Pending && <Spinner />}
            {fetchReviewsStatus === FetchStatus.Fulfilled &&
              <ReviewsList reviewsList={reviewsList} onAddButtonClick={onAddReviewBtnClick} />}
          </div>
        </div>
      </main>
      <a className="up-btn" href="#header">
        <svg width="12" height="18" aria-hidden="true">
          <use xlinkHref="#icon-arrow2"></use>
        </svg>
      </a>
      <ReviewModal showModal={showModal} onCloseModal={onCloseModalBtnClick} id={id} />
      {fetchUserReviewStatus === FetchStatus.Fulfilled && <ReviewSuccess />}
    </>
  );
};

export default Product;
