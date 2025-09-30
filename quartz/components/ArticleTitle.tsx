import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (title) {
    return <h1 class={classNames(displayClass, "article-title")}>{title}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}

/* 모바일에서 제목 가운데 정렬 */
@media (max-width: 800px) {
  .article-title {
    text-align: center;
    margin: 1rem 0 0 0;
  }
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
