import { Component, OnInit } from '@angular/core';
import { Pagination } from 'swiper';
import { Swiper, SwiperEvents, SwiperOptions } from 'swiper/types';
import SwiperCore from "swiper";

@Component({
  selector: 'app-swiper-product',
  templateUrl: './swiper-product.component.html',
  styleUrls: ['./swiper-product.component.sass']
})
export class SwiperProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    SwiperCore.use([Pagination])
  }
  config: SwiperOptions = {
    slidesPerView: 1.1,
    spaceBetween: 10,
    navigation: false,
    pagination: true,
    // scrollbar: {
    //   draggable: true
    // }
    
  };
  onSwiper(swiper: SwiperEvents) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
