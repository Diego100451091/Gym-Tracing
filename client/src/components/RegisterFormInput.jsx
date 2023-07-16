import { useState, useEffect } from "react";

function RegisterFormInput({
  id,
  label,
  type,
  size,
  registerHandler,
  placeholder,
  requirements,
  errorsHandler,
  isUsed,
}) {
  const [status, setStatus] = useState("neutral");

  const updateStatus = () => {
    if (errorsHandler) {
      setStatus("error");
    } else {
      if (!isUsed) {
        setStatus("neutral");
      } else {
        setStatus("success");
      }
    }
  }

  useEffect(updateStatus, [errorsHandler]);

  return (
    <div className={`relative ${size}`}>
      <label
        htmlFor={label}
        className={`absolute bg-white text-sm top-1 left-2.5 pl-1 pr-1 text-${status}`}
      >
        {label}
      </label>
      <input
        type={type}
        {...registerHandler(id, requirements)}
        className={`w-full h-auto mt-4 outline outline-2 rounded-lg px-4 py-3 text-sm outline-${status}`}
        placeholder={placeholder}
      />
      {errorsHandler && (
        <p className="text-error-light px-2.5 text-justify pt-1 text-xs">
          ✖ {errorsHandler.message}
        </p>
      )}
    </div>
  );
}

export default RegisterFormInput;
