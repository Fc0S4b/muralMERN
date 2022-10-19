import {
  BsWhatsapp,
  BsFacebook,
  BsReddit,
  BsTwitter,
  BsLinkedin,
} from 'react-icons/bs';
import { Link } from 'react-router-dom';
const ShareLinks = ({ newText }) => {
  const openInNewTab = (url) => {
    // use encodeURIComponent
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  return (
    <>
      <Link
        to="#wsp"
        onClick={() => openInNewTab(`https://wa.me/?text=${newText}`)}
        className="btn share-btn"
      >
        <BsWhatsapp />
      </Link>
      <Link
        to="#facebook"
        onClick={() =>
          openInNewTab(
            `https://www.facebook.com/sharer/sharer.php?t=${newText}`
          )
        }
        className="btn share-btn"
      >
        <BsFacebook />
      </Link>
      <Link
        to="#reddit"
        onClick={() => openInNewTab(`https://reddit.com/submit?title=hola`)}
        className="btn share-btn"
      >
        <BsReddit />
      </Link>
      <Link
        to="#twitter"
        onClick={() =>
          openInNewTab(`https://twitter.com/intent/tweet?text=${newText}`)
        }
        className="btn share-btn"
      >
        <BsTwitter />
      </Link>
      <Link
        to="#linkedin"
        onClick={() =>
          openInNewTab(
            `https://www.linkedin.com/shareArticle?mini=true&title=${newText}`
          )
        }
        className="btn share-btn"
      >
        <BsLinkedin />
      </Link>
    </>
  );
};
export default ShareLinks;
