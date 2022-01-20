// Copyright (c) 2022 Maxim "maxqwars" Maximenko
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  IPlayerObjectPlaylist,
  ISeries,
  ITitle,
  ITitleBlocked,
  ITitleNames,
  ITitlePlayer,
  ITitleSeason,
  ITitleStatus,
  ITitlePosters,
  IPosterImage,
  ITitleTeam,
  ITitleTorrents,
  ITitleType,
} from '../typings/DatabaseTypes';

import { TITLE_CONTENT_TYPE_CODE_ENUM } from '../constants/TITLE_CONTENT_TYPE_CODE_ENUM';
import { TITLE_SEASON_CODE_ENUM } from '../constants/TITLE_SEASON_CODE_ENUM';
import { TITLE_STATUS_CODE_ENUM } from '../constants/TITLE_STATUS_CODE_ENUM';
import noUndefined from '../utils/noUndefined';

export default function titleNamesConverter(source: {
  [key: string]: unknown;
}): ITitle {
  /* -------------------------------------------------------------------------- */
  /*                                  Primitive                                 */
  /* -------------------------------------------------------------------------- */
  const announce = noUndefined<string>(() => source['announce']);
  const code = noUndefined<string>(() => source['code']);
  const description = noUndefined<string>(() => source['description']);
  const genres = noUndefined<string[]>(() => source['genres']);
  const id = noUndefined<number>(() => source['id']);
  const inFavorites = noUndefined<number>(() => source['in_favorites']);
  const lastChange = noUndefined<number>(() => source['last_change']);
  const updated = noUndefined<number>(() => source['updated']);

  /* -------------------------------------------------------------------------- */
  /*                                   Blocked                                  */
  /* -------------------------------------------------------------------------- */
  const blocked = ((): ITitleBlocked | null => {
    try {
      const blocked = source['blocked'];
      return {
        blocked: noUndefined<boolean>(() => blocked['blocked']),
        bakanim: noUndefined<boolean>(() => blocked['bakanim']),
      };
    } catch (e) {
      return null;
    }
  })();

  /* -------------------------------------------------------------------------- */
  /*                                    Names                                   */
  /* -------------------------------------------------------------------------- */
  const names = ((): ITitleNames | null => {
    try {
      const names = source['names'];
      return {
        ru: noUndefined(() => names['ru']),
        en: noUndefined(() => names['en']),
        alternative: noUndefined(() => names['alternative']),
      };
    } catch (e) {
      return null;
    }
  })();

  /* -------------------------------------------------------------------------- */
  /*                         Player with object playlist                        */
  /* -------------------------------------------------------------------------- */
  const player = ((): ITitlePlayer | null => {
    try {
      const player = source['player'];
      return {
        alternativePlayer: noUndefined<string>(
          () => player['alternative_player']
        ),
        host: noUndefined<string>(() => player['host']),
        series: noUndefined<ISeries>(() => ({
          first: player['series']['first'],
          last: player['series']['last'],
          string: player['series']['string'],
        })),
        playlist: noUndefined<IPlayerObjectPlaylist>(() => {
          const transformed = {};
          for (const i in player['playlist']) {
            transformed[i] = {
              serie: player['playlist'][i]['serie'],
              createdTimestamp: player['playlist'][i]['created_timestamp'],
              hls: {
                fhd: noUndefined<string>(
                  () => player['playlist'][i]['hls']['fhd']
                ),
                hd: noUndefined<string>(
                  () => player['playlist'][i]['hls']['hd']
                ),
                sd: noUndefined<string>(
                  () => player['playlist'][i]['hls']['sd']
                ),
              },
            };
          }
          return transformed;
        }),
      };
    } catch (e) {
      return null;
    }
  })();

  /* -------------------------------------------------------------------------- */
  /*                                   Poster                                   */
  /* -------------------------------------------------------------------------- */
  const posters = ((): ITitlePosters | null => {
    const fn = (data: { [key: string]: string }): IPosterImage => {
      return {
        url: noUndefined<string>(() => {
          data['url'];
        }),
        rawBase64File: noUndefined<string>(() => data['raw_base64_file']),
      };
    };

    try {
      const poster = source['posters'] as {
        [key: string]: { [key: string]: string };
      };

      return {
        small: fn(poster['small']),
        medium: fn(poster['medium']),
        original: fn(poster['original']),
      };
    } catch (e) {
      return null;
    }
  })();

  /* -------------------------------------------------------------------------- */
  /*                                   Season                                   */
  /* -------------------------------------------------------------------------- */
  const season = ((): ITitleSeason | null => {
    try {
      const season = source['season'];
      return {
        code: noUndefined<TITLE_SEASON_CODE_ENUM>(() => season['code']),
        string: noUndefined<string>(() => season['string']),
        year: noUndefined<number>(() => season['year']),
        weekDay: noUndefined<number>(() => season['week_day']),
      };
    } catch (e) {
      return null;
    }
  })();

  /* -------------------------------------------------------------------------- */
  /*                                   Status                                   */
  /* -------------------------------------------------------------------------- */
  const status = ((): ITitleStatus | null => {
    try {
      const status = source['status'];
      return {
        string: noUndefined<string>(() => status['string']),
        code: noUndefined<TITLE_STATUS_CODE_ENUM>(() => status['code']),
      };
    } catch (e) {
      return null;
    }
  })();

  /* -------------------------------------------------------------------------- */
  /*                                    Team                                    */
  /* -------------------------------------------------------------------------- */
  const team = ((): ITitleTeam | null => {
    try {
      const team = source['team'];
      return {
        voice: noUndefined<string[]>(() => team['voice']),
        translator: noUndefined<string[]>(() => team['translator']),
        editing: noUndefined<string[]>(() => team['editing']),
        decor: noUndefined<string[]>(() => team['decor']),
        timing: noUndefined<string[]>(() => team['timing']),
      };
    } catch (e) {
      return null;
    }
  })();

  /* -------------------------------------------------------------------------- */
  /*                                  Torrents                                  */
  /* -------------------------------------------------------------------------- */
  // TODO: Add torrents processing
  const torrents = ((): ITitleTorrents | null => null)();

  /* -------------------------------------------------------------------------- */
  /*                                    Type                                    */
  /* -------------------------------------------------------------------------- */
  const type = ((): ITitleType | null => {
    try {
      const type = source['type'];
      return {
        fullString: noUndefined<string>(() => type['full_string']),
        code: noUndefined<TITLE_CONTENT_TYPE_CODE_ENUM>(() => type['code']),
        string: noUndefined<string>(() => type['string']),
        series: noUndefined<number>(() => type['series']),
        length: noUndefined<string>(() => type['length']),
      };
    } catch (e) {
      return null;
    }
  })();

  /* -------------------------------------------------------------------------- */
  /*                           Return camelCase object                          */
  /* -------------------------------------------------------------------------- */
  return {
    // Primitive
    announce,
    code,
    description,
    genres,
    id,
    inFavorites,
    lastChange,
    updated,

    // Combine types
    blocked,
    names,
    player,
    posters,
    season,
    status,
    team,
    torrents,
    type,
  };
}
