import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import ItemList from './component/itemList';

const CheckoutPage = () => {
  return (
    <main className="flex flex-col max-w-screen-lg mx-auto items-center pb-16 pt-5">
      <div className="w-[calc(100%-10%)] flex gap-8 ">
        <div className="w-full flex flex-col gap-8 ">
          <ItemList />

          <div className="separator" />

          {/* <DeliveryOptions /> */}
        </div>

        <div className="w-full h-auto">
          <div className="flex flex-col gap-3 border p-3 rounded-xl ">
            <div className="text-lg font-semibold">Ringkasan Belanja</div>
            <div className="font-semibold">Total Belanja</div>
            <div className="flex justify-between">
              <div>Total Harga barang</div>
              <div>Rp </div>
            </div>

            {/* {deliveryMethod === "HOME_DELIVERY" && (
                <>
                  <div className="flex justify-between">
                    <div>Total Ongkos Kirim</div>
                    <div>Rp {formatNumber(deliveryFee)}</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Asuransi Pengiriman</div>
                    <div>Rp {formatNumber(insurance)}</div>
                  </div>
                </>
              )} */}

            <div className="w-full separator" />
            <div className="font-semibold">Biaya Transaksi</div>
            <div className="flex justify-between">
              <div>Biaya Jasa Aplikasi</div>
              <div>Rp. 100000</div>
            </div>

            <div className="w-full separator" />
            <div className="flex justify-between">
              <div className="text-lg font-semibold">Total Tagihan</div>
              <div className="text-lg font-semibold">Rp 10.000</div>
            </div>
          </div>
          <div className="flex flex-1">
            <Link
              className="w-[100%]"
              href={'/payment'}
            >
              <Button className={'w-[100%] mt-6 bg-green-600'}>
                Lanjutkan Pembayaran
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CheckoutPage;
