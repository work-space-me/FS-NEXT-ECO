'use client';
import Link from 'next/link';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// assets
import ProductsJSON from '@/assets/json/products.json';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { ProductShowcase } from './components/product-showcase';

import Illustration from '@/assets/images/no-data-image.jpg';

export default function Products() {
  const isNoData = false;

  return (
    <main className="flex flex-col w-full justify-between  min-h-screen items-center pb-8">
      <div className="sm:w-[calc(100%-20%)] flex pt-5 gap-6">
        <div className="flex-[1] border border-gray-300 rounded-xl py-6 px-4 h-fit">
          <div className="text-2xl font-semibold">Filter</div>
          <Separator />
          <Separator />
          <Separator />
        </div>

        <div className="flex-[3]">
          {isNoData ? (
            <div className="flex w-full h-full items-center justify-center">
              <div className="w-auto h-auto flex flex-col items-center">
                <div className="w-[331px] h-[203px] relative">
                  <Image
                    src={Illustration}
                    layout="fill"
                    alt=""
                    objectFit="contain"
                  />
                </div>
                <div className="text-2xl font-semibold">Uuuupps..</div>
                <div className="w-[390px] mt-2 text-center">
                  Produk yang kamu cari tidak bisa kami temukan, cobalah
                  menggunakan kata kunci lainnya atau cek produk rekomendasi
                  kami dibawah ini.
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <div className="text-green-600 text-3xl font-semibold ">
                  Daftar Produk
                </div>
                <div className="flex items-center gap-2">
                  <div>Urut Berdasarkan</div>
                  <Select defaultValue={'harga-terendah'}>
                    <SelectTrigger className={'w-[234px] bg-white'}>
                      <SelectValue placeholder="Urut Berdasarkan" />
                    </SelectTrigger>
                    <SelectContent className="w-[234px]">
                      <SelectGroup>
                        <SelectItem value="harga-terendah">
                          Harga Terendah
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <ProductShowcase products={ProductsJSON} />

              <div className="py-12"></div>
            </>
          )}
        </div>
      </div>

      <div className="max-w-screen-lg flex flex-col flex-1 ">
        <div className="flex justify-between mb-6 items-center">
          <div className="text-green-600 text-3xl font-semibold">
            Kamu mungkin sukai
          </div>
          <Link
            href={'/product'}
            className="text-base p-0 h-auto bg-white text-neutral-600"
          >
            Lihat Selengkapnya {'>'}
          </Link>
        </div>
        <ProductShowcase products={ProductsJSON} />
      </div>
    </main>
  );
}
