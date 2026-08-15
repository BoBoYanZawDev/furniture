import { DotLottieReact } from "@lottiefiles/dotlottie-react"


type EmptyDataProps = {
  message?: string;
};

function EmptyData({message = "No data found."} : EmptyDataProps) {
  return (
      <main className="flex-1 my-20">
        <section className="mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
          <div className="w-full max-w-3xl">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DotLottieReact
                src="/animation_icon/nodata.json"
                loop
                autoplay
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>

          <div className="mt-6 max-w-4xl">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-2xl dark:text-white">
              {message}
            </h1>
          </div>
        </section>
      </main>
  )
}

export default EmptyData
