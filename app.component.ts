import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import {ProductsComponent} from './products/products.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsComponent],
=======
import {ProductListComponent} from './product-list/product-list.component';
import {CommonModule} from '@angular/common';
import {ProductItemComponent} from './product-item/product-item.component';

export interface Product {
  name: string;
  description: string;
  rating: number;
  image: string;
  link: string;
  likes:number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, CommonModule, ProductItemComponent],
>>>>>>> 5db2126f (Initial commit)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'online-store';
<<<<<<< HEAD
=======


  selectedCategory: string | undefined;

  products : { [key:string]: Product[]}  = {
    "Mobile Phones":
      [
      {
        name: 'Xiaomi Redmi 13C 8 ГБ',
        description: 'Cмартфон, 256 ГБ, черный',
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
        likes:0,
      },
      {
        name: 'Apple iPhone 13',
        description: 'Cмартфон, 128 ГБ, черный',
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
        likes:0,
      },
      {
        name: 'Apple iPhone 16 Pro Max',
        description: 'Cмартфон, 256 ГБ, черный',
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
        likes:0,
      },
      {
        name: 'Realme Note 50 3 ГБ',
        description: 'Cмартфон, 64 ГБ, черный',
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000',
        likes:0,
      },
      {
        name: 'Samsung Galaxy A55 5G 8 ГБ',
        description: 'Cмартфон, 256 ГБ, темно-синий',
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium',
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
        likes:0,
      },
    ],

    "Stationery":
      [
        {
          name: 'SV4 SvetoCopy A4',
          description: 'бумага, A4, 500 шт',
          rating: 5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p05/p92/25036264.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/sv4-svetocopy-a4-bumaga-a4-500-sht-matovoe-pokrytie-108810207/?c=750000000',
          likes:0,
        },
        {
          name: 'Ручка шариковая Obama 2810',
          description: '12 шт, 1 мм, цвет чернил синий',
          rating: 4.8,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/peb/p22/25041852.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/ruchka-sharikovaja-obama-2810-12-sht-1-mm-tsvet-chernil-sinii-107217516/?c=750000000',
          likes:0,
        },
        {
          name: 'Общая тетрадь Вектор ТО596Б',
          description: '96 л, А5, клетка, мягкая обложка',
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/hca/86715947089950.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/obschaja-tetrad-vektor-to596b-96-l-a5-kletka-mjagkaja-oblozhka-1-sht-100806242/?c=750000000',
          likes:0,
        },
        {
          name: 'Клей Dolphin 103885147',
          description: '25 г',
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h24/87004224585758.png?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/dolphin-103885147-25-g-103885147/?c=750000000',
          likes:0,
        },
        {
          name: 'Маркер Yalong YLN-08',
          description: '8 шт, 1 мм, мультиколор',
          rating: 4.8,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/h85/86590599561246.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/marker-yalong-yln-08-8-sht-1-mm-mul-tikolor-105280716/?c=750000000',
          likes:0,
        },
    ],

    "Toasters":
      [
        {
          name: 'Тостер SOKANY HJT-022',
          description: 'Белый',
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h52/64354815344670.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/sokany-hjt-022-belyi-102372874/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHamHqHjVhrtKkPWgSeXbqME9zu34wFsQDXqHM9lenzLfPOFQWY6LuS8aAroYEALw_wcB',
          likes:0,
        },
        {
          name: 'Тостер Philips HD 2581/00',
          description: 'Белый',
          rating: 5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/hf3/63764400570398.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/philips-hd-2581-00-belyi-11000101/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHamHqHjVhrtKkPWgSeXbqME9zu34wFsQDXqHM9lenzLfPOFQWY6LuS8aAroYEALw_wcB',
          likes:0,
        },
        {
          name: 'Тостер Proliss PRO-010',
          description: 'Черный',
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/had/64369485742110.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/proliss-pro-010-chernyi-103106632/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHamHqHjVhrtKkPWgSeXbqME9zu34wFsQDXqHM9lenzLfPOFQWY6LuS8aAroYEALw_wcB',
          likes:0,
        },
        {
          name: 'Тостер Vitek VT-7169',
          description: 'Черный',
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/h0a/63882102341662.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/vitek-vt-7169-chernyi-101964651/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHamHqHjVhrtKkPWgSeXbqME9zu34wFsQDXqHM9lenzLfPOFQWY6LuS8aAroYEALw_wcB',
          likes:0,
        },
        {
          name: 'Тостер Haley HY-9603',
          description: 'Черный, серебристый',
          rating: 4.8,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/he6/h42/83930058031134.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/haley-hy--9603-chernyi-serebristyi-113435172/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHamHqHjVhrtKkPWgSeXbqME9zu34wFsQDXqHM9lenzLfPOFQWY6LuS8aAroYEALw_wcB',
          likes:0,
        },
      ],

    "Vacuum Cleaners":
      [
        {
          name: 'Пылесос Deerma DX700',
          description: 'Белый',
          rating: 5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHamHqHjVhrtKkPWgSeXbqME9zu34wFsQDXqHM9lenzLfPOFQWY6LuS8aAroYEALw_wcB',
          likes:0,
        },
        {
          name: 'Пылесос Deerma DX700S',
          description: 'Серый',
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hd7/h74/63950404878366.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/deerma-dx700s-seryi-100680527/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHamHqHjVhrtKkPWgSeXbqME9zu34wFsQDXqHM9lenzLfPOFQWY6LuS8aAroYEALw_wcB',
          likes:0,
        },
        {
          name: 'Пылесос Deerma DX115C',
          description: 'Черный',
          rating: 4.8,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/hcf/63791470936094.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/deerma-dx115c-chernyi-3701430/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHamHqHjVhrtKkPWgSeXbqME9zu34wFsQDXqHM9lenzLfPOFQWY6LuS8aAroYEALw_wcB',
          likes:0,
        },
        {
          name: 'Пылесос Samsung VCC4520S36',
          description: 'Синий',
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h53/63761733746718.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/samsung-vcc4520s36-xev-sinii-3701056/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHamHqHjVhrtKkPWgSeXbqME9zu34wFsQDXqHM9lenzLfPOFQWY6LuS8aAroYEALw_wcB',
          likes:0,
        },
        {
          name: 'Пылесос Xiaomi Vacuum Cleaner G20 Lite',
          description: 'Белый',
          rating: 5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pd8/pbe/6399976.jpg?format=gallery-medium',
          link: 'https://kaspi.kz/shop/p/xiaomi-vacuum-cleaner-g20-lite-belyi-119675547/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_smartphones_v2&gclid=Cj0KCQiAwtu9BhC8ARIsAI9JHamHqHjVhrtKkPWgSeXbqME9zu34wFsQDXqHM9lenzLfPOFQWY6LuS8aAroYEALw_wcB',
          likes:0,
        },
      ],
  }

  assignCategory(category:string) {
    this.selectedCategory = category;

}
>>>>>>> 5db2126f (Initial commit)
}