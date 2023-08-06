'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Heading from './Heading';

interface EmptyState {
  title?: string;
  subtitle?: string;
  showRest?: boolean;
}

const EmptyState: React.FC<EmptyState> = ({
  title = 'No exact matches',
  subtitle = 'Try changing or removing some of your filters',
  showRest,
}) => {
  const router = useRouter();
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subTitle={subtitle} center />
    </div>
  );
};

export default EmptyState;
