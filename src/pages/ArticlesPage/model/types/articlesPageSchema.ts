import { Article, ArticleView } from 'entities/Article';

import { EntityId, EntityState } from '@reduxjs/toolkit';

export interface ArticlesPageSchema extends EntityState<Article, EntityId> {
  isLoading?: boolean;
  error?: string;

  view?: ArticleView;
  page: number;
  limit?: number;
  hasMore: boolean;

  _inited: boolean;
}
