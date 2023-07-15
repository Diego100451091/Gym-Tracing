function RegisterFormInput({ label, type, required, registerHandler }) {
  return (
    <div className="relative w-full ">
      <label htmlFor={label} className="absolute bg-white text-primary-light top-1 left-2.5 pl-1 pr-1">{label}</label>
      <input
        type={type}
        {...registerHandler(label, { required: required })}
        className="w-full h-auto mt-4 outline outline-2 outline-primary-light rounded-lg p-2"
      />
    </div>
  );
}

export default RegisterFormInput;
