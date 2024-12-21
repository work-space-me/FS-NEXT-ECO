import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Message } from '@mui/icons-material';
import { Bell, Heart, Settings, ShoppingCartIcon } from 'lucide-react';
import Link from 'next/link';
import LogoVegeta from '@/assets/icons/logo-vegeta';
const Header = () => {
  const isLoggedIn = true;

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/', label: 'Tentang Kami' },
    { href: '/product', label: 'Produk' },
    { href: '/', label: 'Belanja' },
  ];

  const renderNavLinks = () =>
    navLinks.map((link, index) => (
      <NavigationMenuItem key={index}>
        <Link
          href={link.href}
          legacyBehavior
        >
          <NavigationMenuLink className="font-normal">
            {link.label}
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    ));

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex w-full max-w-screen-xl py-4 items-center justify-between px-4">
        <LogoVegeta className="w-auto h-7 " />
        <NavigationMenu>
          <NavigationMenuList className="gap-5">
            {renderNavLinks()}
          </NavigationMenuList>
        </NavigationMenu>

        {isLoggedIn ? (
          <div className="flex gap-4 items-center">
            <Badge variant={'secondary'}>
              <Message />
            </Badge>
            <Badge variant={'secondary'}>
              <Bell />
            </Badge>
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden relative">
              {/* Add user avatar image if available */}
            </div>
            <div className="flex flex-col w-[127px]">
              <span className="text-xs">Hi, Apa Kabar?</span>
              <span className="text-sm font-semibold">
                Muhamad Mufid Bachri
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Settings />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/history">History Transactions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/auth/signin">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex gap-4">
            <Button className="py-1 px-6 bg-green-500">Daftar Sekarang</Button>
            <Button className="py-1 px-6 bg-orange-500">Masuk Akun</Button>
          </div>
        )}
      </div>

      <div className="border-t w-full" />

      <div className="flex w-full max-w-screen-xl py-3 items-center justify-between px-4">
        <div className="flex items-center">
          <Select defaultValue="semua-kategori">
            <SelectTrigger className="w-44 rounded-tr-none rounded-br-none">
              <SelectValue placeholder="Pilih Kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="semua-kategori">Semua Kategori</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            className="w-72 rounded-tl-none rounded-bl-none"
            type="text"
            placeholder="Pencarian ..."
          />
        </div>

        <div className="flex gap-4">
          <Link
            href="/product"
            className="flex items-center text-gray-600"
          >
            <Badge
              variant={'secondary'}
              className="p-4"
            >
              <Heart
                className="w-5 h-5"
                stroke="green"
              />
            </Badge>
            <span className="pl-2">Favorit</span>
          </Link>
          <Link
            href="/checkout"
            className="flex items-center text-gray-600"
          >
            <Badge
              variant={'secondary'}
              className="p-4"
            >
              <ShoppingCartIcon
                className="w-5 h-5"
                stroke="green"
              />
            </Badge>
            <span className="pl-2">Keranjang</span>
          </Link>
        </div>
      </div>

      <div className="border-t w-full" />
    </div>
  );
};

export default Header;
