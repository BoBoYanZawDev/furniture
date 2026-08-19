import { useInfiniteQuery, useSuspenseQuery } from "@tanstack/react-query";
import debounce from "lodash/debounce";
// import { products } from "@/data/products";
import ProductFilter from "@/components/products/ProductFilter";
// import Pagination from "@/components/products/PaginationBottom";
import {
  categoryTypeQuery,
  infiniteProductsQuery,
  queryClient,
} from "@/api/query";
import RouteLoadingFallback from "@/components/RouteLoadingFallback";
import ErrorResult from "@/components/ErrorResult";
import EmptyData from "@/components/empty-data";
import { useSearchParams } from "react-router";
import { parseIds } from "@/lib/utils";
import ProductList from "@/components/products/ProductList";
import { useEffect, useMemo } from "react";

function Product() {
  const { data: masterData } = useSuspenseQuery(categoryTypeQuery());
  const [searchParams, setSearchParams] = useSearchParams();
  const rawCategory = searchParams.get("category");
  const rawType = searchParams.get("type");

  const selectedCategory = parseIds(rawCategory);
  const selectedType = parseIds(rawType);
  const cat = selectedCategory.length > 0 ? selectedCategory.join(",") : null;
  const type = selectedType.length > 0 ? selectedType.join(",") : null;

  const {
    status,
    data: productsData,
    error,
    isFetching,
    isFetchingNextPage,
    // isFetchingPreviousPage,
    fetchNextPage,
    // fetchPreviousPage,
    hasNextPage,
    // hasPreviousPage,
    refetch,
  } = useInfiniteQuery(infiniteProductsQuery(cat, type));

  const allProducts =
    productsData?.pages.flatMap((page) => page.products) ?? [];
  const isFoundProducts =
    allProducts.length === 0 || allProducts.every((item) => item === undefined);

  const handleFilterChange = useMemo(
    () =>
      debounce((categories: string[], types: string[]) => {
        const newParams = new URLSearchParams();

        if (categories.length > 0) {
          newParams.set("category", encodeURIComponent(categories.join(",")));
        }

        if (types.length > 0) {
          newParams.set("type", encodeURIComponent(types.join(",")));
        }

        setSearchParams(newParams);

        queryClient.cancelQueries({
          queryKey: ["products", "infinite"],
        });

        queryClient.removeQueries({
          queryKey: ["products", "infinite"],
        });

        refetch();
      }, 500),
    [setSearchParams, queryClient, refetch],
  );

  useEffect(() => {
    return () => {
      handleFilterChange.cancel();
    };
  }, [handleFilterChange]);

  const filterList = masterData.masterDataList;

  if (status === "pending") {
    return <RouteLoadingFallback />;
  } else if (status === "error") {
    return <ErrorResult message={(error as Error).message} />;
  }

  return (
    <div className="container mx-auto">
      <section className="my-8 flex flex-col lg:ml-0 lg:flex-row lg:items-start">
        <section className="w-full self-start lg:sticky lg:top-20 lg:w-1/5">
          <ProductFilter
            filterList={filterList}
            selectedCategory={selectedCategory}
            selectedType={selectedType}
            handleFilterChange={handleFilterChange}
          />
        </section>
        <section className="w-full lg:w-4/5">
          <h1 className="mb-8 text-2xl font-bold">All Products</h1>
          {isFoundProducts ? (
            <EmptyData message="No posts found." />
          ) : (
            <ProductList
              allProducts={allProducts}
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
              isFetchingNextPage={isFetchingNextPage}
              isFetching={isFetching}
            />
          )}
        </section>
      </section>
    </div>
  );
}

export default Product;
