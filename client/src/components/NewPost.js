import moment from 'moment';
import Wrapper from '../assets/wrappers/NewPost';
import { GrLocation } from 'react-icons/gr';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { BiNews } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import NewInfo from './NewInfo';
import ShareLinks from './ShareLinks';
const NewPost = ({
  _id,
  headline,
  description,
  newLocation,
  newType,
  createdAt,
  status,
}) => {
  const { setEditNew, deleteNew } = useAppContext();
  let date = moment(createdAt);
  date = date.format('MMM Do, YYYY');
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{headline.charAt(0)}</div>
        <div className="info">
          <h4>{headline}</h4>
          <p>{description}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <NewInfo icon={<GrLocation />} text={newLocation} />
          <NewInfo icon={<BsFillCalendarWeekFill />} text={date} />
          <NewInfo icon={<BiNews />} text={newType} />
          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions-container">
            <div className="actions">
              <Link
                to="/add-new"
                onClick={() => setEditNew(_id)}
                className="btn edit-btn"
              >
                Editar
              </Link>
              <button
                type="button"
                className="btn delete-btn"
                onClick={() => deleteNew(_id)}
              >
                Eliminar
              </button>
            </div>
            <div className="share-links">
              <ShareLinks />
            </div>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default NewPost;