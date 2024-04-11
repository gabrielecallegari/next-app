import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <div>
      <p>ProductPage {slug}</p>
      <p>Search Params: {sortOrder}</p>
    </div>
  );
};

export default ProductPage;
