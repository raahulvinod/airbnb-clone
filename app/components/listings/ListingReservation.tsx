'use client';

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: any) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disableDates: Date[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  dateRange,
  totalPrice,
  onChangeDate,
  onSubmit,
  disabled,
  disableDates,
}) => {
  return <div>ListingReservation</div>;
};

export default ListingReservation;
