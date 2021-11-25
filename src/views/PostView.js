import {Card} from 'semantic-ui-react';
import { useNavigate, Navigate} from 'react-router-dom';
import { selectSpecificPost } from '../features/posts/postsSelectors';
import { useSelector } from 'react-redux';
  
const PostView = () => {
    const navigate = useNavigate();    
    const post = useSelector(selectSpecificPost);
    
    if (!post) return <Navigate to='/posts' />; 
    
    return (
        <>
        <Card>
            <Card.Content>
                <Card.Header>{post.title}</Card.Header>
                <Card.Description>
                    <strong>User ID</strong>
                    <p>{post.userId}</p>
                    <strong>Post ID</strong>
                    <p>{post.id}</p>
                    <strong>Body</strong>
                    <p>{post.body}</p>
                </Card.Description>
            </Card.Content>
            </Card>
        <button onClick={()=> navigate('/posts')}>Return</button>
        </>
    );
};
  
  export default PostView;
  