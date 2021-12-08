// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import CoreQueryBuilder from './CoreQueryBuilder';

export default class GetYouTubeQueryBuilder extends CoreQueryBuilder {
  public filter(value?: string[]): GetYouTubeQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['filter']: value,
      });
    }
    return this;
  }

  public remove(value?: string[]): GetYouTubeQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['remove']: value,
      });
    }
    return this;
  }

  public limit(value?: number): GetYouTubeQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['limit']: value,
      });
    }
    return this;
  }

  public since(value?: number): GetYouTubeQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['since']: value,
      });
    }
    return this;
  }

  public after(value?: number): GetYouTubeQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['after']: value,
      });
    }
    return this;
  }
}
