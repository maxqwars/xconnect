// Copyright (c) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export default function noUndefined<T>(fn: CallableFunction): T | null {
  try {
    const result = fn();
    return result !== null && typeof result !== 'undefined'
      ? (result as T)
      : null;
  } catch (e) {
    return null;
  }
}
