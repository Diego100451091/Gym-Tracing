import { useForm } from "react-hook-form";
import { Header } from "../components/Header.jsx";
import RegisterFormInput from "../components/RegisterFormInput.jsx";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="h-full min-h-full relative">
      <Header />
      <div className="w-full h-full pb-12 flex flex-col justify-center items-center bg-primary-light">
        <h1 className="text-4xl font-bold text-white">Register</h1>
        <form
          action=""
          onSubmit={handleSubmit((values) => {
            console.log(values);
          })}
          className="max-w-500px w-9/12 flex flex-col gap-4 bg-white rounded-xl p-5"
        >
          <RegisterFormInput
            label="Username"
            type="text"
            required={true}
            registerHandler={register}
          />
          <RegisterFormInput
            label="Email"
            type="email"
            required={true}
            registerHandler={register}
          />
          <RegisterFormInput
            label="Password"
            type="password"
            required={true}
            registerHandler={register}
          />
          <RegisterFormInput
            label="Confirm Password"
            type="password"
            required={true}
            registerHandler={register}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
