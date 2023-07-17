import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/auth.shemas.js";
import { useLoginAuthentication } from '../hooks/auth.hooks.js';
import FormInput from "./FormInput.jsx";

function LoginForm({ children }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });
  const { login } = useLoginAuthentication();

  return (
    <form
      action=""
      onSubmit={handleSubmit(login)}
      className="mt-6 grid grid-cols-6 gap-6"
    >
      <FormInput
        id="email"
        label="Email address"
        type="email"
        size="col-span-6"
        registerHandler={register}
        placeholder="Ej.: charles@gmail.com"
        errors={errors.email}
      />

      <FormInput
        id="password"
        label="Password"
        type="password"
        size="col-span-6"
        registerHandler={register}
        placeholder="******"
        errors={errors.password}
      />

      <div className="col-span-6 flex items-center justify-center gap-4 flex-wrap">
        <button
          type="submit"
          className="medium-button bg-primary-light text-white w-max px-8"
        >
          LOGIN
        </button>

        {children}
      </div>
    </form>
  );
}

export default LoginForm;
