import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import Loading from './Loading';
import NewPost from './NewPost';
import Wrapper from '../assets/wrappers/NewsContainer';

const NewsContainer = () => {
  const { getNews, news, isLoading, page, totalNews } = useAppContext();
  useEffect(() => {
    getNews();
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  if (news.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display</h2>
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
    </Wrapper>
  );
};
export default NewsContainer;