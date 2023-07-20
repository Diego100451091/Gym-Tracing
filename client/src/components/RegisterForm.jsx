import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/auth.shemas.js";
import { useSignAuthentication } from '../hooks/auth.hooks.js';
import FormInput from "./FormInput.jsx";
import ActionButton from "./ActionButton.jsx";

function RegisterForm({ children }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });
  const { signup } = useSignAuthentication();

  return (
    <form
      action=""
      onSubmit={handleSubmit(signup)}
      className="mt-6 grid grid-cols-6 gap-6"
    >
      <FormInput
        id="username"
        label="Username"
        type="text"
        size="col-span-6"
        registerHandler={register}
        placeholder="Ej.: Charles17"
        errors={errors.username}
      />

      <FormInput
        id="email"
        label="Email"
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
        size="col-span-6 sm:col-span-3"
        registerHandler={register}
        placeholder="******"
        errors={errors.password}
      />

      <FormInput
        id="passwordConfirmation"
        label="Password confirmation"
        type="password"
        size="col-span-6 sm:col-span-3"
        registerHandler={register}
        placeholder="******"
        errors={errors.passwordConfirmation}
      />

      {children[0]}

      <div className="col-span-6 flex items-center justify-center gap-4 flex-wrap">
        <ActionButton
          size="medium"
          customClass="w-max px-8"
          >
          CREATE AN ACCOUNT
          </ActionButton>
        {children[1]}
      </div>
    </form>
  );
}

export default RegisterForm;
