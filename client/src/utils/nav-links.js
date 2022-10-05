import { MdQueryStats } from 'react-icons/md';
import { BiNews } from 'react-icons/bi';
import { IoAddCircleOutline } from 'react-icons/io5';
import { AiOutlineStar } from 'react-icons/ai';
const links = [
  {
    id: 1,
    text: 'Estadísticas',
    path: '/',
    icon: <MdQueryStats />,
  },
  {
    id: 2,
    text: 'Noticias',
    path: 'all-news',
    icon: <BiNews />,
  },
  {
    id: 3,
    text: 'Agregar noticia',
    path: 'add-new',
    icon: <IoAddCircleOutline />,
  },
  {
    id: 4,
    text: 'Favoritos',
    path: 'favorite',
    icon: <AiOutlineStar />,
  },
];

export default links;
