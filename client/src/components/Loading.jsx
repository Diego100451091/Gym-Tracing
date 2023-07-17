import orangeLogo from "../assets/logo-orange.svg";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img
        className="w-12 h-12 animate-loading"
        src={orangeLogo}
        alt="loading logo"
      />
      <p className="text-primary-light font-bold text-lg">
        Loading ...
      </p>
    </div>
  );
};

export default Loading;
