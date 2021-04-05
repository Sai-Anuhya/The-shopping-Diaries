import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
// import { ProductsService } from '../products.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css']
})
export class ElectronicsComponent implements OnInit {

  orders: Order[] = [
    {id: 1, name: "Price: Low to High"},
    {id: 2, name: "Price: High to Low"},
    {id: 3, name: "Name in Ascending Order"},
    {id: 4, name: "Name in Descending Order"}
  ]

  mobiles: any;
  laptops: any;
  televisions: any;
  cameras: any;
  public products: string;
  orderValue: string;
  orderDisplay: any;
  searchText: string;
  mobilesDAO: any;
  
  constructor() { 
    
  }

  ngOnInit(): void {

    this.mobiles = [
      {id: 101, name: "Moto z2 Play", description: "Meet the Moto Z2 Play - the smartphone that strikes the perfect balance between style and performance. Powered by a powerful octa-core processor and compatible with Moto Mods. The Moto Z2 Play opens up new possibilities. The intutive Android Pure Nougat OS lets you use multiple apps in aplitscreen mode, so you can get more done in no time.", price: "Now Rs. 27,999", priceNumber: 27999, imagePath: "assets/images/electronics/m1.jpeg"},
      {id: 102, name: "Yu Yureka Black", description: "With a superior metal finish, the Yureka Black is designed to impress. Boasting 4 GB of RAM  and a 1.4 GHz Qualcomm Snapdragon 430 octa-core processor, this smartphone packs a quite a punch, making every task smooth and fast. The 3000 mAh battery of this smartphone keeps the fun going on for up to two days on a single full charge. To top it off, the fingerprint sensor of this phone keeps all your private data truly private from prying eyes", price: "Now Rs. 8,999", priceNumber: 8999, imagePath: "assets/images/electronics/m3.jpeg"},
      {id: 103, name: "Samsung On Max", description: "Meet the Samsung On Max - the smartphone that enhances your multimedia experience. With a 13MP rear camera and 13MP front camers, this smartphone takes your mobile photography to the next level. Its powerful octa-core processor, along with 4GB RAM makes way for a lagfree multitasking experience.", price: "Now Rs. 16,900", priceNumber: 16900, imagePath: "assets/images/electronics/m2.jpeg"}
    ];

    
    // this.service.getMobiles().subscribe((data: any) => {console.log(data); this.mobiles = data; });

    this.laptops = [
      {id: 101, name: "HP Imprint", description: "The HP Imprint is a sound option for the ones looking forward to buy a heavy multitasker laptop around mid range budget. The perfoemance and the battery backup is good for daily usage. Other quality features such as ample storage, preloaded Windows OS, nice looks etc makes this laptop worth buying. You can go for it. The HP 15-BE014TU (1AC77PA) flaunts a 15.6-inch HD SVA brightview WLED backlit display and runs on Windows 10 Home Basic operating system. It features a screen resolution of 1,366 X 768 pixels and is available in black coloured body. Inside the laptop, there is 2GHz Inter core i3-6006U processor for driving the system in a steady manner. Coupling it up, is a 4GB of DDR3 RAM and inbuilt Intel HD 520 GPU. The laptop comes in a black coloured body which is shiny and glossy.", price: "Now Rs. 35,964", priceNumber: 35964, imagePath: "assets/images/electronics/l1.jpg"},
      {id: 102, name: "Acer Aspire", description: "The Acer Aspire Notebook features 15.6-inch active matrix TFT colour HD LCD display, Intel Pentium N3710 quad core processor, 4GB RAM and 500 GB hard disk capacity. Windows 10 home operating system and lots more to give you superior performance. Its 15.6-inch HD active matrix TFT LCD colour display with a resolution of 1366 X 768 pixels that provides the sharpest images, boldest colours and smoothest video playback. So you can see everything clearly even under bright lights. It has high quality keyboard with touchpad that features an easy to use layout, eith the numeric keypad, direction arrows and direct function keys all clearly seperated. So they are easier to access and use, that you make fewer mistakes when controlling your notebook or inputting numbers and data. It has multi-touch gesture touchpad, HDML port, 3 USB ports, audio line out and a RJ45 port.", price: "Now Rs. 19,990", priceNumber: 19990, imagePath: "assets/images/electronics/l2.jpg"},
      {id: 103, name: "Acer Swift 3", description: "Acer Swift 3 Laptop (Core i5 7th Gen/ 8 GB/ 256 GB SSD/ Windows 10) laptop has a desplay for your daily needs. This laptop is powered by processor, occupied with 8 GB of RAM and has 256 GB SSD storage at this price point. As far as the graphics card is concerned this notebook has graphics card to manage the graphics card to manage the graphical functions. To keep it alive, it has a battery and weighs.", price: "Now Rs. 51,268", priceNumber: 51268, imagePath: "assets/images/electronics/l3.jpg"}
    ];
    this.televisions = [
      {id: 101, name: "Thomson LED Smart Android TV", description: "Watch what you love in the comfort of your house with this LED Smart Android TV from Thomson. It comes with Dolby Audio and DTS technologies for powerful surround sound, easy wireless connectivity, Google Assistant button for your everyday needs, and lots more. The TV's remote has a dedicated Netflix button which gives you easy-access to the app and customized high-quality content in the comfort of your home. Your favourite shows will now look more lifelike, thanks to the 4K content that this TV lets you indulge in on its 108 cm (43) display. Backed by the Dolby Audio and DTS technologies, the 30-watt speakers offer powerful surround-sound for a rich, cinematic sound experience. Dive into a sea of over 5000 preloaded apps and games, like Netflix, YouTube, Google Store, Google Music, etc., at the touch of a button.", price: "Now Rs. 32,999", priceNumber: 32999, imagePath: "assets/images/electronics/t1.jpeg"},
      {id: 102, name: "Samsung Super6 LED Smart Android TV", description: "It offers 4K (3840 x 2160) Ultra-HD resolution so that you can see every detail. Using Live Cast, you can broadcast your experiences right to this Samsung Ultra-HD television. It turns your TV into a virtual music system to offer you a stunning visual experience. Once you connect your smartphone to this TV, you can enjoy streaming the contents of your smartphone, such as images and videos, on this TV’s screen. You can enjoy playing graphic-rich games on this TV’s screen without any lag. You can convert your Samsung Smart TV into your PC when duty calls. You can work from the comfort of your home using Cloud Computing and Screen Mirroring for a large screen convenience. You can also access your work system remotely to complete all your pending work.", price: "Now Rs. 36,999", priceNumber: 36999, imagePath: "assets/images/electronics/t3.jpeg"},
      {id: 103, name: "MicroMax LED Smart Android TV", description: "Whether it’s your favourite series or a game that you are currently hooked to, you can open them easily on your television. All you have to do is press the mic button and speak to your Google Assistant about what you want to see on your screen. This television is Android-certified and comes with an easy-to-use interface, thereby elevating your television viewing experience. You can control this television easily and you can access all your social media platforms, browse through your media files, or adjust the volume easily from your smartphone, via Bluetooth. This television comes with built-in Chromecast, thereby letting you stream whatever you are watching on your phone to your television. Get set to enjoy rich and powerful sound along with stunning visuals.", price: "Now Rs. 10,999", priceNumber: 10999, imagePath: "assets/images/electronics/t2.jpeg"}
    ];
    this.cameras = [
      {id: 101, name: "Canon DSLR Camera Body", description: "Canon Black Colour DSLR Body with Single Lens 18 - 55 mm f/4 - 5.6 IS STM. Model Name - eos200dii. Model Number - EOS 200D II. IT's Sensor type is CMOS and Image Sensor Size is 22.3 x 14.9. Lens Mount - EF Mount. It's Shutter speed id 1/4000-30 sec. It also has self timer. Video Resolution - 1920 x 1080, video quality - Full HD. It has Display Type - TFT, Display Size - 3 inch, it was touch screen.", price: "Now Rs. 47,999", priceNumber: 47999, imagePath: "assets/images/electronics/c1.jpeg"},
      {id: 102, name: "GrayLeaf Digital Camera", description: "Digital Camera for kids and this digital camera will spark your child's imagination. The camera is equipped with an interesting photo frame. Increase the fun of taking pictures. This digital camera has big head selfie photos , filter modes, autofocus/zoom function, face recognition, smiling face automatic shooting function, timing shooting function, continuous shooting function, light supplement function, front and rear cameras can be switched arbitrarily. Compact to hold, easy to operate, anti-falling, small and light perfect for children's hands.", price: "Now Rs. 1199", priceNumber: 1199, imagePath: "assets/images/electronics/c2.jpeg"},
      {id: 103, name: "GoPro Action Camera", description: "GoPro Fusion, Case for Fusion, Rechargeable Battery, Grip for Fusion, Charging Cable. It's Model Number - CHDHZ-103. It has video Resolution 5.2k Ultra HD, video quality - 5.2k. It's shutter type auto. Sensor Type - CMOS, Size - 1/2.3 inch. It has Touch Display, size - 7 cm, resolution - 5.2k. Storage Flash memory - 5MB, compatible card - MicroSD Card, Upgradable Memory 128GB. ", price: "Now Rs. 49,000", priceNumber: 49000, imagePath: "assets/images/electronics/c3.jpeg"}
    ];
  }

  onOrderSelected(val: any) {

  }

  showMobiles() {
    this.products = "mobiles";
  }

  showLaptops() {
    this.products = "laptops";
  }

  showTelevisions () {
    this.products = "television";
  }

  showCameras() {
    this.products = "camera";
  }

  userVerify() {

  }

}
