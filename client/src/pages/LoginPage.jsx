import LoginForm from "../components/LoginForm.jsx";

import orangeLogo from '../assets/logo-orange.svg';
import backgroundPattern from "../assets/background-pattern.webp";

function LoginPage() {
  return (
    <section className="lg:grid lg:min-h-screen lg:grid-cols-12 bg-white ">
      <aside className="bg-primary-light relative block h-16 lg:col-span-5 lg:h-full xl:col-span-6">
        <img
          alt="Pattern"
          src={backgroundPattern}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </aside>
      <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-6 xl:col-span-6">
        <div className="max-w-xl lg:max-w-3xl lg:shadow-xl lg:p-10 lg:rounded-xl">
          <a className="" href="/">
            <span className="sr-only">Home</span>
            <img src={orangeLogo} className="h-8"></img>
          </a>
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold text-black m-0 mt-4">
            Login
          </h1>
          <p className="mt-2 text-sm leading-normal text-justify text-slate-500">
            Please, enter your email and password to login.
          </p>
          <LoginForm>
            <p className="text-sm text-gray-500">
              Don't you have an account yet?{" "}
              <a
                href="/register"
                className="text-sm text-primary-light underline"
              >
                Register
              </a>
              .
            </p>
          </LoginForm>
        </div>
      </main>
    </section>
  );
}

export default LoginPage;
