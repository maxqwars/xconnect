// Copyright (c) 2021 Maxim "maxqwars" Maximenko
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { default as TitleQueryBuilder } from '../core/TitleQueryBuilder';
import {
  DESCRIPTION_TYPE_ENUM,
  PLAYLIST_TYPE_ENUM,
  TITLE_INCLUDE_RESOURCES_ENUM,
} from '../typings/DatabaseTypes';

test('TitleQueryBuilder', () => {
  const QUERY_BUILD = new TitleQueryBuilder();

  QUERY_BUILD.id(1);
  expect(QUERY_BUILD.build().match('1')).not.toBe('');

  QUERY_BUILD.code('lorem');
  expect(QUERY_BUILD.build().match('lorem')).not.toBe('');

  QUERY_BUILD.torrentId(1);
  expect(QUERY_BUILD.build().match('1')).not.toBe('');

  QUERY_BUILD.filter(['1', '2']);
  expect(QUERY_BUILD.build().match('[1, 2]')).not.toBe('');

  QUERY_BUILD.remove(['1', '2']);
  expect(QUERY_BUILD.build().match('[1, 2]')).not.toBe('');

  QUERY_BUILD.include([TITLE_INCLUDE_RESOURCES_ENUM.RAW_POSTER]);
  expect(QUERY_BUILD.build().match('[raw_poster]')).not.toBe('');

  QUERY_BUILD.descriptionType(DESCRIPTION_TYPE_ENUM.PLAIN);
  expect(QUERY_BUILD.build().match('1')).not.toBe('');

  QUERY_BUILD.playlistType(PLAYLIST_TYPE_ENUM.ARRAY);
  expect(QUERY_BUILD.build().match('1')).not.toBe('');
});
