// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import CoreQueryBuilder from './CoreQueryBuilder';
import { DESC_TYPE_ENUM } from '../constants/DESC_TYPE_ENUM';
import { INCLUDE_RESOURCE_ENUM } from '../constants/INCLUDE_RESOURCE_ENUM';
import { PLAYLIST_TYPE_ENUM } from '../constants/PLAYLIST_TYPE_ENUM';

/**
 * Query params builder for getRandomTitle
 *
 * @export
 * @class GetRandomTitleQueryBuilder
 * @extends {CoreQueryBuilder}
 */
export default class GetRandomTitleQueryBuilder extends CoreQueryBuilder {
  public filter(value?: string[]): GetRandomTitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['filter']: value,
      });
    }
    return this;
  }

  public remove(value?: string[]): GetRandomTitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['remove']: value,
      });
    }
    return this;
  }

  public include(value?: INCLUDE_RESOURCE_ENUM[]): GetRandomTitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['include']: [...value],
      });
    }
    return this;
  }

  public descriptionType(value?: DESC_TYPE_ENUM): GetRandomTitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['description_type']: value,
      });
    }
    return this;
  }

  playlistType(value?: PLAYLIST_TYPE_ENUM): GetRandomTitleQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['playlist_type']: value,
      });
    }
    return this;
  }
}
