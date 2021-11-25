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

export default class TitleQueryBuilder extends BaseQueryBuilder {
  public id(value?: number): TitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['id']: value,
      });
    }

    return this;
  }

  public code(value?: string): TitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['code']: value,
      });
    }
    return this;
  }

  public torrentId(value?: number): TitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['torrent_id']: value,
      });
    }
    return this;
  }

  public filter(value?: string[]): TitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['filter']: value,
      });
    }
    return this;
  }

  public remove(value?: string[]): TitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['remove']: value,
      });
    }
    return this;
  }

  public include(value?: TITLE_INCLUDE_RESOURCES_ENUM[]): TitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['include']: [...value],
      });
    }
    return this;
  }

  public descriptionType(value?: DESCRIPTION_TYPE_ENUM): TitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['description_type']: value,
      });
    }
    return this;
  }

  playlistType(value?: PLAYLIST_TYPE_ENUM): TitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['playlist_type']: value,
      });
    }
    return this;
  }
}
