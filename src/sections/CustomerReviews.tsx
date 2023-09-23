import { reviews } from "../constants";
import star from "../assets/icons/star.png"

const CustomerReviews = () => {
  return (
    <section id="reviews" className="w-full max-container">
      <h3 className="heading-three">Customer Reviews</h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8 gap-8">
        {reviews.map((review) => (
          <li key={review.customerName} className="flex flex-col items-center gap-1">
            <img src={review.imgURL} alt="Product Image" className="rounded-full h-[150px] w-[150px]" />
            <span className="text-slate-500 text-center">{review.feedback}</span>
            <div className="flex align-middle gap-1">
              <img src={star} className="h-[20px] w-[20px] inline" /><span className="text-slate-500">{`(${review.rating.toFixed(2)})`}</span>
            </div>
            <h3 className="font-semibold text-2xl">{review.customerName}</h3>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CustomerReviews;