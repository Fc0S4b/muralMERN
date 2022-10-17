import Wrapper from '../../assets/wrappers/SinglePost';
import { ShareLinks, NewInfo } from '../../components';
import { GrLocation } from 'react-icons/gr';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { BiNews } from 'react-icons/bi';
import { useAppContext } from '../../context/appContext';
import moment from 'moment';
const SinglePost = () => {
  const {
    headline,
    description,
    newLocation,
    newType,
    status,
    newText,
    createdAt,
  } = useAppContext();
  let date = moment(createdAt);
  date = date.format('LLLL');

  return (
    <Wrapper>
      <div className="properties">
        <NewInfo icon={<BiNews />} text={newType} />
        <NewInfo icon={<GrLocation />} text={newLocation} />
        <div className={`status `}>{status}</div>
      </div>
      <header>
        <h1>{headline}</h1>
        <NewInfo
          icon={<BsFillCalendarWeekFill />}
          className="date"
          text={date}
        />
      </header>
      <div className="content">
        <h4>{description}</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          minima ea aliquid ducimus vero perspiciatis hic nihil ex voluptatem
          labore!
        </p>
      </div>
      <div className="share-links">
        <h3>Compartida en:</h3>
        <ShareLinks />
      </div>
    </Wrapper>
  );
};

export default SinglePost;
