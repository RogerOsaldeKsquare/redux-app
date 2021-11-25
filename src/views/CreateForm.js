import { Button, TextField, CircularProgress } from "@mui/material";
import LayoutContainer from '../components/LayoutContainer';
import { postPosts } from '../features/posts/postsThunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectAddPostsLoading, selectIsAdded } from "../features/posts/postsSelectors";
import { setIsAdded } from "../features/posts/postsSlice";
import { useState } from "react";
import { useNavigate } from "react-router";


export default function CreateForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector(selectAddPostsLoading);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const isAdded = useSelector(selectIsAdded);

    const handleTitleChange = (event) => {
        setPostTitle(event.target.value);
    };

    const handleBodyChange = (event) => {
        setPostBody(event.target.value);
    };

    const handleCreate = (event) => {
        event.preventDefault();
        dispatch(postPosts({title: postTitle, body: postBody, userId: 1 }));
    };

    const isValidCreate = () => {
        return postTitle?.length && postBody?.length;
    };
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
                <h1>Create a New Post</h1>
                <form onSubmit={handleCreate}>
                <div>
                    <TextField
                    label="Title"
                    placeholder="e.g.: dolorem dolore est ipsam"
                    type="text"
                    name="title"
                    multiline
                    maxRows={2}
                    sx={{width: '50vw'}}
                    required
                    value={postTitle}
                    onChange={handleTitleChange}
                    fullWidth
                    variant="outlined"
                    ></TextField>
                    <div className={"Title"}></div>
                    <TextField
                    label="Body"
                    placeholder="quia et suscipit suscipit recusandae consequuntur expedita..."
                    type="text"
                    name="body"
                    multiline
                    rows={4}
                    required
                    value={postBody}
                    onChange={handleBodyChange}
                    fullWidth
                    variant="outlined"
                    ></TextField>
                </div>

                <div>
                    <div>
                    <Button
                        type="submit"
                        disabled={!isValidCreate()}
                        fullWidth
                        variant="contained"
                    >
                        ADD
                    </Button>
                    </div>
                </div>
                </form>
                </>
            }  
            {
                isAdded ?
                <>
                {dispatch(setIsAdded())}
                {navigate('/posts')}
                </>
                :
                <></>
            }    
        </LayoutContainer>
    )
}