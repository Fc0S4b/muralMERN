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
          <NewInfo icon={<BiNews />} text={newType} />
          <NewInfo icon={<GrLocation />} text={newLocation} />
          <div className={`status ${status} `}>{status}</div>
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
          <p>{newText}</p>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div className="properties">
          <NewInfo icon={<BiNews />} text={'Tipo de información'} />
          <NewInfo icon={<GrLocation />} text={'Ubicación que deseas'} />
          <div className={`status `}>{'Estado de tu publicación'}</div>
        </div>
        <header>
          <h1>{'Titular'}</h1>
          <NewInfo
            icon={<BsFillCalendarWeekFill />}
            className="date"
            text={'Fecha de tu publicación'}
          />
        </header>
        <div className="content">
          <h4>{'Describe en pocas palabras tu noticia'}</h4>
          <p>{'Detalla el contenido de tu publicación'}</p>
        </div>
      </Wrapper>
    );
  }
};

export default SinglePost;
