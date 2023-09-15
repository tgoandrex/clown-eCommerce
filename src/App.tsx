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
      <section>
        <Hero />
      </section>
      <section>
        <PopularProducts />
      </section>
      <section>
        <SpecialOffer />
      </section>
      <section>
        <CustomerReviews />
      </section>
      <section>
        <SignUp />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;