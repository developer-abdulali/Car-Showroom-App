// "use client"
// import React, { useState } from "react";
// import { SearchManufacturer } from "./";
// import Image from "next/image";

// const SearchButton = ({otherClasses}: {otherClasses: string}) => {
//   <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
//     <Image src="/magnifying-glass.svg" alt="magnifying glass" width={40} height={40} className="object-contain"/>
//   </button>
// }

// const SearchBar = () => {
//     const [manufacturer, setManufacturer ] = useState ("")
//   const handleSearch = () => {};
//   return (
//     <form className="searchbar" onSubmit={handleSearch}>
//       <div className="searchbar__item">
//         <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
//         <SearchButton otherClasses="sm:hidden" />
//       </div>
//     </form>
//   );
// };

// export default SearchBar;

"use client";

import React, { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="Model Icon"
          width={25}
          height={25}
          className="absolute w-[20] h-[20] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="searchbar__input"
          placeholder="Tiguan"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
