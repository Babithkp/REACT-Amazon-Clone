const data = [
  { name: "All Categories", id: "categories" },
  { name: "Alexa Skills", id: "alexa-skills" },
  { name: "Amazon Devices", id: "amazon-devices" },
  { name: "Amazon Fashion", id: "fashion" },
  { name: "Amazon Fresh", id: "nowstore" },
  { name: "Amazon Pantry", id: "pantry" },
  { name: "Appliances", id: "appliances" },
  { name: "Apps & Games", id: "mobile-apps" },
  { name: "Baby", id: "baby" },
  { name: "Beauty", id: "beauty" },
  { name: "Books", id: "stripbooks" },
  { name: "Car & Motorbike", id: "automotive" },
  { name: "Clothing & Accessories", id: "apparel" },
  { name: "Collectibles", id: "collectibles" },
  { name: "Computers & Accessories", id: "computers" },
  { name: "Electronics", id: "electronics" },
  { name: "Furniture", id: "furniture" },
  { name: "Garden & Outdoors", id: "lawngarden" },
  { name: "Gift Cards", id: "gift-cards" },
  { name: "Grocery & Gourmet Foods", id: "grocery" },
  { name: "Health & Personal Care", id: "hpc" },
  { name: "Home & Kitchen", id: "kitchen" },
  { name: "Industrial & Scientific", id: "industrial" },
  { name: "Jewellery", id: "jewelry" },
  { name: "Kindle Store", id: "digital-text" },
  { name: "Luggage & Bags", id: "luggage" },
  { name: "Luxury Beauty", id: "luxury-beauty" },
  { name: "Movies & TV Shows", id: "dvd" },
  { name: "Music", id: "popular" },
  { name: "Musical Instruments", id: "mi" },
  { name: "Office Products", id: "office-products" },
  { name: "Pet Supplies", id: "pets" },
  { name: "Prime Video", id: "instant-video" },
  { name: "Shoes & Handbags", id: "shoes" },
  { name: "Software", id: "software" },
  { name: "Sports, Fitness & Outdoors", id: "sporting" },
  { name: "Tools & Home Improvement", id: "home-improvement" },
  { name: "Toys & Games", id: "toys" },
  { name: "Under ₹500", id: "under-ten-dollars" },
  { name: "Video Games", id: "videogames" },
  { name: "Watches", id: "watches" },
];
// eslint-disable-next-line react/prop-types
function Categories({onChange}) {
  return (
    <ul className="overflow-y-auto h-[28rem] text-lg">
      {data.map((item) => (
        <li
        onClick={()=>onChange(item.name)}
          className="hover:bg-blue-800 hover:text-white w-full pl-2"
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

export default Categories;
