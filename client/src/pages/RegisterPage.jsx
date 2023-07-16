import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/auth.shemas.js";
import { registerRequest } from '../api/auth.api.js';
import RegisterFormInput from "../components/RegisterFormInput.jsx";

import backgroundPattern from "../assets/background-pattern.webp";
import orangeLogo from "../assets/logo-orange.svg";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = async (values) => {
    const response = await registerRequest(values);
    console.log("Register request response:", response);
  };

  return (
    <section className="lg:grid lg:min-h-screen lg:grid-cols-12 bg-white ">
      <aside className="bg-primary-light relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          alt="Pattern"
          src={backgroundPattern}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </aside>

      <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div className="max-w-xl lg:max-w-3xl">
          <a className="bloc" href="/">
            <span className="sr-only">Home</span>
            <img src={orangeLogo} className="h-8 sm:h-10"></img>
          </a>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black m-0 mt-6 ">
            Wellcome to Gym tracking!
          </h1>
          <p className="mt-4 leading-relaxed text-justify text-slate-500">
            Start tracking your fitness journey with us and reach your goals
            faster. Join now for personalized workouts and analyze your
            progress. Let's get started!
          </p>
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

            <p className="col-span-6 text-sm text-gray-500">
              By creating an account, you agree to our{" "}
              <a
                href="/privacy-policy"
                className="text-sm text-gray-700 underline"
              >
                privacy policy
              </a>
              .
            </p>

            <div className="col-span-6 flex items-center justify-center gap-4 flex-wrap">
              <button
                type="submit"
                className="medium-button bg-primary-light text-white w-max px-8"
              >
                Create an account
              </button>

              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-sm text-primary-light underline"
                >
                  Log in
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
}

export default RegisterPage;
