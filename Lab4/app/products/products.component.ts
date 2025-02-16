import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {style} from '@angular/animations';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {
      name: 'Xiaomi Redmi 13C 8 ГБ',
      description: 'Cмартфон, 256 ГБ, черный',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000'
    },
    {
      name: 'Apple iPhone 13',
      description: 'Cмартфон, 128 ГБ, черный',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      name: 'Apple iPhone 16 Pro Max',
      description: 'Cмартфон, 256 ГБ, черный',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
    },
    {
      name: 'Realme Note 50 3 ГБ',
      description: 'Cмартфон, 64 ГБ, черный',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000'
    },
    {
      name: 'Samsung Galaxy A55 5G 8 ГБ',
      description: 'Cмартфон, 256 ГБ, темно-синий',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000'
    },



    {
      name: 'SV4 SvetoCopy A4',
      description: 'бумага, A4, 500 шт',
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p05/p92/25036264.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/sv4-svetocopy-a4-bumaga-a4-500-sht-matovoe-pokrytie-108810207/?c=750000000'
    },
    {
      name: 'Ручка шариковая Obama 2810',
      description: '12 шт, 1 мм, цвет чернил синий',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/peb/p22/25041852.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/ruchka-sharikovaja-obama-2810-12-sht-1-mm-tsvet-chernil-sinii-107217516/?c=750000000'
    },
    {
      name: 'Общая тетрадь Вектор ТО596Б',
      description: '96 л, А5, клетка, мягкая обложка',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9a/hca/86715947089950.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/obschaja-tetrad-vektor-to596b-96-l-a5-kletka-mjagkaja-oblozhka-1-sht-100806242/?c=750000000'
    },
    {
      name: 'Клей Dolphin 103885147',
      description: '25 г',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h24/87004224585758.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dolphin-103885147-25-g-103885147/?c=750000000'
    },
    {
      name: 'Маркер Yalong YLN-08',
      description: '8 шт, 1 мм, мультиколор',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h07/h85/86590599561246.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/marker-yalong-yln-08-8-sht-1-mm-mul-tikolor-105280716/?c=750000000'
    },


  ]

  shareOnWhatsApp(product: any) {
    const message = encodeURIComponent(`Check this out: ${product.name} - ${product.link}`);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  shareOnTelegram(product: any) {
    const message = encodeURIComponent(`Check this out: ${product.name} - ${product.link}`);
    const telegramUrl = `https://t.me/share/url?url=${product.link}&text=${message}`;
    window.open(telegramUrl, '_blank');
  }

  protected readonly style = style;
}