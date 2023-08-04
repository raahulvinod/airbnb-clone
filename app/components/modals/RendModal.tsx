'use client';

import useRentModal from '@/app/hooks/useRentModal';
import Modal from './Modal';

const RendModal = () => {
  const rendModal = useRentModal();
  return (
    <Modal
      isOpen={rendModal.isOpen}
      onClose={rendModal.onClose}
      onSubmit={rendModal.onClose}
      actionLabel="Submit"
      title="Airbnb you home!"
    />
  );
};

export default RendModal;
