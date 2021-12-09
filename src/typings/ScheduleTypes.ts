// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { IFormatQueryParams, ITypeQueryParams } from './SharedTypes';

import { WEEK_DAY_ENUM } from '../constants/WEEK_DAY_ENUM';

export interface IGetScheduleQueryParams
  extends IFormatQueryParams,
    ITypeQueryParams {
  days?: WEEK_DAY_ENUM[];
}
