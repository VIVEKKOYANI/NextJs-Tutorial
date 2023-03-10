import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import styles from '@/styles/Blog.module.css'

function blog(props) {

  // const [blogs, setblogs] = useState([]);
  const [blogs, setblogs] = useState(props.allBlogs);
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/blogs').then((a) => {
  //     return a.json();
  //   }).then((parsed) => {
  //     setblogs(parsed)
  //   })
  // }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return (
            <div className="blogItem" key={blogItem.slug}>
              <Link href={`/blogpost/${blogItem.slug}`} >
              <h1 className={styles.blogitem3}>{blogItem.title}</h1>
              </Link>
              <p className={styles.blogitemp}>{blogItem.content.substr(0,140)}...</p>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export async function getServerSideProps(){
  let data = await fetch('http://localhost:3000/api/blogs')
  let allBlogs = await data.json()

  return{
    props: {allBlogs},
  }
}

export default blog