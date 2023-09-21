import { Button } from "../components";
import offer from "../assets/images/clown-offer.jpg";

const SpecialOffer = () => {
  return (
    <section id="offer" className="w-full flex lg:flex-row flex-col gap-10 max-container">
      <div className="w-full flex flex-col">
        <img src={offer} alt='Clown image' className="rounded-2xl mx-auto max-w-md w-full" />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <h3 className="text-center text-6xl lg:text-7xl font-semibold mx-auto max-w-md pb-4 mt-6 lg:-mt-7">
          Special Offer
          <br />
          <span className="text-slate-500 text-base font-normal">
            Sign up for our clown class and we will throw in a bike horn and clown nose for free!
          </span>
        </h3>
        <Button label="More Info" />
      </div>
    </section>
  )
}

export default SpecialOffer;