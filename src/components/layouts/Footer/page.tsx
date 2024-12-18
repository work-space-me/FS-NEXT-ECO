import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Call,
  Email,
  Facebook,
  Instagram,
  LocationCity,
  Schedule,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

import LogoAppStore from '@/assets/images/app-store.png';
import LogoPlayStore from '@/assets/images/play-store.png';
import FooterIllustration from '@/assets/images/footer-illustration.png';
import footerBg from '@/assets/images/footer-bg.jpg';
import LogoVegeta from '@/assets/icons/logo-vegeta';

const Footer = () => {
  const LinkIcons = [
    { icon: <Facebook />, href: '/' },
    { icon: <Instagram />, href: '/' },
    { icon: <YouTube />, href: '/' },
    { icon: <Twitter />, href: '/' },
  ];
  const LinkContact = [
    { icon: <Call />, text: '(0341) 4323332', href: '/' },
    { icon: <Email />, text: 'hi@vegeta.test', href: '/' },
    {
      icon: <LocationCity />,
      text: 'Jl. Cendrawasin No. 10 Klojen Malang',
      href: '/',
    },
    {
      icon: <Schedule />,
      text: '10.00-18.00, Senin-Minggu',
      href: '/',
    },
  ];
  return (
    <footer className="w-full flex flex-col items-center text-black">
      {/* Newsletter Section */}
      <div
        className="w-full flex justify-center py-8 bg-cover bg-center "
        style={{ backgroundImage: `url(${footerBg.src})` }}
      >
        <div className="max-w-screen-lg w-full flex flex-col px-5 justify-center md:flex-row items-center gap-8">
          <div className="flex-1 flex flex-col gap-4 max-w-md">
            <h2 className="text-2xl font-semibold text-black">
              Dapatkan berita terbaru dari kami
            </h2>
            <p className="text-lg text-gray-600">
              Mulai berbelanja dengan{' '}
              <span className=" font-bold text-orange-500">Vegeta</span>
            </p>
            <div className="flex flex-col gap-4">
              <Input
                className="p-4 bg-white"
                type="text"
                placeholder="Masukkan alamat email"
              />
              <Input
                className="p-4 bg-white"
                type="text"
                placeholder="Masukkan nomor telepon"
              />
              <Button className="py-2 px-7 bg-carrot bg-orange-500 ">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={FooterIllustration}
              width={280}
              height={280}
              alt="Footer Illustration"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="w-full py-8 flex justify-center mx-auto">
        <div className="max-w-screen-lg w-full px-4 flex flex-wrap gap-8">
          {/* Social and Contact Section */}
          <div className="flex-1 flex flex-col gap-6">
            <LogoVegeta className="w-[166px] h-auto" />
            <div className="flex gap-4">
              {LinkIcons.map(({ icon, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="w-7 h-7 text-black"
                >
                  {icon}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-4 text-gray-600">
              {LinkContact.map(({ icon, text, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className="flex items-center gap-2"
                >
                  {icon} <span>{text}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Company Section */}
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-4 ">Perusahaan</h3>
            <div className="flex flex-col gap-3 text-gray-600">
              {[
                'Tentang Kami',
                'Service',
                'Studi Kasus',
                'Blog',
                'Contact',
              ].map((item, index) => (
                <Link
                  key={index}
                  href="/"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Account Section */}
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-4 text-black">Akun</h3>
            <div className="flex flex-col gap-3 text-gray-600">
              {[
                'Masuk',
                'Lihat Keranjang',
                'Favorit Saya',
                'Pesanan Saya',
                'Bandingkan Produk',
              ].map((item, index) => (
                <Link
                  key={index}
                  href="/"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Download Section */}
          <div className="flex-1 flex flex-col items-center gap-4">
            <h3 className="font-bold text-lg ">Download</h3>
            <Link href="/">
              <Image
                src={LogoPlayStore}
                width={135}
                height={40}
                alt="Play Store"
                className="object-cover"
              />
            </Link>
            <Link href="/">
              <Image
                src={LogoAppStore}
                width={135}
                height={40}
                alt="App Store"
                className="object-cover"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full py-4 flex flex-col items-center">
        <div className="w-full max-w-screen-lg px-4 flex justify-between items-center text-gray-600">
          <div>
            Copyright &copy; 2023{' '}
            <Link
              href="/"
              className="text-orange-500"
            >
              Vegeta
            </Link>{' '}
            All Rights Reserved
          </div>
          <div>
            Made by <span className="text-green-600">@MufidValdes</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
