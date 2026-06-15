import { Spinner } from "./ui/spinner";

function RouteLoadingFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner />
    </div>
  );
}

export default RouteLoadingFallback;
