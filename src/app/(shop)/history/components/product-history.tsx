'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

import Bayam from '../../../../assets/products/bayam.jpeg';
const ProductHistory = () => {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="mt-6">
        <div className="border rounded-xl p-4 flex flex-col gap-4">
          <div className="flex gap-6">
            <div className="p-1 border rounded-xl overflow-hidden">
              <div className="w-[80px] h-[80px] relative">
                <Image
                  src={Bayam}
                  layout="fill"
                  alt=""
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="text-lg font-semibold text-text-black">name</div>
              <div className="text-sm text-text-black">harga</div>
              <div className="text-sm font-semibold text-text-black">
                dan jumlah item lainnya
              </div>
            </div>
            <div className="flex w-auto">
              <div className="w-[226px] flex flex-col gap-2 border-r">
                <div className="flex gap-4 items-baseline">
                  <div className="text-sm">21 Juli 2023</div>
                  <div className="rounded-sm px-2 bg-green-600 text-white text-xs font-semibold">
                    Berhasil
                  </div>
                </div>
                <div>#1056345676856793</div>
              </div>
              <div className="w-[172px] pl-[22px] pr-[13px] flex flex-col gap-1">
                <div className="font-medium">Total Belanja</div>
                <div className="font-semibold">Rp 280.000</div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex-1 flex justify-end">
              <Button
                className={'px-[19px] bg-white text-greenbg-green-600'}
                onClick={() => {
                  router.push('/checkout');
                }}
              >
                Lihat Detail Transaksi
              </Button>
            </div>
            <div className="w-[172px] flex">
              <Button
                className={'flex-1 ml-[9px] mr-4 bg-green-600'}
                onClick={() => {
                  router.push('/product');
                }}
              >
                Beli lagi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHistory;
