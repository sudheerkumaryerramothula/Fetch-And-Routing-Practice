import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData
  return (
    <Link to={`/blogs/${id}`} className="link-item">
      <div className="blog-item">
        <div className="image-container">
          <img src={imageUrl} className="image" alt={`item${id}`} />
        </div>
        <div className="content-container">
          <p className="topic">{topic}</p>
          <p className="title">{title}</p>
          <div className="author-container">
            <img src={avatarUrl} className="avatar" alt={`avatar${id}`} />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
