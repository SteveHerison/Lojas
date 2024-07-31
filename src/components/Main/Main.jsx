import FotoPrincipal from "../../assets/pexels-n-voitkevich-4641825.jpg";
import Description from "./Description";

const Main = () => {
  return (
    <div className="w-full h-full">
      <img
        src={FotoPrincipal}
        alt="Foto Principal"
        className="w-full h-52 object-cover"
      />
      <p className="p-2 text-center my-5 roun bg-black text-white font-barlow-condensed">
        Roupas Test
      </p>
      <Description />
    </div>
  );
};

export default Main;
