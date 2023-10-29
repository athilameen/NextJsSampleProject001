import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import server from "../../../config/index"

const Article = ({article}) => {

    //const router = useRouter();
    //const {id} = router.query;

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br /><br /><br />
            <p><Link href="/">Back</Link></p>
        </div>
    )
}

/*export const getServerSideProps = async (context) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();

    return {
        props:{
            article
        }
    }

}*/

export const getStaticProps = async (context) => {

    //const res = await fetch(`${server}/api/article/${context.params.id}`);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();

    return{
        props : {
            article
        }
    }

}

export const getStaticPaths = async (context) => {

    //const res = await fetch(`${server}/api/article`);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const articles = await res.json();
    
    const ids = articles.map((article) => article.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
    return {
        paths,
        fallback: false,
    }

}

export default Article