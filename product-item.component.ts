import { Component, Input } from '@angular/core';
import {Product} from '../app.component';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product:any;
  @Input() products:any;
  @Input() globalProducts:any;
  @Input() currentCategory:any;
  shareOnWhatsApp(product: any) {
    const message = encodeURIComponent(`Товар: ${product.name} - ${product.link}`);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }

  shareOnTelegram(product: any) {
    const message = encodeURIComponent(`Товар: ${product.name} - ${product.link}`);
    const telegramUrl = `https://t.me/share/url?url=${product.link}&text=${message}`;
    window.open(telegramUrl, '_blank');
  }
  like(product: any) {
    product.likes += 1;
  }
  remove(product: any) {
    this.globalProducts[this.currentCategory] = this.products.filter( (item:any) => item.name !== product.name);
  }
}
