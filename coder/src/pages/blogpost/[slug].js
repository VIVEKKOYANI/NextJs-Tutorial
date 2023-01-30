import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css';

function slug(props) {

  const [blog, setblog] = useState(props.myBlog);
  const router = useRouter();

  // useEffect(() => {
  //   console.log("routerisReady", !router.isReady);
  //   if(!router.isReady) return;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
  //     return a.json();
  //   }).then((parsed) => {
  //     setblog(parsed)
  //   })
  // }, [router.isReady])


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog.title}</h1>
        <hr />
        <div>
          {blog.content}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  const { slug } = router.query;

  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  let myBlog = await data.json()

  return{
    props: {myBlog},
  }
}

export default slug;