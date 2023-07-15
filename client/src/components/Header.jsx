import logo from "../assets/logo-white.png"

export function Header () {
  return (
    <header className="bg-primary-light font-bold w-full h-12 fixed top-0 left-0  flex justify-center items-center z-100">
      <img className="h-[60%] aspect-square" src={logo} alt="Logo" />
    </header>
  );
};