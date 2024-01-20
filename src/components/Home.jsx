import home from "../images/home.png";
import SearchBar from "./SearchBar";
import Navbar from "./navbar";

export default function Home() {
  return (
    <section
      className="bg-cover bg-center w-full h-screen"
      style={{ backgroundImage: `url(${home})` }}
    >
      <Navbar />

      <div>
        <h1 className="text-3xl mt-20 text-white font-bold text-center m-auto md:text-4xl md:w-6/12 lg:text-5xl lg:w-/12">
          Discover over 2,000,000 free Stock Images
        </h1>
      </div>

      <SearchBar />
    </section>
  );
}
