import React , {useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../comments/Comments';

const PostDetail = () => {
    const {id}= useParams();
    const [post,setPost]= useState({});
    const [comments,setComments]= useState([]);
    useEffect(() => {
       const url =`https://jsonplaceholder.typicode.com/posts/${id}`;
       fetch(url)
       .then(res => res.json())
       .then(data => setPost(data));
    }, [])
     
    useEffect(()=>{
     const url =`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
     fetch(url)
     .then(res => res.json())
     .then(data => setComments(data));
    },[])

    return (
        <div>
            <h3>{id}</h3>
            <p>user posted : {post.id}</p>
            <p>title:{post.title}</p>
            <p>{post.body}</p>
            <p>number of comments : {comments.length}</p>
            {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }
        
        </div>
    );
};

export default PostDetail;