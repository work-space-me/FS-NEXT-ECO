'use client';
import { Button } from '@/components/ui/button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

import React from 'react';
import FormSignIn from './components/form-sign-in';

const SignInPage = () => {
  return (
    <>
      <div className="flex flex-col w-[100%] gap-3 items-center">
        <FormSignIn />
        <div>
          <div className="tracking-wider text-base text-gray-500 h-8 text-center">
            atau
          </div>
          <Button
            className={
              'bg-white border text-gray-600 font-light tracking-wider w-[275px]'
            }
          >
            <div className="w-[24px] h-[24px] relative mr-3">
              <GoogleIcon sx={{ fontSize: 40 }} />
            </div>
            Masuk dengan Google
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
          Masuk dengan Facebook
        </Button>
      </div>

      <div className="tracking-wider text-base text-gray-500 mt-12">
        Belum memiliki akun?{' '}
        <Link href={'/sign-up'}>
          <span className={'font-semibold text-river'}>Buat Akun</span>
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
