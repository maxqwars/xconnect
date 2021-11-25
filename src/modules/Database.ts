// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as DatabaseTypes from '../typings/DatabaseTypes';
import URLBuilder from '../core/URLBuilder';
import hop from '../functions/hop';
import TitleQueryBuilder from '../core/TitleQueryBuilder';
import { API_ENDPOINTS_ENUM } from '../constants/API_ENDPOINTS_ENUM';

/*
 * TODO: Add fetch() error handing
 * TODO: Add API error handing
 */

export default class Database {
  private readonly _baseURL: string;
  private readonly _useHttps: boolean;

  constructor(baseURL: string, useHttps = true) {
    this._baseURL = baseURL;
    this._useHttps = useHttps;
  }

  private _buildFetchPromise(
    url: string
  ): Promise<DatabaseTypes.ITitle | null> {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(hop(data)))
        .catch((e) => reject(e));
    });
  }

  public getRandomTitle(
    query?: DatabaseTypes.ITitleQueryParams
  ): Promise<DatabaseTypes.ITitle | null> {
    const U_BUILDER = new URLBuilder(this._baseURL, this._useHttps);
    const Q_BUILDER = new TitleQueryBuilder();

    U_BUILDER.useEndpoint(API_ENDPOINTS_ENUM.GET_RANDOM_TITLE);

    if (typeof query !== 'undefined') {
      Q_BUILDER.filter(query.filter)
        .remove(query.remove)
        .include(query.include)
        .descriptionType(query.descriptionType)
        .playlistType(query.playlistType);
      U_BUILDER.useQuery(Q_BUILDER.build());
    }

    const SUMMARY_URL = U_BUILDER.build();
    return this._buildFetchPromise(SUMMARY_URL);
  }

  getTitle(
    query: DatabaseTypes.ITitleQueryParams
  ): Promise<DatabaseTypes.ITitle | null> {
    const U_BUILDER = new URLBuilder(this._baseURL, this._useHttps);
    const Q_BUILDER = new TitleQueryBuilder();

    U_BUILDER.useEndpoint(API_ENDPOINTS_ENUM.GET_TITLE);

    if (typeof query !== 'undefined') {
      Q_BUILDER.id(query.id)
        .code(query.code)
        .torrentId(query.torrentId)
        .filter(query.filter)
        .remove(query.remove)
        .include(query.include)
        .descriptionType(query.descriptionType)
        .playlistType(query.playlistType);
      U_BUILDER.useQuery(Q_BUILDER.build());
    }

    const SUMMARY_URL = U_BUILDER.build();
    return this._buildFetchPromise(SUMMARY_URL);
  }

  getYears(): Promise<number[]> {
    const U_BUILDER = new URLBuilder(this._baseURL, this._useHttps);

    const SUMMARY_URL = U_BUILDER.useEndpoint(
      API_ENDPOINTS_ENUM.GET_YEARS
    ).build();

    return new Promise((resolve, reject) => {
      fetch(SUMMARY_URL)
        .then((response) => response.json())
        .then((years) => resolve(years))
        .catch((e) => reject(e));
    });
  }

  getGenres(): Promise<number[]> {
    const U_BUILDER = new URLBuilder(this._baseURL, this._useHttps);

    const SUMMARY_URL = U_BUILDER.useEndpoint(
      API_ENDPOINTS_ENUM.GET_GENRES
    ).build();

    return new Promise((resolve, reject) => {
      fetch(SUMMARY_URL)
        .then((response) => response.json())
        .then((genres) => resolve(genres))
        .catch((e) => reject(e));
    });
  }
}
