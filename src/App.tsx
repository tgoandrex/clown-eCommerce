import Nav from "./components/Nav";

import {
  Hero,
  PopularProducts,
  SpecialOffer,
  CustomerReviews,
  SignUp,
  Footer
} from "./sections";

const App = () => {
  return (
    <main>
      <Nav />
      <section className="padding">
        <Hero />
      </section>
      <section className="padding bg-slate-200">
        <PopularProducts />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-slate-200">
        <CustomerReviews />
      </section>
      <section className="padding">
        <SignUp />
      </section>
      <section className="padding-x padding-t pb-8 bg-black text-white">
        <Footer />
      </section>
    </main>
  );
};

export default App;