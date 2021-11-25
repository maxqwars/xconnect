// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { IYouTubeVideo } from '../typings/UpdatesTypes';
import noUndefined from './noUndefined';

export default function youtubeTransform(raw: {
  [key: string]: unknown;
}): IYouTubeVideo {
  const id = noUndefined<number>(() => raw['id']);
  const title = noUndefined<string>(() => raw['title']);
  const image = noUndefined<string>(() => raw['image']);
  const youtubeId = noUndefined<string>(() => raw['youtube_id']);
  const timestamp = noUndefined<number>(() => raw['timestamp']);

  return {
    id,
    title,
    image,
    youtubeId,
    timestamp,
  };
}
