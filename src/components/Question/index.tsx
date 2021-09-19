import { ReactNode } from "react";
import classnames from "classnames";

import "./styles.scss";

type QuestionProps = {
  author: {
    avatar: string;
    name: string;
  }
  content: string;
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
}

export function Question({
  author,
  content,
  isAnswered = false,
  isHighlighted = false,
  children
}: QuestionProps) {
  return (
    <div
      className={classnames(
        "question",
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered},
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </div>
  );
}