import { classNames } from 'shared/lib/classNames/classNames';
import './CommentList.scss';
import { Comment } from '../../model/types/comment';
import { useTranslation } from 'react-i18next';
import { CommentItem } from '../CommentItem/CommentItem';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames('comment-list', {}, [className])}>
      {comments?.length ? (
        comments.map((comment: Comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <p className="comment-list__error">{t('noCommentsError')}</p>
      )}
    </div>
  );
};
