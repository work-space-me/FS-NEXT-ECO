'use client';

import Image from 'next/image';
import Link from 'next/link';
import ImageBanner from '@/assets/images/image-banner.png';
import products from '@/assets/json/products.json';
import { ProductCard } from './product/components/product-card';
import ProductCategoryJSON from '@/assets/json/product-category.json';
import ProductCategory from './product/components/product-categpry';

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen items-center pb-8">
      <div className="max-w-screen-lg">
        {/* Banner Section */}
        <Image
          src={ImageBanner}
          alt="Banner"
          className="object-cover py-8 w-full"
        />

        {/* Featured Products Section */}
        <section className="flex flex-col">
          <header className="flex justify-between mb-6">
            <h2 className="text-leaf text-3xl font-semibold text-green-600">
              Produk Unggulan
            </h2>
            <Link
              href="/product"
              className="text-base text-neutral-600"
            >
              Lihat Selengkapnya {'>'}
            </Link>
          </header>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products?.map((product, index) => (
              <Link
                key={`productCard${index}`}
                href={`/product/detail/${index}`}
              >
                <ProductCard details={product} />
              </Link>
            ))}
          </div>
        </section>

        {/* Products by Category Section */}
        <section className="mt-8">
          <h2 className="text-leaf text-3xl font-semibold text-green-600">
            Produk berdasarkan kategori
          </h2>
          <div className="mt-4 grid grid-cols-3 gap-6">
            {ProductCategoryJSON.map((category) => (
              <ProductCategory
                key={`productCategory${category.id}`}
                id={category.id}
                title={category.title}
                icon={category.icon}
                color={category.color}
              />
            ))}
          </div>
        </section>

        {/* About Us Section */}
        <section className="mt-8">
          <h2 className="text-leaf text-3xl font-semibold text-green-600">
            Tentang Kami
          </h2>
          <div className="mt-6 space-y-6 text-gray-400 text-justify">
            <p>
              Selamat datang di Vegeta, destinasi terbaik untuk aneka sayuran
              dan buah segar siap kirim ke seluruh Indonesia! Kami dengan bangga
              mempersembahkan diri sebagai tim yang berdedikasi untuk memberikan
              kualitas terbaik dan pilihan yang beragam untuk kebutuhan sayuran
              dan buah segar Anda.
            </p>
            <p>
              Kami berusaha untuk selalu memberikan pelayanan terbaik kepada
              pelanggan kami. Tim kami selalu siap membantu Anda dalam memilih
              aneka sayuran dan buah yang sesuai dengan kebutuhan dan preferensi
              Anda. Dengan sistem pengiriman yang efisien, produk-produk segar
              dari Vegeta akan tiba di depan pintu Anda dalam kondisi prima,
              siap untuk melengkapi hidangan sehat dan lezat Anda.
            </p>
            <p>
              Terima kasih atas kepercayaan Anda pada kami. Kami berharap Anda
              menikmati pengalaman berbelanja di situs kami dan menemukan
              produk-produk berkualitas tinggi yang akan melengkapi kehidupan
              sehat dan bahagia Anda. Jangan ragu untuk menghubungi tim kami
              jika Anda memerlukan bantuan atau memiliki pertanyaan. Bersama,
              mari kita jaga kesehatan dan kelezatan hidup dengan produk-produk
              berkualitas dari kami.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
