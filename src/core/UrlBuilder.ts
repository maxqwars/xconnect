// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { API_ENDPOINTS_ENUM } from '../constants/API_ENDPOINTS_ENUM';

export default class UrlBuilder {
  private readonly _baseUrl: string;
  private readonly _useHttps: boolean;

  private _endpoint: API_ENDPOINTS_ENUM;
  private _query: string;

  constructor(baseUrl: string, useHttps = true) {
    this._baseUrl =
      baseUrl[baseUrl.length - 1] !== '/' ? baseUrl + '/' : baseUrl;

    this._useHttps = useHttps;
    this._endpoint = API_ENDPOINTS_ENUM.NONE;
    this._query = '';
  }

  private _isEmptyString(string: string): boolean {
    return !string || string.length === 0;
  }

  public useEndpoint(endpoint: API_ENDPOINTS_ENUM): UrlBuilder {
    this._endpoint = endpoint;
    return this;
  }

  public useQuery(query: string): UrlBuilder {
    this._query = query;
    return this;
  }

  public build(): string | never {
    if (this._endpoint === API_ENDPOINTS_ENUM.NONE) {
      throw Error('Set API endpoint before build request url!');
    }

    let url = '';
    url += this._useHttps ? 'https://' : 'http://';
    url += this._baseUrl;
    url += this._endpoint;
    url += !this._isEmptyString(this._query) ? `?${this._query}` : '';

    return url;
  }
}
