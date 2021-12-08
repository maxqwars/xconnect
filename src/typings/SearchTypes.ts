// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  IFormatQueryParams,
  IShiftQueryParams,
  ITypeQueryParams,
} from './SharedTypes';

import { TITLE_SEASON_CODE_ENUM } from '../constants/TITLE_SEASON_CODE_ENUM';

export interface ISearchTitlesQueryParams
  extends IFormatQueryParams,
    ITypeQueryParams,
    IShiftQueryParams {
  search: string;
  year?: number[];
  seasonCode?: TITLE_SEASON_CODE_ENUM[];
  genres?: string[];
  voice?: string[];
  translator?: string[];
  editing?: string[];
  decor?: string[];
  timing?: string[];
}
