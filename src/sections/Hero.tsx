import { Button } from "../components";
import hero from "../assets/images/hero-image.jpg"

const Hero = () => {
  return (
    <section id="home" className="w-full flex lg:flex-row flex-col min-h-screen gap-10 max-container bg-hero-pattern max-lg:mt-10">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-center text-6xl lg:text-7xl font-bold bg-white rounded-2xl mx-auto max-w-md pb-4 mt-6 lg:-mt-7">
            We're not
            <span className="text-red-500 uppercase"> c</span>
            <span className="text-yellow-500 uppercase">l</span>
            <span className="text-blue-500 uppercase">o</span>
            <span className="text-red-500 uppercase">w</span>
            <span className="text-yellow-500 uppercase">n</span>
            <span className="text-blue-500 uppercase">i</span>
            <span className="text-red-500 uppercase">n</span>
            <span className="text-yellow-500 uppercase">g </span> 
            around... or are we?
          <br />
          <span className="text-slate-500 text-base font-normal">Discover quality clown items, clothing, and accessories</span>
        </h1>
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <img src={hero} alt='Clown image' className="rounded-2xl mx-auto max-w-md w-full" />
        <Button label="Shop Now" />
      </div>
    </section>
  )
}

export default Hero;