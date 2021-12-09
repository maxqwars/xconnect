![XConnect logo](repo-cover.svg)

# XConnect V2

Открытая библиотека для работы с AniLibria REST API, построенная на использовании ES6 Promises.
Отличная основа для построения проектов с использованием этого API.

<!-- - [Live demo](https://codesandbox.io/embed/xconnect-random-release-otyzs?fontsize=14&hidenavigation=1&theme=dark)
- [Online docs](https://maxqwars.github.io/xconnect/) -->

## Установка:

> Установка через пакетный менеджер недоступна в данный момент, пожалуйста склонируйте репозиторий и установите как локальный пакет.

## Архитектура

Структура XConnect

| Папка     | Описание                                             |
| --------- | ---------------------------------------------------- |
| constants | Константы и перечисления                             |
| core      | "Корневые" классы, основа модулей                    |
| functions | Вспомогательные функции                              |
| modules   | Модули для простого взаимодействия с API             |
| typings   | Типы                                                 |
| utils     | Утилиты в отличии от функций не доступны для импорта |

## Реализованные методы API:

- [x] getTitle
- [X] getTitles
- [x] getUpdates
- [ ] getChanges
- [ ] getSchedule
- [x] getRandomTitle
- [x] getYouTube
- [ ] getFeed
- [x] getYears
- [x] getGenres
- [ ] getCachingNodes
- [ ] getTeam
- [ ] getSeedStats
- [ ] getRSS (не будет реализован)
- [x] searchTitles
- [ ] advancedSearch
- [ ] getFavorites (не будет реализован)
- [ ] addFavorite (не будет реализован)
- [ ] delFavorite (не будет реализован)
