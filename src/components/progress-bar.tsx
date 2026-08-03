import {useNavigation} from "react-router";
import {useIsFetching} from "@tanstack/react-query";

export default function ProgressBar() {
  const navigation = useNavigation();
  const isFetching = useIsFetching();

  const isLoading = navigation.state === "loading" || isFetching > 0;

  return (
    <div
      className={`fixed top-0 left-0 h-1 bg-blue-500 transition-all duration-300 ${
        isLoading ? "w-full" : "w-0"
      }`}
    />
  );
}