import brandsImg1 from "../assets/brands/card4-1.jpg";
import brandsImg2 from "../assets/brands/card4-2.jpg";
import brandsImg3 from "../assets/brands/card4-3.jpg";
import brandsImg4 from "../assets/brands/card4-4.jfif";
import homeImg1 from "../assets/homeKitchen/cardImg1.jpg";
import homeImg2 from "../assets/homeKitchen/cardImg2.jpg";
import homeImg3 from "../assets/homeKitchen/cardImg3.jpg";
import homeImg4 from "../assets/homeKitchen/cardImg4.jpg";
import shoesImg1 from '../assets/shoes/shoesImg1.jpg'
import shoesImg2 from '../assets/shoes/shoesImg2.jpg'
import shoesImg3 from '../assets/shoes/shoesImg3.jpg'
import shoesImg4 from '../assets/shoes/shoesImg4.jpg'
import laptopImg1 from '../assets/laptops/laptopImg1.jpg'
import laptopImg2 from '../assets/laptops/laptopImg2.jpg'
import laptopImg3 from '../assets/laptops/laptopImg3.jpg'
import laptopImg4 from '../assets/laptops/laptopImg4.jpg'
import phoneImg1 from '../assets/phones/phoneImg1.jpg'
import phoneImg2 from '../assets/phones/phoneImg2.jpg'
import phoneImg3 from '../assets/phones/phoneImg3.jpg'
import phoneImg4 from '../assets/phones/phoneImg4.jpg'
import phonesAndMore from "../assets/singleMobile/phonesAndMore.jpg"
import productImg1 from '../assets/produts/productImg1.jpg'
import productImg2 from '../assets/produts/productImg2.jpg'
import productImg3 from '../assets/produts/productImg3.jpg'
import productImg4 from '../assets/produts/productImg4.jpg'
import singleBag from '../assets/singleBags/singleBag.jpg'
import CategoriesCard from "./CategoriesCard";
import CardFour from "./CategoriesCardFour";
import renewedCardImg from "../assets/frontPageCard/renewedCardImg1.jpg";
import headPhones from '../assets/frontPageCard/headphonesImg.jpg'
import laptopAndWatchImg from '../assets/frontPageCard/LaptopsAndWatches.jpg'
import SliderCard from "./SliderCard";
import giftImg1 from '../assets/gifts/img1.jpg'
import giftImg2 from '../assets/gifts/sweets.jpg'
import giftImg3 from '../assets/gifts/dryfruits.jpg'
import giftImg4 from '../assets/gifts/topoffers.jpg'
import SliderCardDetails from "./SliderCardDetails";
import dress1 from '../assets/dresses/dress1.jpg'
import dress2 from '../assets/dresses/dress2.jpg'
import dress3 from '../assets/dresses/dress3.jpg'
import dress4 from '../assets/dresses/dress4.jpg'
import dress5 from '../assets/dresses/dress5.jpg'
import dress6 from '../assets/dresses/dress6.jpg'
import dress7 from '../assets/dresses/dress7.jpg'
import dress8 from '../assets/dresses/dress8.jpg'
import dress9 from '../assets/dresses/dress9.jpg'
import dress10 from '../assets/dresses/dress10.jpg'
import dress11 from '../assets/dresses/dress11.jpg'
import dress12 from '../assets/dresses/dress12.jpg'
import dress13 from '../assets/dresses/dress13.jpg'
import dress14 from '../assets/dresses/dress14.jpg'
import dress15 from '../assets/dresses/dress15.jpg'
import dress16 from '../assets/dresses/dress16.jpg'
import dress17 from '../assets/dresses/dress17.jpg'
import dress18 from '../assets/dresses/dress18.jpg'
import dress19 from '../assets/dresses/dress19.jpg'
import dress20 from '../assets/dresses/dress20.jpg'
import mobile1 from "../assets/sliderPhones/honor90_5g.jpg";
import mobile2 from "../assets/sliderPhones/iphone13.jpg";
import mobile3 from "../assets/sliderPhones/iqooNeo7pro.jpg";
import mobile4 from "../assets/sliderPhones/itelP55_5g.jpg";
import mobile5 from "../assets/sliderPhones/lavaagni2_5g.jpg";
import mobile6 from "../assets/sliderPhones/oneplus11_5g.jpg";
import mobile7 from "../assets/sliderPhones/oneplusNordCE35G.jpg";
import mobile8 from "../assets/sliderPhones/realmenarzo60_5g.jpg";
import mobile9 from "../assets/sliderPhones/redmi12c.jpg";
import mobile10 from "../assets/sliderPhones/realmenarzoN53.jpg";
import mobile11 from "../assets/sliderPhones/redmi125G.jpg";
import mobile12 from "../assets/sliderPhones/redmiA2.jpg";
import mobile13 from "../assets/sliderPhones/samsunggalaxyA34_5g.jpg";
import mobile14 from "../assets/sliderPhones/samsungGalaxyM14_5G.jpg";
import mobile15 from "../assets/sliderPhones/samsungGalaxyM34_5g.jpg";
import mobile16 from "../assets/sliderPhones/tecnoPova5pro_5g.jpg";

const dressDetails = [
  dress1,
  dress2,
  dress3,
  dress4,
  dress5,
  dress6,
  dress7,
  dress8,
  dress9,
  dress10,
  dress11,
  dress12,
  dress13,
  dress14,
  dress15,
  dress16,
  dress17,
  dress18,
  dress19,
  dress20,
];
const phoneDetails = [
  mobile1,
  mobile2,
  mobile3,
  mobile4,
  mobile5,
  mobile6,
  mobile7,
  mobile8,
  mobile9,
  mobile10,
  mobile11,
  mobile12,
  mobile13,
  mobile14,
  mobile15,
  mobile16,
];


const productCard = {
  details: [
    { img: productImg1, title: "Festive fashion" ,link :"amazonFashion-festivalClothes",Categories: "Festival Fashion" },
    { img: productImg2, title: "Jewelry" ,link :"accessories-jewelry",Categories: "Festival Fashion"},
    { img: productImg3, title: "Home" ,link :"homeAndKitchen-pillows",Categories: "Festival Fashion"},
    { img: productImg4, title: "Kitchen" ,link :"kitchenAndDining",Categories: "Kitchen and Dining" },
  ],
  title: "Up to 70% off | Get festive ready with product fro..."
}
const phoneCard = {
  details: [                                                            
    { img: phoneImg1, title: "Budget | Under ₹10,000" ,link :"smartphones-under10k",Categories: "Smartphones" },
    { img: phoneImg2, title: "Midrange | ₹10,000 - ₹25,000" ,link :"smartphones-midrange|10k-25k",Categories: "Smartphones" },
    { img: phoneImg3, title: "Premium | ₹25,000 - ₹40,000",link :"smartphones-premium|25k-40k",Categories: "Smartphones" },
    { img: phoneImg4, title: "Ultra premium | Above ₹40,000" ,link :"smartphones-ultrapremium|25k-40k",Categories: "Smartphones" },
  ],
  title: "Deals on smartphones that suits your budget"
}
const laptopCard = {
  details: [
    { img: laptopImg1, title: "Laptop bags & backpacks" ,link :"laptopBags",Categories: "Accessories" },
    { img: laptopImg2, title: "Keyboard and mouse" ,link :"accessories-mouses",Categories: "All"},
    { img: laptopImg3, title: "Gaming accessories" ,link :"gamingAccessories",Categories: "Accessories" },
    { img: laptopImg4, title: "Laptop stands & cables" ,link :"laptopStands",Categories: "Accessories"},
  ],
  title: "Up to 80% off | Deals on mice, keyboard & more"
}
const shoesCard = {
  details: [
    { img: shoesImg1, title: "Sports shoes" ,link :"amazonFashion-sportsShoes",Categories: "All"},
    { img: shoesImg2, title: "Men's shoes" ,link :"amazonFashion-mensShoes",Categories: "All"},
    { img: shoesImg3, title: "Women's shoes" ,link :"amazonFashion-womensShoes",Categories: "All"},
    { img: shoesImg4, title: "Handbags" ,link :"amazonFashion-handBags",Categories: "All"},
  ],
  title: "Starting ₹199 | Shoes & handbags"
}

const giftingCard = {
  details: [
    { img: giftImg1, title: "Chocolates" ,link :"chocolates",Categories: "All"},
    { img: giftImg2, title: "Sweets" ,link :"sweets-sweets",Categories: "All"},
    { img: giftImg3, title: "Dry fruits" ,link :"sweets-dryFruits",Categories: "All"},
    { img: giftImg4, title: "Explore all top offers" ,link :"offers",Categories: "All"},
  ],
  title: "Up to 60% off | Gifting specials"
}
const amazonBrandsAndDeal = {
  details: [
    { img: brandsImg1, title: "Starting ₹169 | Home products" ,link :"homeAndKitchen-Home_products",Categories: "home And Kitchen"},
    { img: brandsImg2, title: "Starting ₹139 | Kitchen products" ,link :"kitchenAndDining",Categories: "kitchen And Dining"},
    { img: brandsImg3, title: "Starting ₹99 | Sweets & more" ,link :"sweets-sweets",Categories: "sweets"},
    { img: brandsImg4, title: "Min. 60% off | Fashion collections" ,link :"amazonFashion-menWears",Categories: "fashion Collections"},
  ],
  title: "Up to 70% off | Deals on Amazon Brands & more",
};
const homeCard = {
  details: [
    { img: homeImg1, title: "Starting ₹199 | Curtains" ,link :"homeAndKitchen-cutains",Categories: "home And Kitchen"},
    { img: homeImg2, title: "Min. 20% off | Color Bulbs" ,link :"bulbs",Categories: "Electrical"},
    { img: homeImg3, title: "Starting ₹499 | Under Bed Storage" ,link :"homeAndKitchen-underBedStorage",Categories: "home And Kitchen"},
    { img: homeImg4, title: "Min. 60% off | Show Pieces" ,link :"homeAndKitchen-showPieces",Categories: "home And Kitchen"},
  ],
  title: "Minimum 50% off | Restyle your home",
};
function GroupOfCards() {
  return (
    <section className="w-full grid grid-cols-4 z-[1] max-xl:grid-cols-3  items-center justify-items-center gap-y-6 ">
      <CategoriesCard
        title="Up to 70% off | Amazon Renewed"
        image={renewedCardImg}
        link='amazonRenewed'
        renewed = {true}
      />
        <CardFour data={amazonBrandsAndDeal} />
        <CategoriesCard
          title="Up to 40% off | Deals on mobiles & accessories"
          image={phonesAndMore}
          link='accessories-mobile'
        />
      <CategoriesCard
        title="Starting ₹349 | Bestselling headphones"
        image={headPhones}
        link='audioHeadphones'
      />
      <CardFour data={homeCard} />
      <CardFour data={phoneCard} />
      <CardFour data={productCard} />
      <CategoriesCard
        title="Buy 2 Get 10% off, freebies & more offers"
        image={singleBag}
        link='freebiesOffer'
      />
      <SliderCard Details={phoneDetails} title= 'Explore top offers in smartphones'/>
      <CategoriesCard
        title="Up to 90% off | Laptops, smartwatches &..."
        image={laptopAndWatchImg}
        link='electronics-laptopsWatches'
      />
      <CardFour data={shoesCard} />
      <CardFour data={giftingCard} />
      <CardFour data={laptopCard} />
      <SliderCard Details={dressDetails} title='Festive collection | Minimu 60% off'/>
      <SliderCardDetails/>
      
    </section>
  );
}

export default GroupOfCards;
