import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import styles from '../../styles/BlogPost.module.css';

function slug() {

  const [blog, setblog] = useState([]);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    console.log("routerisReady", !router.isReady);
    if(!router.isReady) return;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a) => {
      return a.json();
    }).then((parsed) => {
      setblog(parsed)
    })
  }, [router.isReady])


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

export default slug;