'use client';

interface ReservationButtonProps {
  title: string;
}

export default function ReservationButton({ title }: ReservationButtonProps) {
  const handleReservation = () => {
    window.location.href = `mailto:info@365kirala.com?subject=Transfer Rezervasyon: ${title}`;
  };

  return (
    <button
      className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
      onClick={handleReservation}
    >
      Rezervasyon Yap
    </button>
  );
} 