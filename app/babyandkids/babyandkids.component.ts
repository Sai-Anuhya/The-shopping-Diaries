import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-babyandkids',
  templateUrl: './babyandkids.component.html',
  styleUrls: ['./babyandkids.component.css']
})
export class BabyandkidsComponent implements OnInit {

  orders: Order[] = [
    {id: 1, name: "Price: Low to High"},
    {id: 2, name: "Price: High to Low"},
    {id: 3, name: "Name in Ascending Order"},
    {id: 4, name: "Name in Descending Order"}
  ]

  constructor() { }

  toys: any;
  footwear: any;
  schoolBags: any;

  public products: string;
  orderValue: string;
  orderDisplay: any;
  searchText: string;

  ngOnInit(): void {
    this.toys = [
      {id: 101, name: "Asian Crafts", description: "Take your radio control experience off road with the all new rock crawler. This off road radio control truck boasts articulated suspensions, two motors and low gearing to make for awesome rugged off road action. Rock crawler is 27 x 16 x 13 cm and sports both front and rear suspension. The rubber tires, tire rubber material is made of high quality pvc material is soft and elastic automatically adjusts based on the road and driving fast earthquake-resistant on uneven terrain, tire tread obvious: high friction, grip extremely strong skid resistance, does not fear the slippery road skid.", price: "Now Rs. 1,299", priceNumber: 1299, imagePath: "assets/images/kids/t1.jpeg"},
      {id: 102, name: "PP Infinity", description: "A beautifully designed PP INFINITY Audi double Battery Operated Car with attention to detail for every inch. Look alike seats, to the headlights, this Battery Operated Car will give a royal feeling not just for the child but for anyone looking when he/she is driving. Four channel remote controlled car for forward, reverse, left and right moving functions. Control distance is about 10 meters. Can be operated manually also with an electronic foot accelerator, which also functions as a brake when the foot is off the accelerator pedal. Doors can be opened, and it has attractive front and back light, also the steering, front bonnet.", price: "Now Rs. 16,910", priceNumber: 16910, imagePath: "assets/images/kids/t2.jpeg"},
      {id: 103, name: "Silverlit YCOO", description: "Silverlit YCOO Junior 1.0 Robotic Programming At Your Kid's Fingertips .It has programmable Dance & Movments with touch patterns. Draw a pattern or upto 30 combinations. Junior will follow them all. Cool led eyes with our 30 Kind of touch patterns. Equiped with High Quality Speaker. Articular Joints. Requires batteries 4 AAA ( Not Included). Instruction guide included.", price: "Now Rs. 3,295", priceNumber: 3295, imagePath: "assets/images/kids/t3.jpeg"}
    ];

    this.footwear = [
      {id: 101, name: "LNG Lifestyle", description: "This Stylish Pair of Led Boys & Girls Shoes is a perfect choice for your little darling. Attractive design and vibrant shade of this pair, makes it a must-have for your darling. Can be used as Party Wear, Sports & Casual. Upper made of high quality synthetic Leather Material. Paired with a beautiful outfit, the Shoes are sure to garner attention. LNG Lifestyle Led Shoes: -- Warm and cozy lining keeps your feet to be hugged and comfortable for all day. Perfect match for your various shirt, is fashion and charming.", price: "Now Rs. 599", priceNumber: 599, imagePath: "assets/images/kids/f1.jpeg"},
      {id: 102, name: "Basicd21", description: "BASIC21 Presents Lovely Pair Of Elegant Soft Baby Shoes For Your Little One. These Shoes Are Soft And Comfortable And Has Attractive Design.These Shoes Will Help In Keeping The Soft Muscles, Tendons And Bones Of Babies Tiny Little Feet Safe. Soft And Comfortable Inner Cotton Cloth Easy On Your Baby'S Soft Skin ,Thick Sponge For Better Comfort.Slip On Closure Makes It Easy To Wear.The Cushioning Foot Bed Inside The Shoes Will Keep Your Babies Foot Warm And Soft.The Pair Offers Enough Comfort For Your Baby To Walk And Balance Their Body With Their Tiny Legs.", price: "Now Rs. 296", priceNumber: 296, imagePath: "assets/images/kids/f2.jpeg"},
      {id: 103, name: "Puma", description: "For little monsters with a cuddly side, these cheeky suede kicks are the perfect fit. Big eyes on the fastening, little ears on the tongue and tiny monster arms on the toe make for a complete look. The adjustable hook-and-loop closure ensures easy on and off and provides a snug fit for fleet-footed young adventurers. Details: Low boot Suede upper Non-marking rubber outsole for grip Adjustable hook-and-loop closure for easy on/off PUMA Kids’ style: recommended for young kids between 4 and 8 years", price: "Now Rs. 4,999", priceNumber: 4999, imagePath: "assets/images/kids/f3.jpeg"}
    ];

    this.schoolBags = [
      {id: 101, name: "True Human", description: "Multiple functionality, various compartments and spacious interior make this Bag an ideal companion for you on the go. It is water resistant School Bag..Number of compartments: 3. Capacity: 20 liters; Weight: 430 grams; Dimensions: 27 cms x 20 cms x 38 cms (LxWxH) .This Bag comes with attractive Mickey Print on front. Made up of durable and quality polyester material. Spacious to accommodate all your essentials. .Two adjustable shoulder straps. 2 Main Compartment and 1 Front Compartment 1 Water Bottle Side Mesh Pocket. Haul Loop. Light weigth and easy to carry. .Fashionable, light-weight, soft and colorful, a perfect gift for your kids. It is very soft and lightweight. .Its Can be used upto 5th Standard Class.", price: "Now Rs. 999", priceNumber: 999, imagePath: "assets/images/kids/s1.jpeg"},
      {id: 102, name: "V Teddy", description: "This Product is Sold Exclusively by ToyJoy and we have not authorized any other Sellers to sell this product, hence we can not Guarantee the Quality if purchased from any seller other than 'ToyJoy'. Bring this school bag for your little ones. Soft Foam filling in bag with soft velvet fabric as outer material with your kid's favorite cartoon character printed on it. Kids will love to go to school with this bag. It is made of Soft, non-toxic fabric and is so light weight that it can be used for picnics, travelling, etc. It has enough space for children's things like books,toys, lunch, fruits, small articles,pencil box etc. These bags are widely popular among the children going to play schools and kindergartens.", price: "Now Rs. 299", priceNumber: 299, imagePath: "assets/images/kids/s2.jpeg"},
      {id: 103, name: "Winsor", description: "WINSOR ! A well known brand for the first time online - Introducing - WINSOR Haversacks - High Grade Imported Bags . Stylish Haversacks. Multple compartments for all your needs .Versatile yet PRACTICAL bags with strategically placed pockets for ur ease and comfort..A Nice blend of colors to stand out from the Crowd. Nylon based imported weather proof fabric guarantees you ever lasting and wearibility. Imported and highly durable zippers and fittings ensure hassle free and trouble free usage. Available in a VARIETY OF COLORS ! Introductory prices .. get yours NOW !", price: "Now Rs. 7,000", priceNumber: 7000, imagePath: "assets/images/kids/s3.jpeg"}
    ];
  }

  onOrderSelected(val: any) {

  }

  showToys() {
    this.products = "toy";
  }

  showFootwear() {
    this.products = "footwear";
  }

  showBags () {
    this.products = "bag";
  }

  userVerify() {

  }

}
