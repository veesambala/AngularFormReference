import { Injectable } from '@angular/core';
import {
    ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers,
    XHRBackend
} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { StaticUtils } from '../static-utils';

/**
 * This service will extend all the http service call to add auth headers
 */
@Injectable()
export class PlatformHttpService extends Http {

    /**
     * Widget token which has to be sent as Api-Authorization,
     */
    public widgetJwtToken: string = '';
    /**
     * API Key which has to be sent as X-Api-Key
     */
    public apiKey: string = '';

    constructor(
        backend: XHRBackend,
        defaultOptions: RequestOptions
    ) {
        super(backend, defaultOptions);

        this.widgetJwtToken = StaticUtils.queryParams.jwt ? StaticUtils.queryParams.jwt : '';
        this.apiKey = StaticUtils.queryParams.pi ? StaticUtils.queryParams.pi : '';
    }
    /**
     *
     * @param url : request resource URL
     * @param options : request headers
     */
    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        if (url instanceof Request) {
            url.headers = this.getRequestOptionArgs(url).headers;
        }

        return super.request(url, options);
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('X-Api-Key', this.apiKey.trim());
        options.headers.append('X-App-Id', (StaticUtils.isMobile ? StaticUtils.MOBILE_X_APP_ID : StaticUtils.DESKTOP_X_APP_ID));
        options.headers.append('Api-Authorization', 'Bearer ' + this.widgetJwtToken.trim());

        if (StaticUtils.queryParams.nocacheapi) {
            options.headers.append('Cache-Control', 'max-age=0');
        }

        return options;
    }
}
