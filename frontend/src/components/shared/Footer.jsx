import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";
import mainLogo from "../../assets/main-icon.png";

function Footer() {
  return (
    <footer className="bg-[#2b2b2b] text-gray-400 text-sm  ">
      <div className="border-t border-gray-600 w-full " />
      <div className="flex flex-col items-center py-6">
        <img src={mainLogo} alt="logo" className="w-28 mb-4" />

        <div className="flex space-x-4 mb-4">
          <FaFacebookF className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
          <FaTwitter className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
          <FaInstagram className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
          <FaYoutube className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
          <FaPinterestP className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
          <FaLinkedinIn className="w-8 h-8 p-2 rounded-full bg-gray-700 text-white" />
        </div>
        <div className="text-center text-xs px-4 max-w-4xl">
          <p className="text-sm">© 2025 Ticketmaster. Todos los derechos reservados.</p>
          <small>
            El contenido de este sitio web, incluyendo textos, gráficos,
            logotipos, imágenes y software, es pertenecen a sus respectivos
            propietarios. tiene como objetivo promocionar eventos y actividades,
            no tine respaldo del artists o eventos mencionados. Todas las marcas
            comerciales y derechos de autor son propiedad de sus respectivos
            dueños.
          </small>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
