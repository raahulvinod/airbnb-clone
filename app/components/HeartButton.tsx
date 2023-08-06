'use client';

import { SafeUser } from '../types';

interface HeartButonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButonProps> = ({ listingId, currentUser }) => {
  const hasFavourite = false;
  const toggleFavourite = () => {};
  return <div>HeartButton</div>;
};

export default HeartButton;
