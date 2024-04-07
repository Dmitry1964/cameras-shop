import { TCamera } from 'src/shared';
import { ProductCard } from 'src/widgets/product-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { useRef} from 'react';


type SimilatListProps = {
  similarList: TCamera[];
}

const SimilarList = ({ similarList }: SimilatListProps): JSX.Element => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            spaceBetween={32}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="product-similar__slider-list"
          >
            {similarList.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard product={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            ref={prevRef}
            style={{ pointerEvents: 'all' }}
            className="slider-controls slider-controls--prev"
            type="button"
            aria-label="Предыдущий слайд"
            disabled
          >
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
          <button
            ref={nextRef}
            style={{ pointerEvents: 'all' }}
            className="slider-controls slider-controls--next"
            type="submit"
            aria-label="Следующий слайд"
          >
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>

        </div>
      </div>

    </section>
  );
};


export default SimilarList;
