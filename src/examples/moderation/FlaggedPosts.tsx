import { useEffect, useState } from "react";
import type { Post } from "../../types/moderation/post";
import { fetchData } from "../../api/moderation/posts";

const BANNED_WORDS = ["crypto", "giveaway", "rage bait"];

const getFlaggedPosts = (posts: Post[], keywords: string[]): Post[] => {
  const flaggedPosts = posts.filter((pst: Post) => {
    const postContent = pst.content.toLowerCase();
    return keywords.some((kw) => postContent.includes(kw));
  });

  return flaggedPosts;
};

const FlaggedPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(2000).then((data) => {
      const flagged = getFlaggedPosts(data, BANNED_WORDS);
      setPosts(flagged);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading posts...</p>;

  return (
    <div>
      <h2>Total number of flagged posts: {posts.length}</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.author}</strong> <br />"{post.content}"
            </li>
          ))}
        </ul>
      ) : (
        "No flagged posts"
      )}
    </div>
  );
};

export default FlaggedPosts;
