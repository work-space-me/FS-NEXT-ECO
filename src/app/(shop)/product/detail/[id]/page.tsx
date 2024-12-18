'use client';
import { useState } from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// components
import { Button } from '@/components/ui/button';

// assets
import ProductsJSON from '@/assets/json/products.json';
import { ProductDetails } from '../../components/product-card';
import { ShoppingBag, ShoppingCart, Star } from 'lucide-react';
import { formatNumber } from '@/lib/utils';
import { ProductShowcase } from '../../components/product-showcase';

export default function Products() {
  const router = useRouter();
  //   const [itemCount, setItemCount] = useState(1);

  const productDetails = ProductsJSON[0];

  const [recommendedProducts] = useState<ProductDetails[]>(ProductsJSON);

  return (
    <main className="flex flex-col w-full min-h-screen items-center pb-8">
      <div className="w-content flex pt-5 gap-12">
        <div className="border p-2 rounded-xl">
          <div className="w-[376px] h-[376px] relative">
            <Image
              src={productDetails.img}
              layout="fill"
              alt=""
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-leaf font-semibold">
            {productDetails.category}
          </div>
          <div className="text-4xl font-semibold">{productDetails.name}</div>
          <div className="flex gap-2">
            <Star
              className="w-5 h-5"
              stroke="carrot"
              fill="carrot"
            />
            <span>{productDetails.rating}</span>
            <span>|</span>
            <span>{productDetails.sold} terjual</span>
          </div>
          <div className="text-4xl font-semibold">
            Rp {formatNumber(productDetails.price)} / {productDetails.unit}
          </div>
          <div className="text-gray-400">
            Wortel dapat dimakan dengan berbagai cara. Pada wortel mentah hanya
            3% β-ririencha yang dilepaskan selama proses pencernaan, proses ini
            dapat ditingkatkan hingga 39% melalui pulping, memasaknya dan
            menambahkan minyak sawit. Bisa juga dengan cara di buat jus wortel
            dan kandungan vitaminnya hampir sama dengan wortel yang dimakan
            begitu saja.
          </div>
          <div className="flex gap-4 items-center">
            {/* <CommonStepper
              count={itemCount}
              onChange={(count) => setItemCount(count)}
            /> */}
            <Button className={'py-1 px-4 bg-leaf text-white leading-4'}>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Masukkan Keranjang
            </Button>
            <Button
              className={'py-1 px-4 bg-carrot text-white leading-4'}
              onClick={() => {
                router.push('/checkout');
              }}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Beli Sekarang
            </Button>
          </div>
        </div>
      </div>
      <div className="w-content separator my-6" />
      <div className="w-content">
        <div className="flex justify-between mb-6 items-center">
          <div className="text-leaf text-3xl font-semibold">
            Rekomendasi buat kamu
          </div>
          <Link
            href={'/product'}
            className="text-base p-0 h-auto bg-white text-neutral-600"
          >
            Lihat Selengkapnya {'>'}
          </Link>
        </div>
        <ProductShowcase products={recommendedProducts} />
      </div>
    </main>
  );
}
