// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ITitle } from '../typings/DatabaseTypes';
import {
  IGetUpdatesQueryParams,
  IYouTubeVideo,
  IGetYouTubeQueryParams,
} from '../typings/UpdatesTypes';
import URLBuilder from '../core/URLBuilder';
import { API_ENDPOINTS_ENUM } from '../constants/API_ENDPOINTS_ENUM';
import UpdatesQueryBuilder from '../core/UpdatesQueryBuilder';
import YouTubeQueryBuilder from '../core/YouTubeQueryBuilder';
import hop from '../functions/hop';
import youtubeTransform from '../functions/youtubeTransform';

export default class Updates {
  private readonly _useHttps: boolean;
  private readonly _baseURL: string;

  constructor(baseURL: string, useHttps = true) {
    this._baseURL = baseURL;
    this._useHttps = useHttps;
  }

  getFeed(): never {
    throw new Error('Not implemented');
  }

  getYouTube(query?: IGetYouTubeQueryParams): Promise<IYouTubeVideo[] | null> {
    // Create URLBuilder instance and set used API endpoint
    const U_BUILDER = new URLBuilder(this._baseURL, this._useHttps);
    U_BUILDER.useEndpoint(API_ENDPOINTS_ENUM.GET_YOUTUBE);

    // Add query params if needed
    if (typeof query !== 'undefined') {
      const Q_BUILDER = new YouTubeQueryBuilder();
      Q_BUILDER.filter(query.filter)
        .remove(query.remove)
        .limit(query.limit)
        .since(query.since)
        .after(query.after);
      U_BUILDER.useQuery(Q_BUILDER.build());
    }

    // Build summary URL
    const SUMMARY_URL = U_BUILDER.build();

    // Send request
    return new Promise((resolve, reject) => {
      fetch(SUMMARY_URL)
        .then((response) => response.json())
        .then((videos) => {
          resolve(videos.map((video) => youtubeTransform(video)));
        })
        .catch((e) => reject(e));
    });
  }

  getUpdates(query?: IGetUpdatesQueryParams): Promise<ITitle[] | null> {
    // Create URLBuilder instance and set used API endpoint
    const U_BUILDER = new URLBuilder(this._baseURL, this._useHttps);
    U_BUILDER.useEndpoint(API_ENDPOINTS_ENUM.GET_UPDATES);

    // Add query params if needed
    if (typeof query !== 'undefined') {
      const Q_BUILDER = new UpdatesQueryBuilder();
      Q_BUILDER.filter(query.filter)
        .remove(query.remove)
        .include(query.include)
        .limit(query.limit)
        .since(query.since)
        .descriptionType(query.descriptionType)
        .playlistType(query.playlistType)
        .after(query.after);
      U_BUILDER.useQuery(Q_BUILDER.build());
    }

    // Build summary URL
    const SUMMARY_URL = U_BUILDER.build();

    // Send request
    return new Promise((resolve, reject) => {
      fetch(SUMMARY_URL)
        .then((response) => response.json())
        .then((updates) => {
          resolve(updates.map((title) => hop(title)));
        })
        .catch((e) => reject(e));
    });
  }
}
