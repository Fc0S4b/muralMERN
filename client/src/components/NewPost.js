import moment from 'moment';

const NewPost = ({ headline, createdAt }) => {
  let date = moment(createdAt);
  date = date.format('MMM Do, YYYY');
  return (
    <div>
      <h5>{headline}</h5>
      <h5>{date}</h5>
    </div>
  );
};
export default NewPost;
