// Copyright (c) 2021 Maxim "maxqwars" Maximenko
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import DATA from '../../mocks/lorem.json';
import toTitleConverter from '../functions/hop';

describe('Full object', () => {
  const release = toTitleConverter(DATA);

  test('Processing simple properties', () => {
    expect(release.id).toBeTruthy();
    expect(release.code).toBeTruthy();
    expect(release.description).toBeTruthy();
    expect(release.inFavorites).toBeTruthy();
    expect(release.announce).toBeFalsy();
    expect(release.lastChange).toBeTruthy();
    expect(release.genres).toBeTruthy();
  });

  test('Processing names', () => {
    expect(release.names).toBeTruthy();
    expect(release.names.ru).toBeTruthy();
    expect(release.names.en).toBeTruthy();
  });

  test('Processing status', () => {
    expect(release.status).toBeTruthy();
    expect(release.status.code).toBeTruthy();
    expect(release.status.string).toBeTruthy();
  });

  test('Processing poster', () => {
    expect(release.poster).toBeTruthy();
    expect(release.poster.url).toBeTruthy();
    expect(release.poster.updatedTimestamp).toBeTruthy;
    expect(release.poster.rawBase64File).toBeFalsy;
  });

  test('Processing type', () => {
    expect(release.type).toBeTruthy();
    expect(release.type.fullString).toBeTruthy();
    expect(release.type.code).toBeTruthy();
    expect(release.type.string).toBeTruthy();
    expect(release.type.series).toBeTruthy();
    expect(release.type.length).toBeTruthy();
  });

  // TODO: Add team processing tests
  // TODO: Add season processing tests
  // TODO: Add blocked processing tests
  // TODO: Add player processing tests
});
