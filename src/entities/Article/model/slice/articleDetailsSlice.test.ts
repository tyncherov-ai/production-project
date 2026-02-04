import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article, ArticleBlockType, ArticleType } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

import { articleDetailsReducer } from './articleDetailsSlice';

const article: Article = {
  id: '1',
  title: 'Новости Javascript',
  subtitle: 'Что нового в JS за 2025 год?',
  img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  views: 2543,
  createdAt: '15.01.2025',
  type: [ArticleType.IT, ArticleType.SCIENCE],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Введение в ECMAScript 2025: Новые возможности',
      paragraphs: [
        'ECMAScript 2025 привносит ряд значительных улучшений и новых функций, которые продолжают развивать язык JavaScript, делая его еще более мощным и удобным для разработчиков. В этом году мы увидим дальнейшую стандартизацию предложений, которые уже долгое время обсуждались в сообществе.',
        'Одним из ключевых направлений развития стало улучшение работы с асинхронным кодом и параллельными вычислениями. Также уделено внимание повышению производительности и безопасности при работе с большими объемами данных и сложными структурами.',
      ],
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Рисунок 1 - Код на экране',
    },
    {
      id: '3',
      type: ArticleBlockType.TEXT,
      title: 'Улучшения в синтаксисе и работе с данными',
      paragraphs: [
        'В 2025 году мы увидим новые синтаксические конструкции, упрощающие работу с объектами и массивами. Например, были добавлены новые операторы для более удобного копирования и объединения данных, а также для работы с глубоко вложенными структурами.',
        'Кроме того, были представлены новые встроенные типы данных, предназначенные для оптимизации работы с большими числами и специализированными задачами, такими как криптография и научные вычисления.',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: "const newFeatures = ['decorators', 'pattern matching', 'realms'];\nconst es2025Release = {\n  version: 'ES2025',\n  date: 'June 2025',\n  features: newFeatures.map(f => `Stage 4: ${f}`)\n};\nconsole.log(es2025Release);",
    },
    {
      id: '5',
      type: ArticleBlockType.TEXT,
      title: 'Будущее веб-разработки с JS',
      paragraphs: [
        'JavaScript продолжает оставаться фундаментом веб-разработки. С новыми возможностями, предоставляемыми ECMAScript 2025, разработчики получат еще больше инструментов для создания быстрых, интерактивных и безопасных веб-приложений.',
        'Ожидается, что браузеры и среды выполнения, такие как Node.js, быстро адаптируются к новым стандартам, обеспечивая широкую поддержку этих функций.',
      ],
    },
  ],
};

describe('articleDetailsSlice.test', () => {
  test('test update article details pending', () => {
    const state: Partial<ArticleDetailsSchema> = {
      isLoading: false,
      error: 'some error',
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.pending('', '1'),
      ),
    ).toEqual({ isLoading: true, error: undefined });
  });

  test('test update article details fulfilled', () => {
    const state: Partial<ArticleDetailsSchema> = {
      isLoading: true,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.fulfilled(article, '', '1'),
      ),
    ).toEqual({
      isLoading: false,
      data: article,
    });
  });

  test('test update article details rejected', () => {
    const state: Partial<ArticleDetailsSchema> = {
      isLoading: true,
      data: article,
    };
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.rejected(
          new Error(),
          '',
          '1',
          'Error during fetching article details',
        ),
      ),
    ).toEqual({
      isLoading: false,
      error: 'Error during fetching article details',
      data: article,
    });
  });
});
