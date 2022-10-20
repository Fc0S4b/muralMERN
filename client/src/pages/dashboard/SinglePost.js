import Wrapper from '../../assets/wrappers/SinglePost';
import { ShareLinks, NewInfo } from '../../components';
import { GrLocation } from 'react-icons/gr';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { BiNews } from 'react-icons/bi';
import moment from 'moment';
import 'moment/locale/es';
const SinglePost = () => {
  const oneNew = localStorage.getItem('singleNew');
  if (oneNew) {
    const {
      headline,
      description,
      newLocation,
      newType,
      status,
      createdAt,
      newText,
    } = JSON.parse(oneNew);

    moment.locale('es');
    let date = moment(createdAt);
    date = date.format('LLLL');

    return (
      <Wrapper>
        <div className="properties">
          <NewInfo icon={<BiNews />} text={newType || 'tipo de información'} />
          <NewInfo icon={<GrLocation />} text={newLocation || 'ubicación'} />
          <div className={`status `}>{status || 'estado'}</div>
        </div>
        <header>
          <h1>{headline || 'titular'}</h1>
          <NewInfo
            icon={<BsFillCalendarWeekFill />}
            className="date"
            text={date || 'fecha'}
          />
        </header>
        <div className="content">
          <h4>{description || 'descripción'}</h4>
          <p>{newText || 'contenido de la publicación'}</p>
        </div>
        <div className="share-links">
          <h3>Compartida en:</h3>
          <ShareLinks />
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="properties">
          <NewInfo icon={<BiNews />} text={'tipo de información'} />
          <NewInfo icon={<GrLocation />} text={'ubicación'} />
          <div className={`status `}>{'estado'}</div>
        </div>
        <header>
          <h1>{'titular'}</h1>
          <NewInfo
            icon={<BsFillCalendarWeekFill />}
            className="date"
            text={'fecha'}
          />
        </header>
        <div className="content">
          <h4>{'descripción'}</h4>
          <p>{'contenido de la publicación'}</p>
        </div>
        <div className="share-links">
          <h3>Compartida en:</h3>
          <ShareLinks />
        </div>
      </Wrapper>
    );
  }
};

export default SinglePost;
