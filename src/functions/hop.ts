// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  IPlayerPlaylist,
  IPlayerSeries,
  ITitle,
  ITitleBlocked,
  ITitleNames,
  ITitlePlayer,
  ITitlePoster,
  ITitleSeason,
  ITitleStatus,
  ITitleTeam,
  ITitleType,
  TITLE_CONTENT_TYPE_CODES_ENUM,
  TITLE_SEASON_CODES_ENUM,
  TITLE_STATUS_CODES_ENUM,
} from '../typings/DatabaseTypes';

function noUndefined<T>(fn: CallableFunction): T | null {
  try {
    const result = fn();
    return result !== null && typeof result !== 'undefined'
      ? (result as T)
      : null;
  } catch (e) {
    return null;
  }
}

function hop(raw: { [key: string]: unknown }): ITitle {
  /* Simple (not nested) properties */
  const id = noUndefined<number>(() => raw['id']);
  const code = noUndefined<string>(() => raw['code']);
  const announce = noUndefined<string>(() => raw['announce']);
  const updated = noUndefined<number>(() => raw['updated']);
  const lastChange = noUndefined<number>(() => raw['last_change']);
  const genres = noUndefined<string[]>(() => raw['genres']);
  const description = noUndefined<string>(() => raw['description']);
  const inFavorites = noUndefined<number>(() => raw['in_favorites']);

  /* Names */
  const names = ((): ITitleNames | null => {
    try {
      const names = raw['names'];
      return {
        ru: noUndefined(() => names['ru']),
        en: noUndefined(() => names['en']),
      };
    } catch (e) {
      return null;
    }
  })();

  /* Status */
  const status = ((): ITitleStatus | null => {
    try {
      const status = raw['status'];
      return {
        string: noUndefined<string>(() => status['string']),
        code: noUndefined<TITLE_STATUS_CODES_ENUM>(() => status['code']),
      };
    } catch (e) {
      return null;
    }
  })();

  /* Poster */
  const poster = ((): ITitlePoster | null => {
    try {
      const poster = raw['poster'];
      return {
        url: noUndefined<string>(() => poster['url']),
        updatedTimestamp: noUndefined<number>(
          () => poster['updated_timestamp']
        ),
        rawBase64File: noUndefined<string>(() => poster['raw_base64_file']),
      };
    } catch (e) {
      return null;
    }
  })();

  /* Type */
  const type = ((): ITitleType | null => {
    try {
      const type = raw['type'];
      return {
        fullString: noUndefined<string>(() => type['full_string']),
        code: noUndefined<TITLE_CONTENT_TYPE_CODES_ENUM>(() => type['code']),
        string: noUndefined<string>(() => type['string']),
        series: noUndefined<number>(() => type['series']),
        length: noUndefined<string>(() => type['length']),
      };
    } catch (e) {
      return null;
    }
  })();

  /* Team */
  const team = ((): ITitleTeam | null => {
    try {
      const team = raw['team'];
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

  /* Season */
  const season = ((): ITitleSeason | null => {
    try {
      const season = raw['season'];
      return {
        code: noUndefined<TITLE_SEASON_CODES_ENUM>(() => season['code']),
        string: noUndefined<string>(() => season['string']),
        year: noUndefined<number>(() => season['year']),
        weekDay: noUndefined<number>(() => season['week_day']),
      };
    } catch (e) {
      return null;
    }
  })();

  /* Blocked */
  const blocked = ((): ITitleBlocked | null => {
    try {
      const blocked = raw['blocked'];
      return {
        blocked: noUndefined<boolean>(() => blocked['blocked']),
        bakanim: noUndefined<boolean>(() => blocked['bakanim']),
      };
    } catch (e) {
      return null;
    }
  })();

  /* Player */
  const player = ((): ITitlePlayer | null => {
    try {
      const player = raw['player'];
      return {
        alternativePlayer: noUndefined<string>(
          () => player['alternative_player']
        ),
        host: noUndefined<string>(() => player['host']),
        series: noUndefined<IPlayerSeries>(() => ({
          first: player['series']['first'],
          last: player['series']['last'],
          string: player['series']['string'],
        })),
        playlist: noUndefined<IPlayerPlaylist>(() => {
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

  return {
    id,
    code,
    announce,
    updated,
    lastChange,
    genres,
    description,
    inFavorites,
    /* nested */
    names,
    status,
    poster,
    type,
    team,
    season,
    blocked,
    player,
  };
}

export default hop;
