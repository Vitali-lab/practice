Области хранения данных:

- база данных на JSON SERVER
- BFF
- redux store

Сущности приложения:

- прользователь: БД (список пользователей) , BFF (сессия текущего), redux (отображение в браузере)
- роль пользователя: БД (сисок ролей), BFF (сессия пользователе с ролью), redux (использование на клиенте)
- статья: БД (список статей), redux (отображение в браузере)
- комментарии: БД (список комментариев), redux (отображение в браузере)

Таблицы БД:

- потльзователь - users: id / login / password / registed_at / role_id
- роль пользователя - roles: id / name
- статьи - posts: id / title / image_url / content / published_at
- комментарии - comments: id / author_id / post_id / content

Схема состояния на BFF :

- сессия текущего пользователя: login / password / role

Схема для Rеdux store :

- user: id / login / role_id
- posts: массив post: id / titlte / imageUrl / publishedAt / commentsCount
- post: id / titlte / imageUrl / publishedAt / content / comments: массив coment : id / author / content / publishedAt
- user: массив user: id / login / registredAt / role
