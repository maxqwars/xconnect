// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ITitle } from '../typings/DatabaseTypes';
import URLBuilder from '../core/URLBuilder';
import { API_ENDPOINTS_ENUM } from '../constants/API_ENDPOINTS_ENUM';
import { ISearchTitleQueryParams } from '../typings/SearchTypes';
import SearchQueryBuilder from '../core/SearchQueryBuilder';
import hop from '../functions/hop';

export default class Search {
  private readonly _useHttps: boolean;
  private readonly _baseURL: string;

  constructor(baseURL: string, useHttps = true) {
    this._baseURL = baseURL;
    this._useHttps = useHttps;
  }

  searchTitles(query: ISearchTitleQueryParams): Promise<ITitle | null> {
    // Create URLBuilder instance and set used API endpoint
    const U_BUILDER = new URLBuilder(this._baseURL, this._useHttps);
    U_BUILDER.useEndpoint(API_ENDPOINTS_ENUM.SEARCH_TITLES);

    // Add query params if needed
    if (typeof query !== 'undefined') {
      const Q_BUILDER = new SearchQueryBuilder();
      Q_BUILDER.search(query.search)
        .limit(query.limit)
        .after(query.after)
        .year(query.year)
        .seasonCode(query.seasonCode)
        .genres(query.genres)
        .voice(query.voice)
        .translator(query.translator)
        .editing(query.editing)
        .decor(query.decor)
        .timing(query.timing)
        .filter(query.filter)
        .remove(query.remove)
        .include(query.include)
        .descriptionType(query.descriptionType)
        .playlistType(query.playlistType);
      U_BUILDER.useQuery(Q_BUILDER.build());
    }

    // Build summary URL
    const SUMMARY_URL = U_BUILDER.build();

    // Send request
    return new Promise((resolve, reject) => {
      fetch(SUMMARY_URL)
        .then((response) => response.json())
        .then((results) => {
          resolve(results.map((title) => hop(title)));
        })
        .catch((e) => reject(e));
    });
  }
}
