import type { Product } from "@/types";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import ProductCard from "./ProductCard";

type ProductListProps = {
  allProducts: Product[];
  hasNextPage: boolean;
  fetchNextPage: () => void;
  isFetchingNextPage: boolean;
  isFetching: boolean;
};

function ProductList({
    allProducts , 
    hasNextPage ,
    fetchNextPage ,
    isFetchingNextPage ,
    isFetching
} : ProductListProps) {
  return (
    <>
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
    </>
  );
}

export default ProductList;
