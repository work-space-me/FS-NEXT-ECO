import Link from 'next/link';

// components
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
import { ProductShowcase } from '../product/components/product-showcase';
import ProductHistory from './components/product-history';
import { Badge } from '@/components/ui/badge';

const History = () => {
  return (
    <main className="flex flex-col w-full min-h-screen items-center pb-8">
      <div className="w-content flex gap-6">
        <div className="m-5 p-5 flex flex-col flex-[1] border rounded-xl items-center gap-2 ">
          <div className="flex justify-center pt-3 pb-2">
            <div className="w-[71px] h-[71px] rounded-[20px] relative overflow-hidden"></div>
          </div>
          <div className="font-semibold">Muhamad Mufid Bachri</div>
          <div className="flex items-center justify-center">
            <Badge>
              <span>Member Gold</span>
            </Badge>
          </div>
          <div className="w-[100%] separator mt-3" />
          <div className="w-[100%] gap-3 flex flex-col">
            <div className="mt-6">
              <div>Transaksi bulan ini</div>
              <div className="text-[20px] font-bold">120 x</div>
            </div>
            <div className="">
              <div>Belanja bulan ini</div>
              <div className="text-[20px] font-bold text-green-500">
                Rp 1.300.000
              </div>
            </div>
            <div className="mt-3">
              <div>Saldo saat ini</div>
              <div className="text-[20px] font-bold text-carrot">
                Rp 300.000
              </div>
            </div>
          </div>
          <div className="w-[100%] separator mt-6 mb-3" />
        </div>
        <div className="m-5 flex-[3]">
          <div className="flex justify-between">
            <div className="text-green-500 text-3xl font-semibold">
              Riwayat Belanja
            </div>
            <div className="flex items-center gap-2">
              <div>Urut Berdasarkan</div>
              <Select defaultValue={'transaksi-terbaru'}>
                <SelectTrigger className={'w-[234px] bg-white'}>
                  <SelectValue placeholder="Urut Berdasarkan" />
                </SelectTrigger>
                <SelectContent className="w-[234px]">
                  <SelectGroup>
                    <SelectItem value="transaksi-terbaru">
                      Transaksi terbaru
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <ProductHistory />
        </div>
      </div>

      <div className=" w-content px-5">
        <div className="separator my-8" />
      </div>
      <div className="flex flex-col w-content px-5">
        <div className="flex justify-between mb-6">
          <div className="text-green-500 text-3xl font-semibold">
            Rekomendasi buat kamu
          </div>
          <Link
            href="/product"
            className="text-base p-0 h-auto bg-white text-neutral-600"
          >
            Lihat Selengkapnya {'>'}
          </Link>
        </div>
        <ProductShowcase products={ProductsJSON} />
      </div>
    </main>
  );
};

export default History;
