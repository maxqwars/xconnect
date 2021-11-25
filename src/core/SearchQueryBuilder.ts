// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { TITLE_SEASON_CODES_ENUM } from '../typings/DatabaseTypes';
import TitleQueryBuilder from './TitleQueryBuilder';

export default class SearchQueryBuilder extends TitleQueryBuilder {
  public search(value?: string): SearchQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['search']: value,
      });
    }
    return this;
  }

  public limit(value?: number): SearchQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['limit']: value,
      });
    }
    return this;
  }

  public after(value?: number): SearchQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['after']: value,
      });
    }
    return this;
  }

  public year(value?: string[]): SearchQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['year']: value,
      });
    }
    return this;
  }

  public genres(value?: string[]): SearchQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['genres']: value,
      });
    }
    return this;
  }

  public seasonCode(value?: TITLE_SEASON_CODES_ENUM[]): SearchQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['search']: value,
      });
    }
    return this;
  }

  public voice(value?: string[]): SearchQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['voice']: value,
      });
    }
    return this;
  }

  public translator(value?: string[]): SearchQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['translator']: value,
      });
    }
    return this;
  }

  public editing(value?: string[]): SearchQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['editing']: value,
      });
    }
    return this;
  }

  public decor(value?: string[]): SearchQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['decor']: value,
      });
    }
    return this;
  }

  public timing(value?: string[]): SearchQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['timing']: value,
      });
    }
    return this;
  }
}
