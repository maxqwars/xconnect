// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import GetRandomTitleQueryBuilder from './GetRandomTitleQueryBuilder';

export default class GetTitlesQueryBuilder extends GetRandomTitleQueryBuilder {
  public idList(value?: number[]): GetTitlesQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['id_list']: value,
      });
    }
    return this;
  }

  public codeList(value?: string[]): GetTitlesQueryBuilder {
    if (typeof value !== 'undefined') {
      super._addQuery({
        ['code_list']: value,
      });
    }
    return this;
  }
}
