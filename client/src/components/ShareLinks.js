import {
  BsWhatsapp,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
const ShareLinks = () => {
  return (
    <>
      <Link
        to="#wsp"
        onClick={() => console.log('share on wsp')}
        className="btn share-btn"
      >
        <BsWhatsapp />
      </Link>
      <Link
        to="#wsp"
        onClick={() => console.log('share on fb')}
        className="btn share-btn"
      >
        <BsFacebook />
      </Link>
      <Link
        to="#wsp"
        onClick={() => console.log('share on instagram')}
        className="btn share-btn"
      >
        <BsInstagram />
      </Link>
      <Link
        to="#wsp"
        onClick={() => console.log('share on twitter')}
        className="btn share-btn"
      >
        <BsTwitter />
      </Link>
      <Link
        to="#wsp"
        onClick={() => console.log('share on linkedin')}
        className="btn share-btn"
      >
        <BsLinkedin />
      </Link>
    </>
  );
};
export default ShareLinks;
