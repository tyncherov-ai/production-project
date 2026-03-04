import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import {
  Article,
  ArticleBlockType,
  ArticleType,
  ArticleView,
} from 'entities/Article/model/types/article';
import { classNames } from 'shared/lib/classNames/classNames';

import './ArticlesPage.scss';

interface ArticlesPageProps {
  className?: string;
}

const article: Article = {
  id: '2',
  title: 'Тренды в веб-дизайне',
  subtitle: 'Что будет в моде в 2025 году?',
  img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  views: 1876,
  createdAt: '01.02.2025',
  user: {
    id: '1',
    username: 'vagaa_t',
    avatar:
      'https://assets.leetcode.com/users/tyncherov_v/avatar_1757059977.png',
  },
  type: [ArticleType.IT, ArticleType.ECONOMICS],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Минимализм и микро-интеракции',
      paragraphs: [
        'В 2025 году минимализм останется ключевым трендом, но с акцентом на более сложные и продуманные микро-интеракции. Пользователи ожидают не только чистых интерфейсов, но и отзывчивых, приятных деталей, которые улучшают пользовательский опыт.',
        'Эффектные переходы, тонкие анимации и ненавязчивая обратная связь будут играть важную роль в создании привлекательного дизайна.',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Рисунок 2 - Процесс веб-дизайна',
    },
    {
      id: '3',
      type: ArticleBlockType.TEXT,
      title: 'Использование AI в дизайне',
      paragraphs: [
        'Искусственный интеллект продолжит трансформировать процесс веб-дизайна. Инструменты на базе AI помогут автоматизировать рутинные задачи, генерировать варианты дизайна и персонализировать пользовательский опыт в реальном времени.',
        'Дизайнеры смогут сосредоточиться на стратегических задачах, оставляя AI работу по оптимизации и адаптации макетов.',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '/* Пример CSS для микро-интеракции */\n \n.button {\n  transition: all 0.3s ease;\n}\n.button:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n}',
    },
  ],
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  return (
    <div className={classNames('page__articles articles', {}, [className])}>
      <div className="articles__container">
        <ArticleList
          view={ArticleView.SMALL}
          articles={new Array(16).fill(0).map((_, index) => ({
            ...article,
            id: String(index),
          }))}
        />
      </div>
    </div>
  );
};

export default memo(ArticlesPage);
