import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/convite");
  };

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center gap-8 p-8">
      <div className="text-center space-y-3">
        <h1
          className="text-4xl md:text-5xl font-bold text-white tracking-wide"
          style={{ fontFamily: "Birthday3" }}
        >
          Você foi convidado!
        </h1>
        <p className="text-gray-400 text-lg">
          Clique no cartão para ver os detalhes
        </p>
      </div>

      <div className="flex items-center justify-center">
        <img
          src="/cartao.png"
          alt="Convite Layla 15 anos"
          onClick={handleClick}
          className="max-w-sm w-full cursor-pointer object-contain rounded-lg shadow-2xl animate-floating hover:scale-110 transition-transform duration-500 ease-in-out"
        />
      </div>

      <div className="text-center animate-pulse">
        <p className="text-gray-500 text-md">🌹 Toque para abrir</p>
      </div>
    </div>
  );
};

export default Home;
