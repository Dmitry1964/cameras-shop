import { TPromo } from 'src/shared';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

type BannerProps = {
  promoList: TPromo[];
}

const Banner = ({ promoList }: BannerProps): JSX.Element => (
  <div className="banner">
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop
    >
      {promoList.map((item) => (
        <SwiperSlide
          key={item.id}
        >
          <picture>
            <source type="image/webp" srcSet={`${item.previewImgWebp}, ${item.previewImgWebp2x}`} />
            <img src={item.previewImg} srcSet={item.previewImg2x} width="1280" height="280" alt="баннер" />
          </picture>
          <p className="banner__info">
            <span className="banner__message">Новинка!</span>
            <span className="title title--h1">{item.name}</span>
            <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
            <a className="btn" href="#">Подробнее</a>
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Banner;
