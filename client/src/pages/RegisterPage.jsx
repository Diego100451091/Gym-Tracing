import RegisterForm from "../components/forms/RegisterForm.jsx";

import backgroundPattern from "../assets/background-pattern.svg"
import orangeLogo from "../assets/logo-orange.svg";

function RegisterPage() {
  return (
    <section className="lg:grid lg:min-h-screen lg:grid-cols-12 bg-white ">
      <aside className="bg-primary-light relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
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
            Wellcome to Gym tracking
          </h1>
          <p className="mt-2 text-sm leading-normal text-justify text-slate-500">
            Start tracking your fitness journey with us and reach your goals
            faster. Join now for personalized workouts and analyze your
            progress. Let's get started!
          </p>
          <RegisterForm>
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
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <a href="/login" className="text-sm text-primary-light underline">
                Log in
              </a>
              .
            </p>
          </RegisterForm>
        </div>
      </main>
    </section>
  );
}

export default RegisterPage;
