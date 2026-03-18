import type { ComponentType } from "react";
import type { ActionFunction, LoaderFunction } from "react-router";

interface LazyImportModule {
  default: ComponentType;
}

interface LazyRouteOptions {
  loader?: LoaderFunction;
  action?: ActionFunction;
}

export const lazyRoute = (
  importFn: () => Promise<LazyImportModule>,
  options?: LazyRouteOptions,
) => ({
  lazy: async () => {
    const mod = await importFn();

    return {
      Component: mod.default,
      ...options,
    };
  },
});
