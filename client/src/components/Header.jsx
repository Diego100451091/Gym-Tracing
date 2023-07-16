import logo from "../assets/logo-white.svg"

export function Header () {
  return (
    <header className="bg-primary-light font-bold w-full h-12 fixed top-0 left-0 flex justify-center items-center z-50">
      <img className="h-[60%] aspect-square" src={logo} alt="Logo" />
    </header>
  );
};