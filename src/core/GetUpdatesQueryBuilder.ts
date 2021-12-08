// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import GetRandomTitleQueryBuilder from './GetRandomTitleQueryBuilder';

export default class GetUpdatesQueryBuilder extends GetRandomTitleQueryBuilder {
  public limit(value?: number): GetUpdatesQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['limit']: value,
      });
    }
    return this;
  }

  public since(value?: number): GetUpdatesQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['since']: value,
      });
    }
    return this;
  }

  public after(value?: number): GetUpdatesQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['after']: value,
      });
    }
    return this;
  }
}
