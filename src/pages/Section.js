import React from "react";
import BackgroundImage from "../components/BackgroundImage";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Section = () => {
  return (
    <section className="container">
      <div className="item-01">
        <BackgroundImage src={"imageBg.png"} />
      </div>
      <div className="item-02">
        <Title />

        <div className="productCardContainer">
          <Swiper
            modules={[Navigation]}
            navigation={true}
            slidesPerView={2.5}
            spaceBetween={12}
            breakpoints={{
              // when window width is >= 768px
              768: {
                spaceBetween: 32,
              },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <ProductCard
                src={"item01.png"}
                title="365 Signature Hoodie"
                price="€33.95"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                src={"item03.png"}
                title="Organic Skinny High Waist Jeans"
                price="€33.95"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                src={"item02.png"}
                title="Organic Skinny High Waist Jeans"
                price="€33.95"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Section;
