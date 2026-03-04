import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { GoComment, GoEye } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, Avatar } from 'shared/ui';

import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article';

import './ArticleListItem.scss';

interface ArtilcleListItemProps {
  className?: string;
  view: ArticleView;
  article: Article;
}

export const ArticleListItem = (props: ArtilcleListItemProps) => {
  const { className, article, view } = props;
  const articlePath = RoutePath.article_details + article.id;
  const mockCommentsCount = 12;
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(articlePath);
  }, [articlePath, navigate]);

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block): block is ArticleTextBlock =>
        block.type === ArticleBlockType.TEXT,
    );
    const rawPreviewText = textBlock?.paragraphs[0] || article.subtitle || '';
    const previewText =
      rawPreviewText.length > 240
        ? `${rawPreviewText.slice(0, 237).trimEnd()}...`
        : rawPreviewText;

    return (
      <article
        className={classNames(
          'article-list__item article-item article-item--big',
          {},
          [className],
        )}
      >
        <div className="article-item__image">
          <img src={article.img} alt={article.title} />
          <p className="article-item__image-date">{article.createdAt}</p>
        </div>
        <div className="article-item__content">
          <div className="article-item__head">
            <div className="article-item__author">
              <Avatar
                className="article-item__author-avatar"
                size={40}
                src={article.user.avatar}
              />
              <div className="article-item__author-meta">
                <span className="article-item__author-name">
                  {article.user.username}
                </span>
              </div>
            </div>
            <div className="article-item__type">{article.type.join(', ')}</div>
          </div>

          <h3 className="article-item__title">{article.title}</h3>
          {previewText && (
            <p className="article-item__excerpt">{previewText}</p>
          )}
          <div className="article-item__footer">
            <div className="article-item__info">
              <div className="article-item__comments">
                <GoComment />
                <span className="article-item__comments-count">
                  {mockCommentsCount}
                </span>
              </div>
              <div className="article-item__views">
                <GoEye />
                <span className="article-item__views-count">
                  {article.views}
                </span>
              </div>
            </div>
            <AppLink className="article-item__open-link" to={articlePath}>
              {t('openArticle')}
            </AppLink>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={classNames(
        'article-list__item article-item article-item--small',
        {},
        [className],
      )}
      onClick={onOpenArticle}
    >
      <div className="article-item__image">
        <img src={article.img} alt={article.title} />
        <p className="article-item__image-date">{article.createdAt}</p>
      </div>
      <div className="article-item__content">
        <div className="article-item__type">{article.type.join(', ')}</div>
        <h3 className="article-item__title">{article.title}</h3>
        <div className="article-item__info">
          <div className="article-item__comments">
            <GoComment />
            <span className="article-item__comments-count">
              {mockCommentsCount}
            </span>
          </div>
          <div className="article-item__views">
            <GoEye />
            <span className="article-item__views-count">{article.views}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
