'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { formatNumber } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react';
import { ProductDetails } from '../../product/components/product-card';

const ItemList = () => {
  const [products] = useState<ProductDetails[]>([
    {
      img: '/vegetables.jpeg',
      price: 40000,
      rating: 4.9,
      sold: 40,
      name: 'Kembang Kol',
      unit: 'kg',
      itemCount: 1,
    },
    {
      img: '/vegetables.jpeg',
      price: 25000,
      rating: 4.9,
      sold: 40,
      name: 'Kentang Gondangdia',
      unit: 'kg',
      itemCount: 2,
    },
  ]);
  return (
    <div>
      <div className="text-lg text-green-600 font-semibold">
        Barang yang dibeli
      </div>
      {products.map((productDetails, index) => {
        return (
          <div
            className="w-full"
            key={index}
          >
            <div className="flex gap-6 items-center">
              <Checkbox
                className="w-6 h-6 border-2 border-leaf data-[state=checked]:bg-leaf data-[state=checked]:text-primary-foreground"
                id={'product-1'}
              />
              <div className="p-1 border rounded-lg">
                <div className="w-[80px] h-[80px] relative">
                  <Image
                    src={productDetails.img}
                    layout="fill"
                    alt=""
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-2">
                <div>{productDetails.name}</div>
                <div className="font-semibold">
                  Rp {formatNumber(productDetails.price)}
                </div>
              </div>

              <Button className="text-red-400 border-0 bg-white font-regular">
                Hapus
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
