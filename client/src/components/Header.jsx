import logo from "../assets/logo-white.png"

export function Header () {
  return (
    <header className="bg-primary-light font-bold w-full flex justify-center items-center relative z-100">
      <img className="h-[60%] aspect-square" src={logo} alt="Logo" />
    </header>
  );
};