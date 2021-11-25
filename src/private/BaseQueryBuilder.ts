// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export default abstract class BaseQueryBuilder {
  protected _buffer: { [key: string]: unknown };
  protected _addQuery(slice: { [key: string]: unknown }): void {
    this._buffer = {
      ...this._buffer,
      ...slice,
    };
  }

  build(): string {
    return Object.keys(this._buffer)
      .map((key) => {
        return key + '=' + this._buffer[key];
      })
      .join('&');
  }
}
