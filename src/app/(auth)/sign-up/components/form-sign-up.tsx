import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeClosed } from 'lucide-react';
import { redirect } from 'next/navigation';
import { useState } from 'react';

const FormSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const handleSubmit = () => {
    redirect('/');
  };
  const handleConfirm = () => {
    setConfirmPassword(!confirmPassword);
  };
  const handleShow = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form className="flex flex-col w-[300px]  gap-2 items-center mt-4">
      <div className="w-full  text-3xl font-semibold tracking-widest mb-2 text-center">
        Daftar akun anda
      </div>
      <Input
        className="w-full p-[12px_20px]  rounded-sm"
        type="text"
        id="name"
        name="name"
        placeholder="Nama Lengkap"
      />
      <Input
        className="w-full p-[12px_20px]  rounded-sm"
        type="text"
        id="email"
        name="email"
        placeholder="Email"
      />
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="kata Sandi"
        />
        {showPassword ? (
          <Eye onClick={handleShow} />
        ) : (
          <EyeClosed onClick={handleShow} />
        )}
      </div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type={confirmPassword ? 'text' : 'password'}
          placeholder="konfirmasi Kata Sandi"
        />
        {confirmPassword ? (
          <Eye onClick={handleConfirm} />
        ) : (
          <EyeClosed onClick={handleConfirm} />
        )}
      </div>

      <Button
        type="submit"
        className={'w-[320px] text-base text-gray-500  mt-6'}
        onClick={handleSubmit}
      >
        Daftar
      </Button>
    </form>
  );
};

export default FormSignUp;
