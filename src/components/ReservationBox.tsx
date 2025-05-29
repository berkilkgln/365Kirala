import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

type ReservationBoxProps = {
  selectedItem: {
    title: string;
  };
};

export default function ReservationBox({ selectedItem }: ReservationBoxProps) {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [isStartDatePickerOpen, setIsStartDatePickerOpen] = useState(false);
  const [isEndDatePickerOpen, setIsEndDatePickerOpen] = useState(false);
  const [startMonth, setStartMonth] = useState(new Date());
  const [errorStartDate, setErrorStartDate] = useState(false);
  const [errorEndDate, setErrorEndDate] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

const handleEndDateOpen = () => {
  if (!startDate) {
    setErrorStartDate(true);
    setErrorEndDate(false);  // Çıkış tarihi hatasını sıfırla
    return;
  }
  setErrorStartDate(false);
  setErrorEndDate(false);
  setIsEndDatePickerOpen(true);
};

const handleEndDateSelect = (date: Date) => {
  setEndDate(date);
  setIsEndDatePickerOpen(false);
  setErrorEndDate(false); // Hata mesajını kapat
};


  const getMinEndDate = () => {
    if (!startDate) return new Date();
    const tomorrow = new Date(startDate);
    tomorrow.setDate(startDate.getDate() + 1);
    return tomorrow;
  };

  const handleWhatsAppClick = () => {
    if (!startDate || !endDate) {
      setErrorStartDate(!startDate);
      setErrorEndDate(!endDate);
      return;
    }

    const formattedStart = startDate.toLocaleDateString();
    const formattedEnd = endDate.toLocaleDateString();
    const message = `Merhaba, ${selectedItem.title} için ${formattedStart} - ${formattedEnd} tarihleri arasında rezervasyon yapmak istiyorum.`;

    const whatsappUrl = `https://wa.me/905075717119?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (!selectedItem) return null;

  return (
    <div className="mt-10 w-full flex flex-col items-center justify-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2 text-center">
        {selectedItem.title} için Tarih Seçimi
        </h2>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
        {/* Giriş Tarihi */}
        <div className="flex-1 relative">
          <label className="block text-sm font-md text-black mb-2 text-left font-semibold">
            Giriş Tarihi
          </label>
          <div
            className="w-full p-4 rounded-xl bg-white bg-opacity-80 text-gray-800 cursor-pointer hover:bg-opacity-100 transition-all duration-200 font-semibold"
            onClick={() => setIsStartDatePickerOpen(!isStartDatePickerOpen)}
          >
            {startDate ? startDate.toLocaleDateString() : "Tarih Seçiniz"}
          </div>
          {isStartDatePickerOpen && (
            <div className="absolute z-10 mt-2 bg-white shadow-xl rounded-lg p-4">
              <DayPicker
                selected={startDate}
                onDayClick={(date) => {
                  setStartDate(date);
                  setEndDate(undefined);
                  setIsStartDatePickerOpen(false);
                  setErrorStartDate(false);
                }}
                disabled={(date) => {
                  const d = new Date(date);
                  d.setHours(0, 0, 0, 0);
                  return d < today;
                }}
                mode="single"
                month={startMonth}
                onMonthChange={setStartMonth}
              />
            </div>
          )}
          {errorStartDate && (
            <p className="text-red-600 text-sm mt-1">Lütfen giriş tarihi seçin.</p>
          )}
        </div>

        {/* Çıkış Tarihi */}
        <div className="flex-1 relative">
          <label className="block text-sm font-md text-black mb-2 text-left font-semibold">
            Çıkış Tarihi
          </label>
          <div
            className="w-full p-4 rounded-xl bg-white bg-opacity-80 text-gray-800 cursor-pointer hover:bg-opacity-100 transition-all duration-200 font-semibold"
            onClick={handleEndDateOpen}
          >
            {endDate ? endDate.toLocaleDateString() : "Tarih Seçiniz"}
          </div>
          {isEndDatePickerOpen && (
            <div className="absolute z-10 mt-2 bg-white shadow-xl rounded-lg p-4">
              <DayPicker
                selected={endDate}
                onDayClick={handleEndDateSelect}
                fromDate={getMinEndDate()}
                mode="single"
                defaultMonth={startDate || new Date()}
                disabled={(date) => {
                  if (!startDate) return true;
                  const d = new Date(date);
                  d.setHours(0, 0, 0, 0);
                  const start = new Date(startDate);
                  start.setHours(0, 0, 0, 0);
                  return d <= start;
                }}
              />
            </div>
          )}
          {errorEndDate && (
            <p className="text-red-600 text-sm mt-1">Lütfen çıkış tarihi seçin.</p>
          )}
        </div>
      </div>

      <button
        onClick={handleWhatsAppClick}
        className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-200"
      >
        Hızlı Rezervasyon Yap
      </button>
    </div>
  );
}
