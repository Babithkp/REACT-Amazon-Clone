import { useParams } from 'react-router-dom'
import ResultsVertical from './ResultsVertical'
import { useQuery } from '@tanstack/react-query'
import { fetchCategoriesData } from '../store/dataFetch'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BiError } from "react-icons/bi";

function VerticalResult() {
  const {verticalProductId} = useParams()
  const {data,isLoading,isError} = useQuery({
    queryKey: [verticalProductId],
    queryFn: ()=>fetchCategoriesData(verticalProductId)
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
      <h2 className=" font-semibold p-4 text-center w-full flex flex-col items-center h-[60%] text-2xl">
        <>
        <AiOutlineLoading3Quarters size="4em" className=" animate-spin" />
        <p className='my-4'>Fetching Data Please wait...</p>
        </>
      </h2>
    );
  }
  if (isError) {
    return (
      <div className=" font-semibold p-4 text-center w-full flex flex-col items-center h-[60%] text-2xl">
        <BiError size="4em" className=" text-red-600 " />
        <p className=" font-semibold ">Fail to Fetch </p>
        <p className=" font-semibold ">Please Check ur internet </p>
      </div>
    );
  }
  return (
    <div className=' bg-stone-100'>
    {productDetails?.map((item)=><section key={item.id}>
    <ResultsVertical data={item}/>
    </section>)}
    </div>
  )
}

export default VerticalResult