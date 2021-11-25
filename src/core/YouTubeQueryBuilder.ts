// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import BaseQueryBuilder from '../private/BaseQueryBuilder';

export default class YouTubeQueryBuilder extends BaseQueryBuilder {
  public filter(value?: string[]): YouTubeQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['filter']: value,
      });
    }

    return this;
  }

  public remove(value?: string[]): YouTubeQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['remove']: value,
      });
    }

    return this;
  }

  public limit(value?: number): YouTubeQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['limit']: value,
      });
    }

    return this;
  }

  public since(value?: number): YouTubeQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['since']: value,
      });
    }

    return this;
  }

  public after(value?: number): YouTubeQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['after']: value,
      });
    }

    return this;
  }
}
