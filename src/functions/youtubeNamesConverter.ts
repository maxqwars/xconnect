// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { IYouTubeVideo } from '../typings/UpdatesTypes';
import noUndefined from '../utils/noUndefined';

export default function youtubeNamesConverter(source: {
  [key: string]: unknown;
}): IYouTubeVideo {
  const id = noUndefined<number>(() => source['id']);
  const title = noUndefined<string>(() => source['title']);
  const image = noUndefined<string>(() => source['image']);
  const youtubeId = noUndefined<string>(() => source['youtube_id']);
  const timestamp = noUndefined<number>(() => source['timestamp']);
  const comments = noUndefined<number>(() => source['comments']);
  const views = noUndefined<number>(() => source['views']);

  return {
    id,
    title,
    image,
    youtubeId,
    timestamp,
    comments,
    views,
  };
}
