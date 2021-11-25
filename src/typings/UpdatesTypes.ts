// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  DESCRIPTION_TYPE_ENUM,
  PLAYLIST_TYPE_ENUM,
  TITLE_INCLUDE_RESOURCES_ENUM,
} from './DatabaseTypes';

export interface IGetUpdatesQueryParams {
  filter?: string[];
  remove?: string[];
  include?: TITLE_INCLUDE_RESOURCES_ENUM[];
  limit?: number;
  since?: number;
  descriptionType?: DESCRIPTION_TYPE_ENUM;
  playlistType?: PLAYLIST_TYPE_ENUM;
  after?: number;
}

export interface IGetYouTubeQueryParams {
  filter?: string[];
  remove?: string[];
  limit?: number;
  since?: number;
  after?: number;
}

export interface IYouTubeVideo {
  id?: number;
  title?: string;
  image?: string;
  youtubeId?: string;
  timestamp?: number;
}
