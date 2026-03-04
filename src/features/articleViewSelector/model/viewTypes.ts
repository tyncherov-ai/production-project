import { ArticleView } from 'entities/Article';
import { MdGridView, MdViewHeadline } from 'react-icons/md';

export const viewTypes = [
  { view: ArticleView.SMALL, icon: MdGridView },
  { view: ArticleView.BIG, icon: MdViewHeadline },
];
