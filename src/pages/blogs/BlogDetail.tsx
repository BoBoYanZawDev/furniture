import { useParams } from "react-router";

function BlogDetail() {
  const { postId } = useParams();
  return <div>
    Blog Detail : {postId}
  </div>;
}

export default BlogDetail;
