import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import NewPost from './NewPost';
import Wrapper from '../assets/wrappers/NewsContainer';
import PageBtnContainer from './PageBtnContainer';

const NewsContainer = () => {
  const {
    getNews,
    news,
    isLoading,
    page,
    totalNews,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
    searchFavorite,
    favorite,
  } = useAppContext();
  useEffect(() => {
    getNews();
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort, searchFavorite, favorite]);
  if (isLoading) {
    return <Loading center />;
  }
  if (news.length === 0) {
    return (
      <Wrapper>
        <h2>No hay noticias para mostrar</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h3>
        {totalNews} Publicaci{(news.length > 1 && 'ones') || 'ón'} encontrada
        {news.length > 1 && 's'}
      </h3>
      <div className="news">
        {news.map((singleNew) => {
          return <NewPost key={singleNew._id} {...singleNew} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
export default NewsContainer;
