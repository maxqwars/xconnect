// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export default class CoreModule {
  protected readonly _baseUrl: string;
  protected readonly _useHttps: boolean;

  constructor(baseUrl: string, useHttps = true) {
    this._baseUrl = baseUrl;
    this._useHttps = useHttps;
  }
}
