import Link from "next/link"
import articleStyles from "../styles/Article.module.css"

const ArticleItem = ({article}) => {
   
  return (
    <div className={articleStyles.card}>
        <Link href={`/article/${article.id}`}>
            <h3>{article.title}</h3>
            <p>{article.body}</p>
        </Link>
    </div>
  )
}

export default ArticleItem