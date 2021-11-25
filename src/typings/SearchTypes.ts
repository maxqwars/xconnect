// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ITitleQueryParams, TITLE_SEASON_CODES_ENUM } from './DatabaseTypes';

export interface ISearchTitleQueryParams extends ITitleQueryParams {
  search: string;
  year: string[];
  genres: string[];
  seasonCode: TITLE_SEASON_CODES_ENUM[];
  voice: string[];
  translator: string[];
  editing: string[];
  decor: string[];
  timing: string[];
  limit: number;
  after: number;
}
