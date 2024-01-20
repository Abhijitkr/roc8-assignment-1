import { useContext } from "react";
import { GlobalContext } from "../context/context";

export default function SearchResult() {
  const { dataSet } = useContext(GlobalContext);

  return (
    <section className="bg-white mt-5">
      {dataSet.map((item, index) => {
        return (
          <div key={index} className="p-5">
            <img src={item.largeImageURL} alt="" />
          </div>
        );
      })}
    </section>
  );
}
