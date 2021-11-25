// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * List of procedures available for calling
 *
 * @export
 * @enum {number}
 */
export enum API_ENDPOINTS_ENUM {
  ADVANCED_SEARCH = 'advancedSearch',
  GET_CACHING_NODES = 'getCachingNodes',
  GET_CHANGES = 'getChanges',
  GET_FEED = 'getFeed',
  GET_GENRES = 'getGenres',
  GET_RANDOM_TITLE = 'getRandomTitle',
  GET_RSS = 'getRSS',
  GET_SCHEDULE = 'getSchedule',
  GET_SEED_STATS = 'getSeedStats',
  GET_TITLE = 'getTitle',
  GET_TITLES = 'getTitles',
  GET_UPDATES = 'getUpdates',
  GET_YEARS = 'getYears',
  GET_TUBE = 'getYouTube',
  SEARCH_TITLES = 'searchTitles',
}
