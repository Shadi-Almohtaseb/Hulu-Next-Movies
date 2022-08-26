import Image from "next/image";
import hulu from "../public/assets/hulu-g.jpg";
import HeaderItem from "./HeaderItem";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header className="flex items-center justify-between flex-col sm:flex-row px-5">
      <div className="flex flex-grow justify-evenly max-w-2xl sm:pt-7 pt-5">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRINDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      {/* <Image src={hulu} width="140" height="110" className="object-contain" /> */}
      <Image
        src="https://logo-download.com/wp-content/data/images/svg/Hulu-logo.svg"
        width="140"
        height="110"
        className="object-contain"
      />
    </header>
  );
};

export default Header;
