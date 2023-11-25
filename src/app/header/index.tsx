import Image from "next/image";
import banner from "public/assets/banner.gif";
import logo from "public/assets/logo.png";
import DropDownMenu from "./components/drop-down-menu";
import SearchBar from "./components/search-bar";

export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <Image src={logo} alt="logo" className="col-span-4 p-4" />
        <Image src={banner} alt="banner" className="col-span-8 px-4" />
      </div>
      <div className="grid grid-cols-12 md:grid-cols-1 p-4">
        <SearchBar />
        <DropDownMenu />
      </div>
      <Image src={banner} alt="banner" className="col-span-8 px-4" />
    </header>
  );
}
