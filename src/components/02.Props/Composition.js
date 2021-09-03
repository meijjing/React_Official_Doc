import React from 'react';


// 컴포넌트 합성
function Welcome(props) {
  return <h3>Hello, {props.name}</h3>
}


// 컴포넌츠 추출 Extraction
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img 
      className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  )
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar author={props.author} />
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

function Props() {
  return (
    <>
      <h1>02. Props</h1>
      <Welcome name="Leah" />
      <Welcome name="meijing" />
      <Comment date={comment.date} text={comment.text} author={comment.author} />
    </>
  );
}

export default Props;