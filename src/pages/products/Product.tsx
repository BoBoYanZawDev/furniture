import { useInfiniteQuery, useSuspenseQuery } from "@tanstack/react-query";
// import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import ProductFilter from "@/components/products/ProductFilter";
// import Pagination from "@/components/products/PaginationBottom";
import { categoryTypeQuery, infiniteProductsQuery } from "@/api/query";
import RouteLoadingFallback from "@/components/RouteLoadingFallback";
import ErrorResult from "@/components/ErrorResult";
import EmptyData from "@/components/empty-data";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useSearchParams } from "react-router";
import { parseIds } from "@/lib/utils";

function Product() {
  const { data: masterData } = useSuspenseQuery(categoryTypeQuery());
  const [searchParams, setSearchParams] = useSearchParams();
  const rawCategory = searchParams.get("categories");
  const rawType = searchParams.get("types");

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
  } = useInfiniteQuery(infiniteProductsQuery(cat, type));

  const allProducts =
    productsData?.pages.flatMap((page) => page.products) ?? [];

  const filterList = masterData.masterDataList;

  if (status === "pending") {
    return <RouteLoadingFallback />;
  } else if (status === "error") {
    return <ErrorResult message={(error as Error).message} />;
  }

  if (
    allProducts.length === 0 ||
    allProducts.every((item) => item === undefined)
  ) {
    return <EmptyData message="No posts found." />;
  }

  return (
    <div className="container mx-auto">
      <section className="my-8 flex flex-col lg:ml-0 lg:flex-row lg:items-start">
        <section className="w-full self-start lg:sticky lg:top-20 lg:w-1/5">
          <ProductFilter filterList={filterList} />
        </section>
        <section className="w-full lg:w-4/5">
          <h1 className="mb-8 text-2xl font-bold">All Products</h1>
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage || isFetchingNextPage}
              variant={!hasNextPage ? "ghost" : "secondary"}
            >
              {isFetchingNextPage ? (
                <Spinner />
              ) : hasNextPage ? (
                "Load More"
              ) : (
                "Nothing more to load"
              )}
            </Button>
          </div>
          <div>
            {isFetching && !isFetchingNextPage ? (
              <p>Background Updating...</p>
            ) : null}
          </div>
          {/* <Pagination /> */}
        </section>
      </section>
    </div>
  );
}

export default Product;
