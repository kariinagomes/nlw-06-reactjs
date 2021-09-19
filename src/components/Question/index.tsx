type QuestionProps = {
  author: {
    avatar: string;
    name: string;
  }
  content: string;
}

export function Question({author, content}: QuestionProps) {
  return (
    <div className="question">
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div></div>
      </footer>
    </div>
  );
}