// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { API_ENDPOINTS_ENUM } from '../constants/API_ENDPOINTS_ENUM';

/**
 * This class is responsible for building the URL of the API request.
 * Includes a method for selecting an API endpoint and adding request parameters.
 *
 * @export
 * @class URLBuilder
 */
export default class URLBuilder {
  /**
   * API server base URL
   *
   * @private
   * @type {string}
   * @memberof URLBuilder
   */
  private readonly _baseUrl: string;

  /**
   * Use security transfer protocol boolean flag
   *
   * @private
   * @type {boolean}
   * @memberof URLBuilder
   */
  private readonly _useHttps: boolean;

  private _endpoint: string;
  private _query: string;

  /**
   * Creates an instance of URLBuilder.
   *
   * ```
   *  const urlBuilder = new URLBuilder('api.server.com/v2/', true)
   * ```
   *
   * @param {string} baseUrl API server base URL.
   * @param {boolean} [useHttps=true] Use security transfer protocol boolean flag. Default **_true_**
   * @memberof URLBuilder
   */
  constructor(baseUrl: string, useHttps = true) {
    this._baseUrl = baseUrl;
    this._endpoint = '';
    this._query = '';
    this._useHttps = useHttps;
  }

  private _isEmptyString(str: string): boolean {
    return !str || str.length === 0;
  }

  /**
   * Set used API endpoint (getTitle, getFeed, searchTitles...)
   *
   * @param {API_ENDPOINTS_ENUM} endpoint
   * @return {*}  {URLBuilder}
   * @memberof URLBuilder
   */
  useEndpoint(endpoint: API_ENDPOINTS_ENUM): URLBuilder {
    this._endpoint = endpoint;
    return this;
  }

  /**
   * Set URL query params
   * Use a third-party builder to build the request parameters. (GetFeedQueryBuilder, SearchTitlesQueryBuilder, etc)
   *
   * @param {string} query Query params string
   * @return {*}  {URLBuilder}
   * @memberof URLBuilder
   */
  useQuery(query: string): URLBuilder {
    this._query = query;
    return this;
  }

  /**
   * Build summary request URL
   *
   * @return {*}  {string}
   * @memberof URLBuilder
   */
  build(): string {
    let url = '';
    url += this._useHttps ? 'https://' : 'http://';
    url += this._baseUrl;
    url += this._endpoint;
    url += !this._isEmptyString(this._query) ? `?${this._query}` : '';
    return url;
  }
}
