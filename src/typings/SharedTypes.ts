// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { DESC_TYPE_ENUM } from '../constants/DESC_TYPE_ENUM';
import { INCLUDE_RESOURCE_ENUM } from '../constants/INCLUDE_RESOURCE_ENUM';
import { PLAYLIST_TYPE_ENUM } from '../constants/PLAYLIST_TYPE_ENUM';

/**
 *
 *
 * ### Contain:
 * - filter
 * - include
 * - remove
 *
 * @export
 * @interface IFormatQueryParams
 */
export interface IFormatQueryParams {
  filter?: string[];
  include?: INCLUDE_RESOURCE_ENUM[];
  remove?: string[];
}

/**
 * ### Contain:
 * - descriptionType
 * - playlistType
 *
 * @export
 * @interface ITypeQueryParams
 */
export interface ITypeQueryParams {
  descriptionType?: DESC_TYPE_ENUM;
  playlistType?: PLAYLIST_TYPE_ENUM;
}

/**
 * ### Contain:
 * - limit
 * - since
 * - after
 *
 * @export
 * @interface IShiftQueryParams
 */
export interface IShiftQueryParams {
  limit?: number;
  since?: number;
  after?: number;
}
