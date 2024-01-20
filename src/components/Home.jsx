import home from "../images/home.png";
import SearchBar from "./SearchBar";
import Navbar from "./navbar";

export default function Home() {
  return (
    <main
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${home})` }}
    >
      <Navbar />

      <section>
        <h1 className="text-3xl mt-20 text-white font-bold text-center m-auto md:text-4xl md:w-6/12 lg:text-5xl lg:w-/12">
          Discover over 2,000,000 free Stock Images
        </h1>
      </section>

      <SearchBar />

      <section className=" text-white p-2 text-center rounded-md w-4/12 text-wrap mt-5 m-auto text-xs shadow-2 shadow-[inset_0px_0px_4px_4px_rgb(182,182,182,.4)] bg-[#D9D9D9] bg-opacity-5 md:w-fit md:text-nowrap md:px-4">
        <p>
          <strong>Trending: </strong>
          flowers, love, forest, river
        </p>
      </section>
    </main>
  );
}
