'use client';

import Image from 'next/image';

interface AvatarProps {
  src: string | null | undefined;
}
const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      src={src || '/images/placeholder.jpg'}
      height="30"
      width="30"
      alt="Avatar"
      className="rounded-full"
    />
  );
};

export default Avatar;
