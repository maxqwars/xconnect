// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import GetRandomTitleQueryBuilder from './GetRandomTitleQueryBuilder';

export default class GetTitleQueryBuilder extends GetRandomTitleQueryBuilder {
  public id(value?: number): GetTitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['id']: value,
      });
    }
    return this;
  }

  public code(value?: string): GetTitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['code']: value,
      });
    }
    return this;
  }

  public torrentId(value?: number): GetTitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['torrent_id']: value,
      });
    }
    return this;
  }
}
