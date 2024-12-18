import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeClosed } from 'lucide-react';
import { redirect } from 'next/navigation';
import { useState } from 'react';

const FormSignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = () => {
    redirect('/');
  };
  const handleShow = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form className="flex flex-col w-[300px]  gap-4 items-center">
      <div className="w-full  text-3xl font-semibold tracking-widest mb-2 text-center">
        Masuk akun anda
      </div>
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

      <Button
        type="submit"
        className={'w-[320px] bg-leaf mt-6'}
        onClick={handleSubmit}
      >
        Masuk
      </Button>
    </form>
  );
};

export default FormSignIn;
