import styles from "../styles/Layout.module.css";
import ArticleList from "../components/ArticleList";
import server from "../config/index";


function Home({articles}) {

  return (
    <div>
      <h1>Home</h1>
      <ArticleList articles={articles} />
    </div>
  );
}


export const getStaticProps = async () => {

  const res = await fetch(`${server}/api/article`);
  const articles = await res.json();

  return {
    props: {
      articles
    },
  }
  
}

export default Home;