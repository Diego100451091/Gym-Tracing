import { useInputStatus } from '../hooks/formInput.hooks.js';

function FormInput({
  id,
  label,
  type,
  size,
  registerHandler,
  placeholder,
  requirements,
  errors,
}) {
  const { status } = useInputStatus(errors);

  return (
    <div className={`relative ${size}`}>
      <label
        htmlFor={label}
        className={`absolute bg-white text-sm top-0 left-2.5 pl-1 pr-1 text-${status}`}
      >
        {label}
      </label>
      <input
        type={type}
        {...registerHandler(id, requirements)}
        className={`w-full h-auto mt-3 outline outline-2 rounded-lg px-4 py-3 text-sm outline-${status}`}
        placeholder={placeholder}
      />
      {errors && (
        <p className="text-error-light px-2.5 text-justify pt-1 text-xs">
          ✖ {errors.message}
        </p>
      )}
    </div>
  );
}

export default FormInput;
