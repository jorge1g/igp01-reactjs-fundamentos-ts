import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import stylesComment from './Comment.module.css';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
        }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state +1
        });
    }

    return(
        <div className={stylesComment.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://avatars.githubusercontent.com/u/54822837?v=4" 
                alt=""
            />

            <div className={stylesComment.commentBox}>
                <div className={stylesComment.commentContent}>
                    <header>
                        <div className={stylesComment.authorAndTime}>
                            <strong>Jorge Silva</strong>
                            <time title="11 de maio às 08:15h" dateTime="2002-05-11 08:13:35">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>


                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    );
}