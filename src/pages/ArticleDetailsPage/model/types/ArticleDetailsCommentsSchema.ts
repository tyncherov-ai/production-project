import { EntityId, EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

export interface ArticleDetailsCommentsSchema extends EntityState<
  Comment,
  EntityId
> {
  isLoading?: boolean;
  error?: string;
}
