import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {

  
  orders: Order[] = [
    {id: 1, name: "Price: Low to High"},
    {id: 2, name: "Price: High to Low"},
    {id: 3, name: "Name in Ascending Order"},
    {id: 4, name: "Name in Descending Order"}
  ]

  
  constructor() { }
  watches: any;
  accessories: any;
  shoes: any;
  glasses: any;

  public products: string;
  orderValue: string;
  orderDisplay: any;
  searchText: string;

  ngOnInit(): void {
    this.watches = [
      {id: 101, name: "Fastrack", description: "5 ATM/50 m Water resistance. Metal strap. All Stainless steel Watch. High precision quartz analogue movement.", price: "Now Rs. 5,795", priceNumber: 5795, imagePath: "assets/images/men/w1.jpeg"},
      {id: 102, name: "Casio", description: "The new flagship RACE LAP CHRONOGRAPH combines a dynamic design with advanced technology to create a high-performance sports chronograph.", price: "Now Rs. 24,995", priceNumber: 24995, imagePath: "assets/images/men/w2.jpeg"},
      {id: 103, name: "Fossil", description: "The minute you land your eyes at this men's automatic multi-function watch from the House of Fossil, you'll want to own it. This classic Townsman twist watches have the look and feel of an automatic but the timekeeping accuracy of quartz.", price: "Now Rs. 17,995", priceNumber: 17995, imagePath: "assets/images/men/w3.jpeg"}
    ];
    this.accessories = [
      {id: 101, name: "Victroniox BackPack", description: "Where portability and practicality combine, meet our Vx Touring Expandable 2-in-1 Carry-On Duffel: the next generation duffel/backpack hybrid that’s set to streamline packing for all your future short-haul travel. Inside you’ll find an exceptional utilization of space that includes a zippered mesh storage pocket to safely stow away watches, jewelry, travel documents or local currency.", price: "Now Rs. 26,930", priceNumber: 26930, imagePath: "assets/images/men/a1.jpeg"},
      {id: 102, name: "Trayvax Leather Wallet", description: "The Trayvax® Element offers a rugged take on a classic leather wallet . We begin with a tough stainless-steel plate wrapped in top-grain oil-tanned leather and secured with MIL-SPEC paracord. This slim wallet is packed with features including a built-in bottle opener, integrated money clip, attachment point, and RFID-protection.", price: "Now Rs. 9,000", priceNumber: 9000, imagePath: "assets/images/men/a2.jpeg"},
      {id: 103, name: "OHM New York Leather Belt", description: "This Original Hand Made casual belt by ohmleather.com is crafted on Italian leather. Perfect Sporty casual belt. OHM Leather suggests ordering belts one size up from your actual pant size for the best fit.", price: "Now Rs. 5,999", priceNumber: 5999, imagePath: "assets/images/men/a3.jpeg"}
    ];
    this.shoes = [
      {id: 101, name: "Asics", description: "Introduce a cool flair to your footwear rotation with these leather derbies from Cole Haan. Finished with rubber soles and a comfortable footbed, they're ideal for navigating slick city streets. Wear yours with a linen shirt and rolled-up chinos.", price: "Now Rs. 13,204", priceNumber: 13204, imagePath: "assets/images/men/s1.jpeg"},
      {id: 102, name: "Chevit Casuals", description: "Crafted with Imported Mesh , Shoes pair is durable and lightweight that will make you go through the daily jostle in an easy way. The design of this shoes is fashionable and can be worn for every use.", price: "Now Rs. 359", priceNumber: 359, imagePath: "assets/images/men/s2.jpeg"},
      {id: 103, name: "Adidas Running Shoes", description: "Running reinvented. These high-performance neutral running shoes deliver unrivaled comfort and energy return. The lightweight and propulsive shoes have a seamless knit upper that's engineered with motion weave technology to provide stretch while also holding your foot in place as you run.", price: "Now Rs. 12,599", priceNumber: 12599, imagePath: "assets/images/men/s3.jpeg"}
    ];
    this.glasses = [
      {id: 101, name: "Fastrack UV Protection Sunglasses", description: "Unapologetically fashionable Go Skates sunglasses made from Plastic, this comes in a combination of Black front and Black temple with Smoke colored Polycarbonate lens", price: "Now Rs. 799", priceNumber: 799, imagePath: "assets/images/men/g1.jpeg"},
      {id: 102, name: "Rothco UV Protection Aviator Sunglasses", description: "Suitable-Men and Women, Being polarized and 100% UV protection makes these sunglasses the perfect choice for outdoor sports and activities such as driving, fishing, golf,skiing, travelling, hiking, boating, and is suitable as high fashion accessory and daily wear all year round. It is also a wonderful and practical gift for friends and family!", price: "Now Rs. 42,000", priceNumber: 42000, imagePath: "assets/images/men/g2.jpeg"},
      {id: 103, name: "Ray-Ban Polarized Aviator Sunglasses", description: "Ray-Ban Made with HD polarized lenses can filter out sunlight reflected glare, and blocking of harmful UVA and UVB rays to protect your eyes from long term damage. You will get a high definition visual and comfortable sense when you wear it.", price: "Now Rs. 16,182", priceNumber: 16182, imagePath: "assets/images/men/g3.jpeg"}
    ];
  }

  onOrderSelected(val: any) {

  }

  showWatches() {
    this.products = "watch";
  }

  showAccessories() {
    this.products = "accessory";
  }

  showShoes () {
    this.products = "shoe";
  }

  showGlasses() {
    this.products = "glass";
  }

  userVerify() {

  }

}
