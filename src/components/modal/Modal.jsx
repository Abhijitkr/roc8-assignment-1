import { useContext, useState } from "react";
import crossIcon from "../../icons/cross.svg";
import tickIcon from "../../icons/tick.svg";
import { GlobalContext } from "../../context/context";
export default function Modal() {
  const { setShowModal, selectedImage } = useContext(GlobalContext);
  const [selectedOption, setSelectedOption] = useState(null);

  // Checkbox
  // const [downloadOptions, setDownloadOptions] = useState([
  //   { id: "small", label: "Small", size: "640x960", checked: false },
  //   { id: "medium", label: "Medium", size: "1920x2660", checked: false },
  //   { id: "big", label: "Big", size: "2400x3600", checked: false },
  //   { id: "original", label: "Original", size: "3850x5640", checked: false },
  // ]);

  // const handleCheckboxChange = (id) => {
  //   const updatedOptions = downloadOptions.map((option) =>
  //     option.id === id ? { ...option, checked: !option.checked } : option
  //   );
  //   setDownloadOptions(updatedOptions);
  // };

  const downloadOptions = [
    { id: "small", label: "Small", size: "640x960" },
    { id: "medium", label: "Medium", size: "1920x2660" },
    { id: "big", label: "Big", size: "2400x3600" },
    { id: "original", label: "Original", size: "3850x5640" },
  ];

  const imageField = [
    { key: "User", label: selectedImage.user },
    { key: "User ID", label: selectedImage.user_id },
    { key: "Type", label: selectedImage.type },
    { key: "Views", label: selectedImage.views },
    { key: "Downloads", label: selectedImage.downloads },
    { key: "Likes", label: selectedImage.likes },
  ];

  return (
    <section
      className="z-10 bg-black bg-opacity-50 fixed top-0 h-screen w-screen flex"
      onClick={() => setShowModal(false)}
    >
      <div
        key={selectedImage.id}
        className="rounded-md bg-white w-10/12 m-auto h-[500px] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="bg-[#F5F5F5] flex justify-between items-center p-3">
          <h2 className="text-[#3B4043] font-semibold">
            Preview ID: {selectedImage.id}
          </h2>
          <img
            src={crossIcon}
            alt="cross-icon"
            width="25px"
            className="mx-4 cursor-pointer"
            onClick={() => setShowModal(false)}
          />
        </header>
        <div className="p-3">
          <div>
            <img src={selectedImage.largeImageURL} alt="" />
          </div>
          <div className="text-center text-[#3B4043]">
            <div>
              <h3 className="text-start mt-5 font-semibold">Download</h3>
            </div>
            <div>
              <ul className="mt-3 rounded-md border overflow-hidden">
                {/*Checkbox
                   {downloadOptions.map((option) => (
                    <li
                      key={option.id}
                      className="border flex justify-between p-3 text-sm relative"
                    >
                      <div>
                        <p>{option.label}</p>
                      </div>
                      <div className="flex gap-5 ">
                        <p className="font-semibold">{option.size}</p>
                        <input
                          type="checkbox"
                          name={option.id}
                          id={option.id}
                          checked={option.checked}
                          onChange={() => handleCheckboxChange(option.id)}
                          className="appearance-none h-5 w-5 border border-[#DEE8F4] rounded-full checked:bg-[#4BC34B] checked:border-none cursor-pointer hover:shadow-md checked:shadow-[rgba(0,0,0,.4)] checked:shadow-md"
                        />
                        {option.checked && (
                          <img
                            src={tickIcon}
                            alt=""
                            className="absolute top-4 right-4 w-3 h-3 cursor-pointer"
                            onClick={() => handleCheckboxChange(option.id)}
                          />
                        )}
                      </div>
                    </li>
                  ))} */}

                {downloadOptions.map((option) => (
                  <li
                    key={option.id}
                    className={`border flex justify-between p-3 text-sm relative ${
                      selectedOption === option.id ? "bg-[#DEE8F4]" : null
                    }  `}
                  >
                    <div>
                      <p>{option.label}</p>
                    </div>
                    <div className="flex gap-5 ">
                      <p className="font-semibold">{option.size}</p>
                      <input
                        type="radio"
                        name="downloadOption"
                        id={option.id}
                        checked={selectedOption === option.id}
                        onChange={() => setSelectedOption(option.id)}
                        className="appearance-none h-5 w-5 border border-[#DEE8F4] rounded-full checked:bg-[#4BC34B] checked:border-none cursor-pointer checked:shadow-[rgba(0,0,0,.4)] checked:shadow-md "
                      />
                      {selectedOption === option.id && (
                        <img
                          src={tickIcon}
                          alt={option.id}
                          className="absolute top-4 right-4 w-3 h-3 cursor-pointer"
                        />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <button className="bg-[#4BC34B] text-white p-3 w-full text-sm font-medium rounded-md">
                  Download for free!
                </button>
              </div>
            </div>
            <div className="mt-5 text-start">
              <div>
                <h3 className="text-start mt-5 font-semibold">Information</h3>
              </div>
              <div className="flex mt-4 justify-between gap-3.5 flex-wrap">
                {imageField.map((field) => (
                  <div key={field.key} className="w-20">
                    <p className="text-[#717579] text-sm font-medium">
                      {field.key}
                    </p>
                    <p className="font-medium">
                      {field.label.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="px-3 flex gap-3 items-center my-4 mt-2">
          <div>
            <h4 className="font-bold">Tags: </h4>
          </div>
          <div>
            <ul className="flex gap-3">
              {selectedImage.tags.split(",").map((tag, index) => (
                <li
                  key={index}
                  className="bg-[#F5F5F5] rounded-md text-[#767676] h-fit p-1 px-3  text-sm w-fit"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
}
