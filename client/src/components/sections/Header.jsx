import logo from "../../assets/logo-orange.svg";
import Nav from "../nav/Nav";

function Header({ title }) {
  return (
    <header className="bg-white font-bold w-full h-12 fixed top-0 left-0 flex justify-between items-center gap-2 px-5 z-50 shadow-md">
      <div className="bg-white h-[60%] flex items-center">
        <img className="h-full aspect-square" src={logo} alt="Logo" />
        <label className="text-primary-light text-lg ml-2">{title}</label>
      </div>
      <Nav />
    </header>
  );
}


export default Header;
