import { useState, useEffect } from "react";

const Invite = () => {
  const targetDate = new Date("2025-12-21T17:00:00").getTime();
  const [countDown, setCountDown] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const getReturnValues = (countDown) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
  };

  const { days, hours, minutes } = getReturnValues(countDown);

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl min-h-screen bg-white flex flex-col items-center justify-center gap-8 p-8 relative overflow-hidden">
        <h1
          className="text-6xl font-bold text-black"
          style={{ fontFamily: "Birthday3" }}
        >
          Layla
        </h1>

        <div className="text-center">
          <p
            className="text-5xl font text-red-800"
            style={{ fontFamily: "Birthday" }}
          >
            Birthday
          </p>
        </div>

        <div className="w-full h-px bg-red-800"></div>

        <div className="flex gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-red-800">
              {String(days).padStart(2, "0")}
            </span>
            <span className="text-sm text-gray-600">dias</span>
          </div>
          <span className="text-4xl font-bold text-red-800">:</span>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-red-800">
              {String(hours).padStart(2, "0")}
            </span>
            <span className="text-sm text-gray-600">horas</span>
          </div>
          <span className="text-4xl font-bold text-red-800">:</span>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-red-800">
              {String(minutes).padStart(2, "0")}
            </span>
            <span className="text-sm text-gray-600">minutos</span>
          </div>
        </div>

        <div className="w-full h-px bg-red-800"></div>

        <div className="text-center space-y-4">
          <div>
            <p className="text-md text-red-800 uppercase">Data</p>
            <p className="text-2xl font-semibold text-black">21 de Dezembro</p>
          </div>

          <div>
            <p className="text-md text-red-800 uppercase">Horário</p>
            <p className="text-2xl font-semibold text-black">17:00 horas</p>
          </div>

          <div>
            <p className="text-md text-red-800 uppercase">Local</p>
            <p className="text-2xl font-semibold text-black">
              Escritório Gastro Bar
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-red-800"></div>

        <p
          className="text-center text-gray-600 text-xl italic"
          style={{ fontFamily: "padrao" }}
        >
          Sua presença é muito importante para mim!
        </p>
      </div>
    </div>
  );
};

export default Invite;
