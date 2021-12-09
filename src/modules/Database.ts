// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import * as DatabaseTypes from '../typings/DatabaseTypes';

import { API_ENDPOINTS_ENUM } from '../constants/API_ENDPOINTS_ENUM';
import CoreModule from './CoreModule';
import GetRandomTitleQueryBuilder from '../core/GetRandomTitleQueryBuilder';
import GetTitleQueryBuilder from '../core/GetTitleQueryBuilder';
import GetTitlesQueryBuilder from '../core/GetTitlesQueryBuilder';
import UrlBuilder from '../core/UrlBuilder';
import titleNamesConverter from '../functions/titleNamesConverter';

/**
 * Модуль для работы с базой данных релизов.
 * Позволяет вызывать методы API:
 * - getRandomTitle: Возвращает случайный релиз
 * - getTitle: Возвращает конкретный релиз
 * - getTitles: Возвращает несколько релизов за один запрос
 * - getYears: Возвращает список доступных годов
 * - getGenres: Возвращает список всех доступных жанров
 *
 * @export
 * @class Database
 * @extends {CoreModule}
 */
export default class Database extends CoreModule {
  /**
   * Создает экземпляр Database
   *
   * @param {string} baseUrl Базовый URL (домен). Без указания протокола, пример: api.anilibria.tv/v2/
   * @param {boolean} [useHttps=true] Использовать ли защищенное соединение (https)
   * @memberof Database
   */
  constructor(baseUrl: string, useHttps = true) {
    super(baseUrl, useHttps);
  }

  /**
   * Возвращает случайный релиз из базы данных
   *
   * @param {DatabaseTypes.IGetTitleQueryParams} [query] Опциональные параметры запроса
   * @return {*}  {(Promise<DatabaseTypes.ITitle | null>)} Результат запроса, данные о релизе если удачно и null при ошибке.
   * @memberof Database
   */
  public async getRandomTitle(
    query?: DatabaseTypes.IGetTitleQueryParams
  ): Promise<DatabaseTypes.ITitle | null> {
    const U_BUILD = new UrlBuilder(this._baseUrl, this._useHttps);
    U_BUILD.useEndpoint(API_ENDPOINTS_ENUM.GET_RANDOM_TITLE);

    if (typeof query !== 'undefined') {
      const Q_BUILD = new GetRandomTitleQueryBuilder();
      const { filter, remove, include, descriptionType, playlistType } = query;

      Q_BUILD.filter(filter)
        .remove(remove)
        .include(include)
        .descriptionType(descriptionType)
        .playlistType(playlistType);

      U_BUILD.useQuery(Q_BUILD.build());
    }

    const SUM_URL = U_BUILD.build();

    try {
      return titleNamesConverter(await (await fetch(SUM_URL)).json());
    } catch (e) {
      return null;
    }
  }

  /**
   * Получить информацию о релизе по **_id_** или **_коду_**
   *
   * @param {DatabaseTypes.IGetTitleQueryParams} [query] Опциональные параметры запроса
   * @return {*}  {(Promise<DatabaseTypes.ITitle | null>)} Результат запроса, данные о релизе если удачно и null при ошибке.
   * @memberof Database
   */
  public async getTitle(
    query?: DatabaseTypes.IGetTitleQueryParams
  ): Promise<DatabaseTypes.ITitle | null> {
    const U_BUILD = new UrlBuilder(this._baseUrl, this._useHttps);
    U_BUILD.useEndpoint(API_ENDPOINTS_ENUM.GET_TITLE);

    if (typeof query !== 'undefined') {
      const Q_BUILD = new GetTitleQueryBuilder();
      const {
        filter,
        remove,
        include,
        descriptionType,
        playlistType,
        id,
        code,
        torrentId,
      } = query;

      Q_BUILD.code(code)
        .id(id)
        .torrentId(torrentId)
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
      return typeof res['error'] !== 'undefined'
        ? null
        : titleNamesConverter(res);
    } catch (e) {
      return null;
    }
  }

  /**
   * Возвращает несколько релизов за один запрос, используя список **_кодов_** или **_id_**
   *
   * @param {DatabaseTypes.IGetTitlesQueryParams} [query]
   * @return {*}  {(Promise<DatabaseTypes.ITitle[] | null>)}
   * @memberof Database
   */
  public async getTitles(
    query?: DatabaseTypes.IGetTitlesQueryParams
  ): Promise<DatabaseTypes.ITitle[] | null> {
    const U_BUILD = new UrlBuilder(this._baseUrl, this._useHttps);
    U_BUILD.useEndpoint(API_ENDPOINTS_ENUM.GET_TITLES);

    if (typeof query !== 'undefined') {
      const Q_BUILD = new GetTitlesQueryBuilder();
      const {
        filter,
        remove,
        include,
        descriptionType,
        playlistType,
        idList,
        codeList,
      } = query;

      Q_BUILD.idList(idList)
        .codeList(codeList)
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
      return typeof res['error'] !== 'undefined'
        ? null
        : res.map((title) => titleNamesConverter(title));
    } catch (e) {
      return null;
    }
  }

  public async getYears(): Promise<number[] | null> {
    const U_BUILD = new UrlBuilder(this._baseUrl, this._useHttps);
    U_BUILD.useEndpoint(API_ENDPOINTS_ENUM.GET_YEARS);

    try {
      return await (await fetch(U_BUILD.build())).json();
    } catch (e) {
      return null;
    }
  }

  public async getGenres(): Promise<string[] | null> {
    const U_BUILD = new UrlBuilder(this._baseUrl, this._useHttps);
    U_BUILD.useEndpoint(API_ENDPOINTS_ENUM.GET_GENRES);

    try {
      return await (await fetch(U_BUILD.build())).json();
    } catch (e) {
      return null;
    }
  }
}
