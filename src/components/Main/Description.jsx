import FotoRopa1 from "../../assets/pexels-anna-nekrashevich-8532616.jpg";

const Description = () => {
  return (
    <ul className="w-full h-full px-4 flex flex-col items-center">
      <li className="px-2">
        <div className="relative w-72 h-64">
          <img
            src={FotoRopa1}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />

          <p className="absolute bottom-0 w-full text-center font-barlow-condensed p-2">
            <div className="absolute inset-0 bg-white opacity-10 "></div>
            <button className="relative bg-black w-40 rounded-xl text-white">
              Comprar
            </button>
          </p>
        </div>
      </li>
    </ul>
  );
};

export default Description;
