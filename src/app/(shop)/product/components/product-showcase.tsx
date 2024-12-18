'use client';
import Link from 'next/link';

import { ProductCard, ProductDetails } from './product-card';

interface ShowcaseProps {
  products: ProductDetails[];
}

const ProductShowcase = ({ products }: ShowcaseProps) => {
  return (
    <>
      <div className="w-full">
        <div className={'grid gap-6'}>
          {products?.map((product, index) => (
            <Link
              key={`productCard${index}`}
              href={'/product/detail/1'}
            >
              <ProductCard details={product} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export { ProductShowcase };
