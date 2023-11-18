import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { homeCategoriesData } from "../store/dataFetch";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import Results from "./Results";

function ClickResults() {
  const {productId} = useParams()
  const {data,isLoading,isError} = useQuery({
    queryKey: [productId],
    queryFn: ()=>homeCategoriesData(productId)
  })
  const productDetails =  data?.map((data)=>({
    id: data.product_id,
    title: data.product_title,
    description: data.product_description,
    images: data.product_photos,
    price: data.offer.price,
    condition: data.offer.product_condition,
    store: data.offer.store_name,
    shipping: data.offer.shipping,
    rating:data.product_rating,
    oldPrice: data.typical_price_range,
    numReviews: data.product_num_reviews,
    moreDetailLink: data.product_specs_page_url
  }))
  if (isLoading) {
    return (
      <h2 className=" font-semibold p-4 text-center w-full flex flex-col items-center h-[55%] text-2xl">
        <>
        <AiOutlineLoading3Quarters size="4em" className=" animate-spin" />
        <p className='my-4'>Fetching Data Please wait...</p>
        </>
      </h2>
    );
  }
  if (isError) {
    return (
      <div className=" font-semibold p-4 text-center w-full flex flex-col items-center h-[55%] text-2xl">
        <BiError size="4em" className=" text-red-600 " />
        <p className=" font-semibold ">Fail to Fetch </p>
        <p className=" font-semibold ">Please Check ur internet </p>
      </div>
    );
  }
  return (
    <div className=' bg-stone-100 grid grid-cols-4 gap-2 text-2xl'>
    {productDetails?.map((item)=><section key={item.id}>
    <Results data={item}/>
    </section>)}
    </div>
    )
  }

export default ClickResults