// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  IFormatQueryParams,
  IShiftQueryParams,
  ITypeQueryParams,
} from './SharedTypes';

import { ORDER_DIRECTION_ENUM } from '../constants/ORDER_DIRECTION_ENUM';
import { SORT_BY_ENUM } from '../constants/SORT_BY_ENUM';

export interface IGetSeedStatsQueryParams
  extends IShiftQueryParams,
    IFormatQueryParams,
    ITypeQueryParams {
  users?: string[];
  sortBy?: SORT_BY_ENUM;
  order?: ORDER_DIRECTION_ENUM;
}
