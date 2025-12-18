import { classNames } from 'shared/lib/classNames/classNames';
import './CommentItem.scss';
import { Comment } from '../../model/types/comment';
import { Avatar } from 'shared/ui/Avatar';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';

interface CommentItemProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentItem = (props: CommentItemProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div
        className={classNames('comment-item', { loading: isLoading }, [
          className,
        ])}
      >
        <Skeleton width={32} height={32} border="50%" />
        <Skeleton width={100} height={16} className="comment-item__username" />
        <Skeleton width={'100%'} height={32} className="comment-item__text" />
      </div>
    );
  }
  return (
    <div className={classNames('comment-item', {}, [className])}>
      <Avatar size={32} src={comment.user.avatar} />
      <p className="comment-item__username">{comment.user.username}</p>
      <div className="comment-item__text">{comment.text}</div>
    </div>
  );
};
