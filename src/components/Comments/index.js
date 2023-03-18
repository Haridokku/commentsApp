import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const imgUrl =
  'https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png'
class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentsList: []}

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeComment = event => {
    this.setState({commentInput: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name: nameInput,
      comment: commentInput,
      date: formatDistanceToNow(new Date()),
      isLiked: false,
      initialClassName: initialBackgroundClassName,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  deleteComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(eachComment => {
        if (eachComment.id !== id) {
          return eachComment
        }
      }),
    }))
  }

  changeLikeImg = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {nameInput, commentInput, commentsList, count} = this.state
    return (
      <div className="app-container">
        <h1 className="head">Comments</h1>
        <div className="content-container">
          <img src={imgUrl} alt="comments" className="comment" />
          <form className="input-form-container" onSubmit={this.onAddComment}>
            <p className="describe1">Say something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              className="input"
              onChange={this.onChangeName}
              value={nameInput}
            />
            <textarea
              placeholder="Your Comment"
              value={commentInput}
              onChange={this.onChangeComment}
              className="your-comment"
              rows="6"
            />
            <button type="submit" className="button">
              Add Comment
            </button>
          </form>
        </div>
        <hr className="line" />

        <p className="para">
          <span className="describe">{commentsList.length}</span>
          Comments
        </p>
        <ul className="list-container">
          {commentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              commentDetails={eachComment}
              deleteComment={this.deleteComment}
              changeLikeImg={this.changeLikeImg}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
