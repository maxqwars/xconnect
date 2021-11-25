// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ITitle } from '../typings/DatabaseTypes';
import { IGetUpdatesQueryParams } from '../typings/UpdatesTypes';
import URLBuilder from '../core/URLBuilder';
import { API_ENDPOINTS_ENUM } from '../constants/API_ENDPOINTS_ENUM';
import UpdatesQueryBuilder from '../core/UpdatesQueryBuilder';
import hop from '../functions/hop';

export default class Updates {
  private readonly _useHttps: boolean;
  private readonly _baseURL: string;

  constructor(baseURL: string, useHttps = true) {
    this._baseURL = baseURL;
    this._useHttps = useHttps;
  }

  getUpdates(query?: IGetUpdatesQueryParams): Promise<ITitle[]> {
    const U_BUILDER = new URLBuilder(this._baseURL, this._useHttps);

    U_BUILDER.useEndpoint(API_ENDPOINTS_ENUM.GET_UPDATES);

    if (typeof query !== 'undefined') {
      const Q_BUILDER = new UpdatesQueryBuilder();
      Q_BUILDER.filter(query.filter)
        .remove(query.remove)
        .include(query.include)
        .limit(query.limit)
        .since(query.since)
        .descriptionType(query.descriptionType)
        .playlistType(query.playlistType)
        .after(query.after);
      U_BUILDER.useQuery(Q_BUILDER.build());
    }

    const SUMMARY_URL = U_BUILDER.build();

    return new Promise((resolve, reject) => {
      fetch(SUMMARY_URL)
        .then((response) => response.json())
        .then((updates) => {
          resolve(updates.map((title) => hop(title)));
        })
        .catch((e) => reject(e));
    });
  }
}
