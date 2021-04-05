import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {

  orders: Order[] = [
    {id: 1, name: "Price: Low to High"},
    {id: 2, name: "Price: High to Low"},
    {id: 3, name: "Name in Ascending Order"},
    {id: 4, name: "Name in Descending Order"}
  ]

  watches: any;
  accessories: any;
  shoes: any;
  jewellary: any;

  public products: string;
  orderValue: string;
  orderDisplay: any;
  searchText: string;

  constructor() { }

  ngOnInit(): void {
    this.watches = [
      {id: 101, name: "Daniel Klein", description: "With a 20-year background, Daniel Klein meets consumers in more than 60 different countries with the motto, “Fashion for Everyone”. In the series of Exclusive, Premium, Fiord, Skeleton and Trendy Daniel Klein attracts the attention of everyone with its special designs and unlimited colour options. It arouses millions of people’s interest around the world with special designs and accessible price policy as well as the functions sought for in a branded watch. DesignWorld is the Authorized service provider for Daniel Klein in India.", price: "Now Rs. 7,950", priceNumber: 7950, imagePath: "assets/images/women/w1.jpeg"},
      {id: 102, name: "Titan", description: "The brand Titan is celebrated for its close connect with the consumers across different lifestyle categories. Titan wallets, made with timeless craftsmanship, are known for their elegant design, customer centric functional value and premium quality.", price: "Now Rs. 14,495", priceNumber: 14495, imagePath: "assets/images/women/w3.jpeg"},
      {id: 103, name: "Fastrack", description: "This blue dial strap watch is very beautiful and stylish. This Fastrack Analog Watch 3072SM05 is not only for youngsters but anybody can wear it. And fell stylish. This strap watch has multiple functions. This Fastrack Stainless Steel strap watch is water resistance. Which is protected by water. Fastrack provides long lasting Stainless Steel strap material. This Silver color Stainless Steel strap material is very nice. Which feels smooth in hand. This Fastrack dial color is Silver which is looking like very nice and beautiful. Fastrack provides this Fastrack strap watch case material is stainless stell which is very nice. This fastrack brand is very popular for Indian market. And not only Indian market but it is very popular for all over the world.", price: "Now Rs. 5,395", priceNumber: 5395, imagePath: "assets/images/women/w2.jpeg"}
    ];

    this.accessories = [
      {id: 101, name: "SHOPANGEL", description: "Made of PU, Dimension- 28x12x28 CM (LxBxH). Handbags: One Main compartment with top Zip closure. Sling bag : 1 Main compartment with top Zip-closure ,Cute Small size sling for carrying phone cosmetics key money and other light and small essentials. Accessories Pouch: 1 Main compartment with Magnetic Button Closure,Ideal to keep cell phones,money wallets cosmetics etc.", price: "Now Rs. 800", priceNumber: 800, imagePath: "assets/images/women/a1.jpeg"},
      {id: 102, name: "Coach", description: "Material: Leather,   Coach mini nolita in grey pebble leather    Zip top closure, long crossbody straps 21.5 Inside 1 zip pocket, fabric lining Outside coach logo charm, coach carriage logo plate", price: "Now Rs. 28,499", priceNumber: 28499, imagePath: "assets/images/women/a2.jpeg"},
      {id: 103, name: "Riya Collections", description: "Strap: Padded Strap, Closure: Zip Closure, Capacity & Pockets: 2 Compartment Height- 13 cm, Width- 6 cm, Length- 23 cm", price: "Now Rs. 300", priceNumber: 300, imagePath: "assets/images/women/a3.jpeg"}
    ];

    this.shoes = [
      {id: 101, name: "Adidas", description: "Ultraboost reinvented. These running shoes reboot key performance technologies to give you a confident and energy-filled run. The knit upper has a second-skin fit and is built with motion-weave technology for adaptive stretch and support. Dual-density cushioning delivers medial support and an energised ride.", price: "Now Rs. 14,249", priceNumber: 14249, imagePath: "assets/images/women/s2.jpeg"},
      {id: 102, name: "Asian", description: "Lightweight & Breathable: Exclusive design and durable materials every step feels light and breezy. Breathable, free-moving fabrics which adjust according to your foot and creates an astoundingly easy-going experience. Non Slip & Shockproof: Great engineering strikes a balance in style, made in the potent design and latest fashion trends. Made for long-term wear, with extra emphasis on providing cushion to the feet, removing heel strain. Comfort Sole & Flexible Walk.", price: "Now Rs. 759", priceNumber: 759, imagePath: "assets/images/women/s1.jpeg"},
      {id: 103, name: "Puma", description: "ntroducing the Speed IGNITE NETFIT 2, built for peak performance and now faster than ever, with a NETFIT upper for an improved, customisable fit, an evoKNIT sock for added comfort, a dual-layer midsole for superior cushioning and responsiveness and an engineered forefoot propulsion zone to help you generate speed with each and every toe-off. A rubber outsole adds durability so that you'll have these kicks for the long haul. FEATURES + BENEFITS NETFIT: Optimize your fit with completely customizable lace positioning and lightweight support evoKNIT.", price: "Now Rs. 11,999", priceNumber: 11999, imagePath: "assets/images/women/s3.jpeg"}
    ];
    
    this.jewellary = [
      {id: 101, name: "Myki", description: "Express Delivery So That You Can Gift Your Loved Ones In No Time. Material: Skin friendly- alloy (97% tin and 3% bismuth). Nickel-less and lead-less as per international standards gift for her - ideal valentine, birthday, anniversary gift for someone you love with our packaging box, you do not need to opt-in for any additional gift packaging The product comes in a beautiful elegant ready-to-gift box items is smaller than what appears in photo.", price: "Now Rs. 1,999", priceNumber: 1999, imagePath: "assets/images/women/j1.jpeg"},
      {id: 102, name: "Silver Shopee", description: "Our striking and enchanting Silver Shoppee 'Proud of my love' High Quality Genuine Austrian Crystal Sterling Silver Ring will add a modern look to any ensemble and deliver a dose of vivid style to your look in one easy step. This pendant is the perfect addition to any chic women jewellery box. Show off your unique sense of style when you wear this endearing jewellery and add a glistening pop of pretty to your look. For more of our sparkling collection, please search for the brand Silver Shoppee in jewellery section and be dazzled!!", price: "Now Rs. 399", priceNumber: 399, imagePath: "assets/images/women/j2.jpeg"},
      {id: 103, name: "Pailwal Jewellary", description: "Beautifully Designed Sterling Pearls Necklace for women. Brand: With a firm focus on craftsmanship, quality and customer experience, La Belle Vie (LBV) is a top-notch destination for high end fine jewellery with uniquely crafted aesthetic designs. Metal/Purity: 925 Sterling Silver. Stone: White stones are Swarovski and coloured stones are semi precious stones . Beauty: Very Feminine, this must have design that can be worn on any occasion to boost up your style factor. Usage: Party Wear, Casual Wear & Ethnic Wear.", price: "Now Rs. 46,080", priceNumber: 46080, imagePath: "assets/images/women/j3.jpeg"}
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

  showJewellary() {
    this.products = "jewellary";
  }

  userVerify() {

  }

}
