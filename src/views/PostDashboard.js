import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LayoutContainer from '../components/LayoutContainer';
import { CircularProgress, } from '@mui/material';
import { deletePost, getPosts } from '../features/posts/postsThunks';
import { setSelectedPost } from '../features/posts/postsSlice';
import { selectPostsLoading, selectAllPosts } from '../features/posts/postsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../features/auth/authSelectors';
import { Card, Grid } from 'semantic-ui-react';

const PostDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loading = useSelector(selectPostsLoading);
  const isAuth = useSelector(selectIsAuthenticated);
  const allPosts = useSelector(selectAllPosts);

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  const handleSelectPost = (id) => {
    dispatch(setSelectedPost(id));
    navigate(`/posts/${id}`)
  }

  const handleDeletePost = (id) => {
    if (!isAuth) {
      navigate('/login');
    }
    dispatch(setSelectedPost(id));
    dispatch(deletePost({id}));
  }

  return (
    <LayoutContainer>
      {
        loading ?
        <>
          <h2>Loading...</h2>
          <CircularProgress />
        </>
        :
        <>
          <Grid columns={3}>
            {allPosts.map((post, i)=>{
                return(
                    <Grid.Column key={i}>
                    <Card>
                        <Card.Content>
                            <Card.Header>User ID: {post.userId}</Card.Header>
                            <Card.Description>
                                <strong>Title</strong>
                                <p>{post.title}</p>
                            </Card.Description>
                            <button onClick={() => {
                    handleSelectPost(post.id)
                  }}>
                    More Info
                  </button>

                  <button onClick={() => {
                    handleDeletePost(post.id)
                  }}>
                    Remove
                  </button>
                        </Card.Content>    
                    </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
        </>
      }
    </LayoutContainer>
  );
};

export default PostDashboard;