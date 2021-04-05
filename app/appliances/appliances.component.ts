import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent implements OnInit {

  orders: Order[] = [
    {id: 1, name: "Price: Low to High"},
    {id: 2, name: "Price: High to Low"},
    {id: 3, name: "Name in Ascending Order"},
    {id: 4, name: "Name in Descending Order"}
  ]

  constructor() { }
  
  washingMachines: any;
  refrigerators: any;
  airConditioners: any;
  waterPurifiers: any;
  public products: string;
  orderValue: string;
  orderDisplay: any;
  searchText: string;

  ngOnInit(): void {
    this.washingMachines = [
      {id: 101, name: "Samsung Automatic Front Load", description: "Samsung Samsung 9 kg Fully Automatic Front Load Washing Machine with In-built Heater Grey (WW90K54E0UX/TL) Automatic washing machine is packed with great wash features having weight of 63 KG and has a capacity of 9 KG. The Samsung washer ensures thorough cleaning of clothes. It uses Tumble washing method for cleansing of clothes. It allows you to wash your clothes quickly. It dries your clothes quickly. It has a unique in built heater for thorough cleaning of your clothes. The washing machine has a maximum RPM of 1400 rpm which leads to a lower drying time. The washing machine stainless steel drum is specially designed for lesser abrasion of laundry, and the holes on the upper part of the drum drain helps in getting rid of lint and residue. The washing machine has a digital display which keep you updated about with the wash cycle time and various washing stages. The Samsung Automatic washing machine consumes 300 W of power. Samsung Samsung 9 kg Fully Automatic Front Load Washing Machine with In-built Heater Grey (WW90K54E0UX/TL) Automatic washing machine gives cleaner and fresher clothes.", price: "Now Rs. 61,300", priceNumber: 61300, imagePath: "assets/images/appliances/w1.jpeg"},
      {id: 102, name: "Panasonic Semi Automatic Top Load", description: "A tough stain on your favourite dress? This washing machine from Panasonic will help you get rid of it effectively, thanks to the Wash Timer that comes with an Auto Soak feature. It also comes with an effective lint removal system.", price: "Now Rs. 17,500", priceNumber: 17500, imagePath: "assets/images/appliances/w2.jpeg"},
      {id: 103, name: "LG Fully Automatic Top Load", description: "Presenting World's First 6 Motion Direct Drive with Hygienic Heater that cleans better than hand wash, 18 kg, Heater, Steam, Auto Lint Filter, Jet Spray,Smart closing Door,Smart Diagnosis™, Top Load Washing Machine, Color: Black (VCM).", price: "Now Rs. 59,990", priceNumber: 59990, imagePath: "assets/images/appliances/w3.jpeg"}
    ];
    this.refrigerators = [
      {id: 101, name: "Whirlpool Single Door", description: "Bring home this Whirlpool refrigerator and store fresh food conveniently. You can enjoy features like Quick Ice-making and 12 hours of cooling retention in the fridge during power cuts.", price: "Now Rs. 60,000", priceNumber: 60000, imagePath: "assets/images/appliances/r1.jpeg"},
      {id: 102, name: "LG Double Door", description: "Would you like to have a fridge that gives you the option to use the freezer as a fridge compartment when you need extra storage space? If yes, bring home this Samsung refrigerator that boasts the Convertible 5-in-1 feature. The Twin Cooling Plus feature helps keep your perishables fresh by maintaining a humidity level of up to 70%. This 5-in-1 convertible Samsung refrigerator does not require an external stabilize to operate efficiently.", price: "Now Rs. 73,890", priceNumber: 73890, imagePath: "assets/images/appliances/r2.jpeg"},
      {id: 103, name: "Whirlpool Triple Door", description: "With the Whirlpool Protton 330 L Three Door Frost-free Refrigerator, your kitchen will become home of garden-fresh fruits and vegetables, a cellar of chilled beverages, and a patisserie of your favorite desserts. This home appliance features Whirlpool’s 6th SENSE ActiveFresh Technology, an Active Fresh Zone, and the Moisture Retention Technology to keep your edibles fresh and delicious for a long time.", price: "Now Rs. 32,990", priceNumber: 32990, imagePath: "assets/images/appliances/r3.jpeg"}
    ];
    this.airConditioners = [
      {id: 101, name: "Daikin 5 Star Spli Inverter AC", description: "Split AC with inverter compressor: Variable speed compressor which adjusts power depending on heat load. It is most energy efficient and has lowest-noise operation. Energy Rating: 5 Star: , Annual Energy Consumption (as per energy label): 957 units, ISEER Value: 4.85. Manufacturer Warranty: 1 Year on Product, 1 Year on Condenser, 10 Years on Compressor.", price: "Now Rs. 66,999", priceNumber: 66999, imagePath: "assets/images/appliances/a1.jpeg"},
      {id: 102, name: "O General Split AC", description: "Since India is close to the equator, the country is well known for the heat and humidity. To beat the heat one has to install an air conditioner at home. When purchasing, one has to keep electricity consumption in mind, too. O General ASGA24FUTC 2 Ton 2 Star Split AC has an energy rating of 2. It consumes power input. The air conditioner is type and has a capacity of.", price: "Now Rs. 71,990", priceNumber: 71990, imagePath: "assets/images/appliances/a2.jpeg"},
      {id: 103, name: "LG Window Dual Inverter AC", description: "If you wish to make your room temperature comfortable even during scorching summers and freezing winters, then bring home the LG Window Dual Inverter AC. This air conditioner comes with a powerful Dual Inverter for fast cooling, Clean Filter Indicator for clean air, and LG ThinQ and Voice Control function for easy control.", price: "Now Rs. 42,990", priceNumber: 42990, imagePath: "assets/images/appliances/a3.jpeg"}
    ];
    this.waterPurifiers = [
      {id: 101, name: "Kent Perk", description: "Kent PERK (11010) RO + UF Water Purifier (White, Blue) provides access to clean drinking water which is a basic necessity. It enhances the taste of the water by removing volatile organic impurities from it. Kent waterpurifier gives you clean, odorless, and better-quality drinking water. It has a Power Consumption of 120 W. It comes with a 12 months warranty. To get 100% clean and pure water you can trust Kent PERK (11010) RO + UF Water Purifier (White, Blue).", price: "Now Rs. 46,999", priceNumber: 46999, imagePath: "assets/images/appliances/wp1.jpeg"},
      {id: 102, name: "LG RO + UF", description: "Protect your family and loved ones from a number of water-borne diseases by installing the RO Water Purifier in your home. This essential kitchen appliance features a Dual Protection Stainless Steel Tank, Digital Sterilisation Technology.", price: "Now Rs. 44,000", priceNumber: 44000, imagePath: "assets/images/appliances/wp2.jpeg"},
      {id: 103, name: "Blue Star Stella", description: "Make sure that you and your family are drinking safe water every day. This water purifier from Blue Star comes with features like taste enhancer, auto-clean function, and lots more. These features provide you with clean, fresh, and healthy drinking water free from impurities.", price: "Now Rs. 41,799", priceNumber: 41799, imagePath: "assets/images/appliances/wp3.jpeg"}
    ];
  }

  onOrderSelected(val: any) {

  }

  showMachines() {
    this.products = "machines";
  }

  showRefrigerators() {
    this.products = "refrigerator";
  }

  showConditioners () {
    this.products = "ac";
  }

  showPurifiers() {
    this.products = "wp";
  }

  userVerify() {

  }

}
