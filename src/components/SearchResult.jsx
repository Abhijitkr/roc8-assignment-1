import { useContext } from "react";
import { GlobalContext } from "../context/context";

export default function SearchResult() {
  const { dataSet, searchTerm, searched } = useContext(GlobalContext);

  return (
    <section className=" mt-5 md:flex md:flex-wrap w-full">
      {dataSet.length > 0
        ? dataSet.map((item) => {
            return (
              <div key={item.id} className=" bg-white md:w-1/2 lg:w-4/12">
                <div className="px-4 py-2">
                  <img
                    src={item.largeImageURL}
                    alt={`${searchTerm} - ${item.id}`}
                    className="rounded-md md:h-[250px] md:w-[400px] m-auto"
                  />
                  <ul className="flex gap-5 justify-center">
                    {item.tags.split(",").map((tag, tagIndex) => (
                      <li
                        key={tagIndex}
                        className="bg-[#F5F5F5] text-[#767676] h-fit p-1 px-3 mt-2"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })
        : searched && (
            <h1 className="text-white text-4xl font-semibold text-center mt-20 md:m-auto md:mt-20">
              No Image Found!
            </h1>
          )}
    </section>
  );
}
