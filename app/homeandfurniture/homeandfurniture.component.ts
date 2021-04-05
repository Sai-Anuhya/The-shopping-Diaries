import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-homeandfurniture',
  templateUrl: './homeandfurniture.component.html',
  styleUrls: ['./homeandfurniture.component.css']
})
export class HomeandfurnitureComponent implements OnInit {

  orders: Order[] = [
    {id: 1, name: "Price: Low to High"},
    {id: 2, name: "Price: High to Low"},
    {id: 3, name: "Name in Ascending Order"},
    {id: 4, name: "Name in Descending Order"}
  ]

  constructor() { }
  paintings: any;
  clocks: any;

  public products: string;
  orderValue: string;
  orderDisplay: any;
  searchText: string;

  ngOnInit(): void {
    this.paintings = [
      {id: 101, name: "MyAngadi", description: "Tanjore Painting Is A Classical South Indian Painting Style, Which Originated From Tanjore In Tamil Nadu Back In The 17th Century. They Had Used The Same To Decorate The Walls Of Temples, Palaces And Homes Since The Chola Dynasty. Deeply Rooted In Tradition, Tanjore Paintings Depict Divine Gods And Goddesses Of The Hindu Pantheon In Rich Vibrant Colors.", price: "Now Rs. 11,680", priceNumber: 11680, imagePath: "assets/images/home/p1.jpeg"},
      {id: 102, name: "Zankhi Art", description: "Frame Painting made up in sparkle coated lamination Print which gives multi effects and attracts towards it. This is an special series of Frame paintings which makes your wall very beautiful and spreads charmness in surroundings because these Frame paintings are like a silent poetry which speaks. ( A perfect gift for your SPECIAL ONEs)", price: "Now Rs. 599", priceNumber: 599, imagePath: "assets/images/home/p2.jpeg"},
      {id: 103, name: "MyAngadi", description: "Tanjore Painting Is A Classical South Indian Painting Style, Which Originated From Tanjore In Tamil Nadu Back In The 17th Century. They Had Used The Same To Decorate The Walls Of Temples, Palaces And Homes Since The Chola Dynasty. Deeply Rooted In Tradition, Tanjore Paintings Depict Divine Gods And Goddesses Of The Hindu Pantheon In Rich Vibrant Colors.", price: "Now Rs. 12,680", priceNumber: 12680, imagePath: "assets/images/home/p3.jpeg"}
    ];

    this.clocks = [
      {id: 101, name: "Sigaram Analog", description: "An Elegant and useful product for all Home and offices Desk. Need something beyond the standard dull alarm clock? This is an alarm clock you'll love. With an analog display, this alarm clock tells the time in the 12-hour clock format. It comes in a size that makes it a suitable accessory for your bedside table. You can also place it on your workstation to remind you of important meetings. The white dial presents a contrast backdrop for the bold and prominent numbers on its surface, which makes it easy for you to read the time even from a distance.", price: "Now Rs. 399", priceNumber: 399, imagePath: "assets/images/home/c1.jpeg"},
      {id: 102, name: "Horo Analog", description: "Horo is a home grown brand with utmost emphasis on quality goods to our users. We exist to provide affordability without compromising with quality. We source high quality raw material so that finished goods are sustainable and meet the user demands. This is a unique series with quite intensive innovation and technology we bring Horo Motion Gear Clock. In this clock, the all the gear in the clock rotates constantly 24*7.", price: "Now Rs. 12,975", priceNumber: 12975, imagePath: "assets/images/home/c2.jpeg"},
      {id: 103, name: "Horo Analog", description: "Quartz cuckoo clock in light color and the clock box is made of wood.The clock has quartz movement and cuckoo calls on the hour with echo.The wood clock is size: 27 cm/10.8 inch.Roof with shingles.Battery is not included.The size refers only to the clock, without pendulum and weights", price: "Now Rs. 22,575", priceNumber: 22575, imagePath: "assets/images/home/c3.jpeg"}
    ];    
  }

  onOrderSelected(val: any) {

  }

  showPaintings() {
    this.products = "paint";
  }

  showClocks() {
    this.products = "clock";
  }

  userVerify() {

  }

}
