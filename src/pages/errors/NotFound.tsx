import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

function NotFound() {
  return (
    <main className="h-full bg-[#f4f4f4] text-slate-950 dark:bg-slate-950 dark:text-white">
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
              src="/animation_icon/404 not found.json"
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
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Uh oh. That page doesn&apos;t exist.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700 sm:text-xl dark:text-slate-300">
            Head to our{" "}
            <Link
              to="/"
              className="underline decoration-slate-400 underline-offset-8 transition-colors hover:text-slate-950 dark:hover:text-white"
            >
              homepage
            </Link>{" "}
            that does exist, or explore the rest of the site from the navigation
            above.
          </p>

          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-slate-950 px-8 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              <Link to="/">Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
