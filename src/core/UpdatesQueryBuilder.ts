// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import BaseQueryBuilder from '../private/BaseQueryBuilder';
import {
  DESCRIPTION_TYPE_ENUM,
  PLAYLIST_TYPE_ENUM,
  TITLE_INCLUDE_RESOURCES_ENUM,
} from '../typings/DatabaseTypes';

export default class UpdatesQueryBuilder extends BaseQueryBuilder {
  public filter(value?: string[]): UpdatesQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['filter']: value,
      });
    }

    return this;
  }

  public remove(value?: string[]): UpdatesQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['remove']: value,
      });
    }

    return this;
  }

  public include(value?: TITLE_INCLUDE_RESOURCES_ENUM[]): UpdatesQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['include']: [...value],
      });
    }

    return this;
  }

  public limit(value?: number): UpdatesQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['limit']: value,
      });
    }

    return this;
  }

  public since(value?: number): UpdatesQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['since']: value,
      });
    }

    return this;
  }

  public descriptionType(value?: DESCRIPTION_TYPE_ENUM): UpdatesQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['description_type']: value,
      });
    }

    return this;
  }

  public playlistType(value?: PLAYLIST_TYPE_ENUM): UpdatesQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['playlist_type']: value,
      });
    }

    return this;
  }

  public after(value?: number): UpdatesQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['after']: value,
      });
    }

    return this;
  }
}
