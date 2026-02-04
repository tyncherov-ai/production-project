import { Comment } from 'entities/Comment';

import { EntityId, EntityState } from '@reduxjs/toolkit';

export interface ArticleDetailsCommentsSchema extends EntityState<
  Comment,
  EntityId
> {
  isLoading?: boolean;
  error?: string;
}
