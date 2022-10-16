import { NewsContainer, SearchContainer } from '../../components';
import useTitle from '../../utils/useTitle';

const AllNews = () => {
  useTitle('Publicaciones');
  return (
    <>
      <SearchContainer />
      <NewsContainer />
    </>
  );
};
export default AllNews;
