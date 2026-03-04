import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, Input } from 'shared/ui';

import {
  getAddCommentFormIsLoading,
  getAddCommentFormText,
} from './../../model/selectors/addCommentFormSelectors';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from './../../model/slices/addCommentFormSlice';

import './AddCommentForm.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const isLoading = useSelector(getAddCommentFormIsLoading);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onCommentTextChange('');
    onSendComment(text);
  }, [onSendComment, text, onCommentTextChange]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames('comment-form', {}, [className])}>
        <Input
          value={text}
          onChange={(e) => onCommentTextChange(e.target.value)}
          placeholder={t('enterComment')}
          className="comment-form__input"
        />
        <Button
          isLoading={isLoading}
          disabled={isLoading || !text.trim()}
          onClick={onSendHandler}
          className="comment-form__button"
        >
          {t('send')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

AddCommentForm.displayName = 'AddCommentForm';

export default AddCommentForm;
