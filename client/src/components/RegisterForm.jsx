import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/auth.shemas.js";
import { useAuth } from "../context/AuthContestx.jsx";
import RegisterFormInput from "../components/RegisterFormInput.jsx";

function RegisterForm( {children} ) {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({ resolver: zodResolver(registerSchema) });
  const { signup, user } = useAuth();

  console.log(user);

  const onSubmit = async (values) => {
    const response = await signup(values);
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 grid grid-cols-6 gap-6"
    >
      <RegisterFormInput
        id="username"
        label="Username"
        type="text"
        size="col-span-6"
        registerHandler={register}
        placeholder="Ej.: Charles17"
        errorsHandler={errors.username}
        isUsed={dirtyFields.username}
      />

      <RegisterFormInput
        id="email"
        label="Email"
        type="email"
        size="col-span-6"
        registerHandler={register}
        placeholder="Ej.: charles@gmail.com"
        errorsHandler={errors.email}
        isUsed={dirtyFields.email}
      />

      <RegisterFormInput
        id="password"
        label="Password"
        type="password"
        size="col-span-6 sm:col-span-3"
        registerHandler={register}
        placeholder="******"
        errorsHandler={errors.password}
        isUsed={dirtyFields.password}
      />

      <RegisterFormInput
        id="passwordConfirmation"
        label="Password confirmation"
        type="password"
        size="col-span-6 sm:col-span-3"
        registerHandler={register}
        placeholder="******"
        errorsHandler={errors.passwordConfirmation}
        isUsed={dirtyFields.passwordConfirmation}
      />

      {children[0]}

      <div className="col-span-6 flex items-center justify-center gap-4 flex-wrap">
        <button
          type="submit"
          className="medium-button bg-primary-light text-white w-max px-8"
        >
          Create an account
        </button>

        {children[1]}
      </div>
    </form>
  );
}

export default RegisterForm;
