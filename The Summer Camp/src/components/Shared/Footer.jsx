
import { FaFacebook, FaMailBulk, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#CAABF9] ">
      <div>
        <img src="https://rb.gy/9vv2r" className="w-12" alt="" />
        <p className=''>
         The Summer Camp <br />
          NewYork, USA
          <br />
           &copy; All right reserve for The Summer Camp
        </p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.youtube.com/@summercamp">
            {" "}
            <FaYoutube className="w-7 h-7"></FaYoutube>
          </a>

          <a href="https://www.facebook.com/summercampmusic/">
            {" "}
            <FaTwitter className="w-7 h-7"></FaTwitter>
          </a>

          <a href="https://twitter.com/SummerCampFest?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            {" "}
            <FaFacebook className="w-7 h-7"></FaFacebook>
          </a>
          <a href="mailto: contact@summercamp.com">
            {" "}
            <FaMailBulk className="w-7 h-7"></FaMailBulk>
          </a>
          <a href="tel:+888 5442-8747">
            {" "}
            <FaPhone className="w-7 h-7"></FaPhone>
          </a>
        </div>
      </div>
    </footer>
    );
};

export default Footer;