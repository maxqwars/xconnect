![Xconnect logo](.github/rep-cover.png)

# XConnect

XConnect is an open library for working with AniLibria REST API. Using a modern API based on promises.

[Live demo](https://codesandbox.io/embed/xconnect-random-release-otyzs?fontsize=14&hidenavigation=1&theme=dark) -
[Online docs](https://maxqwars.github.io/xconnect/)

## Installation

```
npm i @maxqwars/xconnect
```

## Example of working with XConnect

Getting information about a random release using XConnect components

#### Using the XConnect module (recommended)

```
import { Database } from '@maxqwars/xconnect'

const XDatabase = new Database('api.service.com/v2/')

XDatabase.getRandomTitle({ /* query params */ })
  .then(title => console.log(title))
  .catch(e => onErrorCallback())

```

#### Using core classes (if target platform not support fetch, async/await, Promises)

```
import { URLBuilder, TitleQueryBuilder, API_ENDPOINTS_ENUM } from '@maxqwars/xconnect'

const U_BUILDER = new URLBuilder('api.service.com/v2/', true)
const QUERY_BUILDER = new TitleQueryBuilder()

const requestUrl = U_BUILDER()
  .useEndpoint(API_ENDPOINTS_ENUM.GET_TITLE)
  .useQuery(QUERY_BUILDER.code('release-code').build())
  .build()

```

## Current API support status

- [x] getTitle
- [ ] getTitles
- [x] getUpdates
- [ ] getChanges
- [ ] getSchedule
- [x] getRandomTitle
- [ ] getYouTube
- [ ] getFeed
- [x] getYears
- [x] getGenres
- [ ] getCachingNodes
- [ ] getTeam
- [ ] getSeedStats
- [ ] getRSS
- [x] searchTitles
- [ ] advancedSearch
- [ ] getFavorites
- [ ] addFavorite
- [ ] delFavorite
