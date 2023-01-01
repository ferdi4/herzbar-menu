import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import './App.css';

import {Hello} from "./slides/hello";
import {Longdrinks} from "./slides/longdrinks";
import {HotDrinks} from "./slides/hot-drinks";

function App() {
  return (
      <>
          <Swiper
              style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
              }}
              speed={600}
              pagination={{
                  clickable: true,
              }}
              navigation={true}
              modules={[Parallax, Pagination, Navigation]}
              className="herz-swiper"
          >
              <div
                  slot="container-start"
                  className="parallax-bg"
                  data-swiper-parallax="-23%"
              ></div>
              <SwiperSlide>
                  <Hello></Hello>
              </SwiperSlide>
              <SwiperSlide>
                  <Longdrinks></Longdrinks>
              </SwiperSlide>
              <SwiperSlide>
                 <HotDrinks></HotDrinks>
              </SwiperSlide>
          </Swiper>
      </>
  );
}

export default App;
