// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as DatabaseTypes from '../typings/DatabaseTypes';
import * as UpdatesTypes from '../typings/UpdatesTypes';

import { API_ENDPOINTS_ENUM } from '../constants/API_ENDPOINTS_ENUM';
import CoreModule from './CoreModule';
import GetUpdatesQueryBuilder from '../core/GetUpdatesQueryBuilder';
import GetYouTubeQueryBuilder from '../core/GetYouTubeQueryBuilder';
import UrlBuilder from '../core/UrlBuilder';
import youtubeNamesConverter from '../functions/youtubeNamesConverter';
import { titleNamesConverter } from '..';

export default class Updates extends CoreModule {
  constructor(baseUrl: string, useHttps = true) {
    super(baseUrl, useHttps);
  }

  public async getFeed(): Promise<never> {
    throw new Error('Not Implemented');
  }

  public async getYouTube(
    query?: UpdatesTypes.IGetYouTubeQueryParams
  ): Promise<UpdatesTypes.IYouTubeVideo[] | null> {
    const U_BUILD = new UrlBuilder(this._baseUrl, this._useHttps);
    U_BUILD.useEndpoint(API_ENDPOINTS_ENUM.GET_YOUTUBE);

    if (typeof query !== 'undefined') {
      const Q_BUILD = new GetYouTubeQueryBuilder();
      const { filter, remove, limit, since, after } = query;

      Q_BUILD.filter(filter)
        .remove(remove)
        .limit(limit)
        .since(since)
        .after(after);

      U_BUILD.useQuery(Q_BUILD.build());
    }

    const SUM_URL = U_BUILD.build();

    try {
      const res = await (await fetch(SUM_URL)).json();
      return res.map((src) => youtubeNamesConverter(src));
    } catch (e) {
      return null;
    }
  }

  public async getUpdates(
    query?: UpdatesTypes.IGetUpdatesQueryParams
  ): Promise<DatabaseTypes.ITitle[] | null> {
    const U_BUILD = new UrlBuilder(this._baseUrl, this._useHttps);
    U_BUILD.useEndpoint(API_ENDPOINTS_ENUM.GET_UPDATES);

    if (typeof query !== 'undefined') {
      const Q_BUILD = new GetUpdatesQueryBuilder();
      const {
        filter,
        remove,
        include,
        limit,
        since,
        descriptionType,
        playlistType,
        after,
      } = query;

      Q_BUILD.limit(limit)
        .since(since)
        .after(after)
        .filter(filter)
        .remove(remove)
        .include(include)
        .descriptionType(descriptionType)
        .playlistType(playlistType);

      U_BUILD.useQuery(Q_BUILD.build());
    }

    const SUM_URL = U_BUILD.build();

    try {
      const res = await (await fetch(SUM_URL)).json();
      return res.map((src) => titleNamesConverter(src));
    } catch (e) {
      return null;
    }
  }
}
