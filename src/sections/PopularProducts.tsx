import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section id="products" className="w-full max-container">
      <h3 className="heading-three">Popular Products</h3>
      <ul className="flex flex-wrap gap-4 pt-8">
        {products.map((item) => (
          <li key={item.name} className="flex flex-col flex-wrap flex-grow items-center">
            <img src={item.imgURL} alt="Product Image" className="cursor-pointer rounded-2xl h-[250px] w-[250px]" />
            <h3 className="font-semibold text-2xl">{item.name}</h3>
            <span className="text-red-500">{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default PopularProducts;