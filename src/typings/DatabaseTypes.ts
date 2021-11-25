// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/**
 * Release description format type (plain, html)
 *
 * @export
 * @enum {number}
 */
export enum DESCRIPTION_TYPE_ENUM {
  PLAIN = 'plain',
  HTML = 'html',
}

export enum PLAYLIST_TYPE_ENUM {
  ARRAY = 'array',
  OBJECT = 'object',
}

/**
 * A list of base64 resources to include in the response
 *
 * @export
 * @enum {number}
 */
export enum TITLE_INCLUDE_RESOURCES_ENUM {
  RAW_POSTER = 'raw_poster',
}

/**
 * Current status of work on the release
 *
 * @export
 * @enum {number}
 */
export enum TITLE_STATUS_CODES_ENUM {
  IN_PROCESS = 1,
  COMPLETED = 2,
  HIDDEN = 3, // ! ???
  NOT_ONGOING = 4, // ! ???
}

export enum TITLE_CONTENT_TYPE_CODES_ENUM {
  MOVIE = 0,
  TV = 1,
  OVA = 2,
  ONA = 3,
  SPECIAL = 4,
}

export enum TITLE_SEASON_CODES_ENUM {
  WINTER = 1,
  SPRING = 2,
  SUMMER = 3,
  AUTUMN = 4,
}

/**
 * Request parameters for methods working with data in the `ITitle` format
 *
 * @export
 * @interface ITitleQueryParams
 */
export interface ITitleQueryParams {
  /**
   * Release database ID
   *
   * @type {number}
   * @memberof ITitleQueryParams
   */
  id?: number;

  /**
   * Release characters ID
   *
   * @type {string}
   * @memberof ITitleQueryParams
   */
  code?: string;

  /**
   * ID of the associated torrent file
   *
   * @type {number}
   * @memberof ITitleQueryParams
   */
  torrentId?: number;

  /**
   * List of fields to include in the response
   *
   * @type {string[]}
   * @memberof ITitleQueryParams
   */
  filter?: string[];

  /**
   * List of fields to exclude from the response
   *
   * @type {string[]}
   * @memberof ITitleQueryParams
   */
  remove?: string[];

  /**
   * A list of base64 resources to include in the response
   *
   * @type {TITLE_INCLUDE_RESOURCES_ENUM[]}
   * @memberof ITitleQueryParams
   */
  include?: TITLE_INCLUDE_RESOURCES_ENUM[];

  /**
   * Required format of the release description
   *
   * @type {DESCRIPTION_TYPE_ENUM}
   * @memberof ITitleQueryParams
   */
  descriptionType?: DESCRIPTION_TYPE_ENUM;

  /**
   * Playlist format of the player
   *
   * @type {PLAYLIST_TYPE_ENUM}
   * @memberof ITitleQueryParams
   */
  playlistType?: PLAYLIST_TYPE_ENUM;
}

/**
 * List of names of the work
 *
 * @export
 * @interface ITitleNames
 */
export interface ITitleNames {
  /**
   * Russian name
   *
   * @type {string}
   * @memberof ITitleNames
   */
  ru: string | null;

  /**
   * English name
   *
   * @type {string}
   * @memberof ITitleNames
   */
  en: string | null;
}

/**
 * Progress on the release
 *
 * @export
 * @interface ITitleStatus
 */
export interface ITitleStatus {
  string: string | null;
  code: TITLE_STATUS_CODES_ENUM | null;
}

export interface ITitlePoster {
  url: string | null;
  updatedTimestamp: number | null;
  rawBase64File: string | null;
}

export interface ITitleType {
  fullString: string | null;
  code: TITLE_CONTENT_TYPE_CODES_ENUM | null;
  string: string | null;
  series: number | null;
  length: string | null;
}

export interface ITitleTeam {
  voice: string[] | null;
  translator: string[] | null;
  editing: string[] | null;
  decor: string[] | null;
  timing: string[] | null;
}

export interface ITitleSeason {
  code: TITLE_SEASON_CODES_ENUM | null;
  string: string | null;
  year: number | null;
  weekDay: number | null;
}

export interface ITitleBlocked {
  blocked: boolean | null;
  bakanim: boolean | null;
}

export interface IPlayerSeries {
  first: number | null;
  last: number | null;
  string: string | null;
}

export interface IPlayerPlaylist {
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

  series: IPlayerSeries | null;

  playlist: IPlayerPlaylist | null;
}

export interface ITitle {
  id: number | null;
  code: string | null;
  description: string | null;
  inFavorites: number | null;
  announce: string | null;
  updated: number | null;
  lastChange: number | null;
  genres: string[] | null;

  names: ITitleNames | null;
  status: ITitleStatus | null;
  poster: ITitlePoster | null;
  type: ITitleType | null;
  team: ITitleTeam | null;
  season: ITitleSeason | null;
  blocked: ITitleBlocked | null;
  player: ITitlePlayer | null;
}
