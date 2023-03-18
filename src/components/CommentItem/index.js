import './index.css'

const CommentItem = props => {
  const {commentDetails, deleteComment, changeLikeImg} = props
  const {name, comment, id, initialClassName, isLiked, date} = commentDetails
  const likedImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const deleteUrl =
    'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png'

  const colorOfLikeText = isLiked ? 'like' : 'noLike'
  const onDeleteComment = () => {
    deleteComment(id)
  }

  const onChangeLikeImg = () => {
    changeLikeImg(id)
  }

  return (
    <li className="list-item">
      <div className="comment-header">
        <p className={initialClassName}>{name[0]}</p>
        <p className="name">{name}</p>
        <p className="time">{date}</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="comment-footer">
        <img src={likedImage} className="img" alt="like" />
        <button
          type="button"
          className={colorOfLikeText}
          onClick={onChangeLikeImg}
        >
          Like
        </button>

        <button
          type="button"
          className="buttton"
          data-testid="delete"
          onClick={onDeleteComment}
        >
          <img src={deleteUrl} alt="delete" className="delete-button" />
        </button>
      </div>
    </li>
  )
}
export default CommentItem
