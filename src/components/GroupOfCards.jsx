import brandsImg1 from "../assets/brands/card4-1.jpg";
import brandsImg2 from "../assets/brands/card4-2.jpg";
import brandsImg3 from "../assets/brands/card4-3.jpg";
import brandsImg4 from "../assets/brands/card4-4.jfif";
import homeImg1 from "../assets/homeKitchen/cardImg1.jpg";
import homeImg2 from "../assets/homeKitchen/cardImg2.jpg";
import homeImg3 from "../assets/homeKitchen/cardImg3.jpg";
import homeImg4 from "../assets/homeKitchen/cardImg4.jpg";
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

const giftingCard = {
  images: [
    { img: giftImg1, title: "Chocolates" },
    { img: giftImg2, title: "Sweets" },
    { img: giftImg3, title: "Dry fruits" },
    { img: giftImg4, title: "Explore all top offers" },
  ],
  title: "Up to 60% off | Gifting specials"
}
const amazonBrandsAndDeal = {
  images: [
    { img: brandsImg1, title: "Starting ₹169 | Home products" },
    { img: brandsImg2, title: "Starting ₹139 | Kitchen products" },
    { img: brandsImg3, title: "Starting ₹99 | Dry fruits, nuts & more" },
    { img: brandsImg4, title: "Min. 60% off | Festive collections" },
  ],
  title: "Up to 70% off | Deals on Amazon Brands & more",
};
const homeCard = {
  images: [
    { img: homeImg1, title: "Starting ₹169 | Home products" },
    { img: homeImg2, title: "Starting ₹139 | Kitchen products" },
    { img: homeImg3, title: "Starting ₹99 | Dry fruits, nuts & more" },
    { img: homeImg4, title: "Min. 60% off | Festive collections" },
  ],
  title: "Minimum 50% off | Restyle your home",
};
function GroupOfCards() {
  return (
    <section className="w-full grid grid-cols-4 z-[1] max-xl:grid-cols-3  items-center justify-items-center gap-y-6">
      <CategoriesCard
        title="Up to 70% off | Amazon Renewed"
        image={renewedCardImg}
      />
        <CardFour data={amazonBrandsAndDeal} />
      <CategoriesCard
        title="Starting ₹349 | Bestselling headphones"
        image={headPhones}
      />
      <CardFour data={homeCard} />
      <SliderCard/>
      <CategoriesCard
        title="Up to 90% off | Laptops, smartwatches &..."
        image={laptopAndWatchImg}
      />
      <CardFour data={homeCard} />
      <CardFour data={giftingCard} />
      <CardFour data={homeCard} />
      <SliderCardDetails/>
      
    </section>
  );
}

export default GroupOfCards;
