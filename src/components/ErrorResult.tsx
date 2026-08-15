import { DotLottieReact } from "@lottiefiles/dotlottie-react"


type ErrorResultProps = {
  message?: string;
};

function ErrorResult({message = "An unexpected error occurred. Please try again."} : ErrorResultProps) {
  return (
      <main className="flex-1 my-20">
        <section className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
          <div className="w-full max-w-xl">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DotLottieReact
                src="/animation_icon/Robot-Bot 3D.json"
                loop
                autoplay
                style={{
                  width: "90%",
                  height: "90%",
                }}
              />
            </div>
          </div>

          <div className="mt-6 max-w-4xl">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              Oops!. Something Went Wrong!
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-xl dark:text-slate-300">
              {message}
            </p>
          </div>
        </section>
      </main>
  )
}

export default ErrorResult
