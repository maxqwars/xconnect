// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  IFormatQueryParams,
  IShiftQueryParams,
  ITypeQueryParams,
} from './SharedTypes';

export interface IYouTubeVideo {
  id: number | null;
  title: string | null;
  image: string | null;
  youtubeId: string | null;
  timestamp: number | null;
  comments: number | null;
  views: number | null;
}

export interface IGetUpdatesQueryParams
  extends IFormatQueryParams,
    ITypeQueryParams,
    IShiftQueryParams {}

export interface IGetYouTubeQueryParams
  extends IShiftQueryParams,
    IFormatQueryParams {}

export interface IGetFeedQueryParams
  extends IFormatQueryParams,
    ITypeQueryParams,
    IShiftQueryParams {}
