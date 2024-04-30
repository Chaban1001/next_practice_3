import { Fragment } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

type Props = {
  params: {
    id: string;
  };
};

export async function getPosts(id: string) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        next: { revalidate: 60 },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
  } finally {
    console.log('finally!');
  }
}

export default async function Post({ params: { id } }: Props) {
   const post = await getPosts(id);
   return (
     <Fragment>
       <h1>{post.title}</h1>
       <p>{post.body}</p>
     </Fragment>
   );
 }