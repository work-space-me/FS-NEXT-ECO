'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { formatNumber } from '@/lib/utils';
import { Star } from 'lucide-react';
import Image from 'next/image';

export interface ProductDetails {
  img: string;
  name: string;
  price: number;
  unit: string;
  rating: number;
  sold: number;
  itemCount?: number;
}

interface CardProps {
  details: ProductDetails;
}
export function ProductCard({ details }: CardProps) {
  return (
    <div
      className={
        'w-full flex flex-col gap-2 p-4 border border-gray rounded-xl hover:transition-all hover:ease-in hover:duration-200 hover:drop-shadow-lg bg-white relative'
      }
    >
      <div
        className="absolute top-4 right-4 z-10 hover:drop-shadow-lg"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          // setIsFavorite(!isFavorite);
        }}
      >
        {/* <FavoriteButton isFavorite={isFavorite} /> */}
      </div>

      <div className="w-full relative">
        <AspectRatio ratio={1 / 1}>
          <Image
            src={details.img}
            layout="fill"
            alt=""
            objectFit="contain"
          />
        </AspectRatio>
      </div>
      <div className="text-leaf text-xl font-medium text-green-600">
        {details.name}
      </div>
      <div className="font-semibold">
        Rp {formatNumber(details.price)} / {details.unit}
      </div>
      <div className="flex gap-2">
        <Star className="w-5 h-5" />
        <span>{details.rating}</span>
        <span>|</span>
        <span>{details.sold} terjual</span>
      </div>
      <Button
        className="py-1 px-7 bg-leaf hover:transition-all bg-green-600 hover:ease-in hover:duration-200 hover:opacity-80 leading-4"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        Masukkan Keranjang
      </Button>
    </div>
  );
}
