import Link from 'next/link';
import styles from '@/app/page.module.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

export const getPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      next: { revalidate: 60 },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
  } finally {
    console.log('finally!');
  }
};

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div>
      <ol style={{ display: 'flex', flexDirection: 'column' }}>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link className={styles.Link} href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
