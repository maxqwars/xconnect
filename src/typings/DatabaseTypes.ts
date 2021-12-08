// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { IFormatQueryParams, ITypeQueryParams } from './SharedTypes';

import { TITLE_CONTENT_TYPE_CODE_ENUM } from '../constants/TITLE_CONTENT_TYPE_CODE_ENUM';
import { TITLE_SEASON_CODE_ENUM } from '../constants/TITLE_SEASON_CODE_ENUM';
import { TITLE_STATUS_CODE_ENUM } from '../constants/TITLE_STATUS_CODE_ENUM';

/**
 * Query params for getTitle method
 *
 * @export
 * @interface IGetTitleQueryParams
 * @extends {IFormatQueryParams}
 * @extends {ITypeQueryParams}
 */
export interface IGetTitleQueryParams
  extends IFormatQueryParams,
    ITypeQueryParams {
  code?: string;
  id?: number;
  torrentId?: number;
}

/**
 * Query params for getTitles method
 *
 * @export
 * @interface IGetTitlesQueryParams
 * @extends {IFormatQueryParams}
 * @extends {ITypeQueryParams}
 */
export interface IGetTitlesQueryParams
  extends IFormatQueryParams,
    ITypeQueryParams {
  codeList?: string[];
  idList?: number[];
}

export interface ITitleNames {
  alternative: string | null;
  en: string | null;
  ru: string | null;
}

export interface ITitleStatus {
  code: TITLE_STATUS_CODE_ENUM | null;
  string: string | null;
}

export interface ITitlePoster {
  rawBase64File: string | null;
  updatedTimestamp: number | null;
  url: string | null;
}

export interface ITitleType {
  code: TITLE_CONTENT_TYPE_CODE_ENUM | null;
  fullString: string | null;
  length: string | null;
  series: number | null;
  string: string | null;
}

export interface ITitleTeam {
  decor: string[] | null;
  editing: string[] | null;
  timing: string[] | null;
  translator: string[] | null;
  voice: string[] | null;
}

export interface ITitleSeason {
  code: TITLE_SEASON_CODE_ENUM | null;
  string: string | null;
  weekDay: number | null;
  year: number | null;
}

export interface ITitleBlocked {
  bakanim: boolean | null;
  blocked: boolean | null;
}

export interface ISeries {
  first: number | null;
  last: number | null;
  string: string | null;
}

export interface IPlayerObjectPlaylist {
  [key: number]: {
    id: number;
    createdTimestamp: number;
    hls: {
      fhd: string | null;
      hd: string | null;
      sd: string | null;
    } | null;
  };
}

export interface ITitlePlayer {
  alternativePlayer: string | null;
  host: string | null;
  playlist: IPlayerObjectPlaylist | null;
  series: ISeries | null;
}

export interface ITorrentQualityData {
  encoder: string | null;
  lq_audio: boolean | null;
  resolution: number | null;
  string: string | null;
  type: string | null;
}

export interface ITorrent {
  quality: ITorrentQualityData;
  downloads: number | number;
  leechers: number | number;
  metadata: null;
  raw_base64_file: string | null;
  seeders: number | number;
  series: ISeries | null;
  torrentId: number | null;
  totalSize: number | number;
  uploadedTimestamp: number | null;
  url: string | null;
}

export interface ITitleTorrents {
  list: ITorrent[] | null;
  series: ISeries | null;
}

export interface ITitle {
  // Primitive types
  announce: string | null;
  code: string | null;
  description: string | null;
  genres: string[] | null;
  id: number | null;
  inFavorites: number | null;
  lastChange: number | null;
  updated: number | null;

  // Combine types
  blocked: ITitleBlocked | null;
  names: ITitleNames | null;
  player: ITitlePlayer | null;
  poster: ITitlePoster | null;
  season: ITitleSeason | null;
  status: ITitleStatus | null;
  team: ITitleTeam | null;
  torrents: ITitleTorrents | null;
  type: ITitleType | null;
}
