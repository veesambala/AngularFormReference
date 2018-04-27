import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http} from '@angular/http';

@Injectable()
export class SvgIconRegistryService {
  private _icons = new Map<string, string>();
  private _loadingIcons = new Map<string, Observable<string>>();

  constructor(
    private _http: Http
  ) { }

  public loadSvg(url: string): Observable<string> {
    if (this._icons.has(url)) {
      return Observable.of(this._icons.get(url));
    }

    if (this._loadingIcons.has(url)) {
      return this._loadingIcons.get(url);
    }

    let request = this._http.get(url)
      .map((response) => {
        return response.text();
      })
      .do((svg) => {
        this._icons.set(url, svg);
      })
      .finally(() => {
        this._loadingIcons.delete(url);
      })
      .share();

    this._loadingIcons.set(url, request);

    return request;
  }

  public unloadSvg(url: string): void {
    if (this._icons.has(url)) {
      this._icons.delete(url);
    }
  }
}