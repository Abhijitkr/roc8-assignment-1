import search from "../icons/search.svg";

export default function SearchBar() {
  return (
    <section className="mt-20 m-auto w-8/12 lg:w-7/12 text-white">
      <form
        className="relative group flex justify-center bg-[#D9D9D9] bg-opacity-20 backdrop-blur-xl items-center"
        action=""
      >
        <input
          type="text"
          placeholder="Search"
          className="placeholder-white pl-16 bg-transparent shadow-2 shadow-[inset_0px_0px_4px_4px_rgb(182,182,182,.4)] w-full rounded-md py-4 px-6"
        />
        <img src={search} alt="" className="left-4 pr-3 border-r-2 absolute" />
        <button
          type="submit"
          className="absolute border-2 px-2 rounded-md right-5"
        >
          GO!
        </button>
      </form>
    </section>
  );
}
