'use client';
import { Button } from '@/components/ui/button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <>
      <div className="flex flex-col w-[100%] gap-4 items-center">
        <div className="tracking-wider text-base text-gray-500">
          <div className="text-center h-9">atau</div>
          <Button
            className={
              'bg-white border text-gray-600 font-light tracking-wider w-[275px]'
            }
          >
            <div className="w-[24px] h-[24px] relative mr-3">
              <GoogleIcon sx={{ fontSize: 40 }} />
            </div>
            Daftar dengan Google
          </Button>
        </div>
        <Button
          className={
            'bg-white border text-gray-500 font-light tracking-wider w-[275px]'
          }
        >
          <div className="w-[24px] h-[24px] relative mr-3">
            <FacebookIcon sx={{ fontSize: 40 }} />
          </div>
          Daftar dengan Facebook
        </Button>
      </div>

      <div className="tracking-wider text-base text-gray-500 mt-12">
        Sudah memiliki akun?{' '}
        <Link href={'/sign-in'}>
          <span className={'font-semibold text-river'}>Masuk</span>
        </Link>
      </div>
    </>
  );
};

export default page;
