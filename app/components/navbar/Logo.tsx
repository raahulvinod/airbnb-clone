'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  return (
    <div>
      <Image
        onClick={() => router.push('/')}
        src="/images/logo.png"
        alt="logo"
        className="hidden md:block cursor-pointer"
        height="100"
        width="100"
      />
    </div>
  );
};

export default Logo;
