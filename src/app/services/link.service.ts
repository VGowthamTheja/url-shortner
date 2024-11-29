import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BitlyResponse } from '../model/link.type';

@Injectable({
  providedIn: 'root',
})
export class LinkService {
  http = inject(HttpClient);

  constructor() {}

  postLongUrlToBitly(long_url: string) {
    const url = `https://api-ssl.bitly.com/v4/shorten`;
    return this.http.post<BitlyResponse>(
      url,
      JSON.stringify({
        long_url,
        domain: 'bit.ly',
      }),
      {
        headers: {
          Authorization: `Bearer ${'Your personal Bitly Access Token'}`,
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
