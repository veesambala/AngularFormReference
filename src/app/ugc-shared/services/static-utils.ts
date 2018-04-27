import { Observable } from 'rxjs';
import { URLSearchParams } from '@angular/http';

let jwtDecode = require('jwt-decode');

declare const flowplayer;
declare const moment;

/**
 * This class holds all the utils values for the mobile widget
 */
export class StaticUtils {
  /**
   * @type {boolean} true if you are developing locally, will pull the local,
   * mock customizations; false otherwise and for anything running on an environment
   */
  public static IS_LOCALHOST = location.host.indexOf('localhost') > -1;
  public static useLocalStorage: boolean = (window.localStorage) ? true : false;
  public static MOBILE_X_APP_ID: string = '6'; // 6 means mobile widget
  public static DESKTOP_X_APP_ID: string = '5'; // 5 means desktop widget
  public static burstWatermarkLogoUrl: string = 'assets/img/watermark-burst.png';
  public static burstWatermarkClickThroughUrl: string = 'https://www.burst.com';

  /**
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
   *
   * @type {number} key code from the keyboard event on key interaction
   */
  public static ESCAPE_KEYCODE = 27;

  /**
   * List of flowplayer keys which are to be supplied in initializing the flowplayer
   */
  public static flowplayerLicenseKeys: string[] = ['$488948329469964'];

  /**
   * Array of all the supported media types
   */
  public static supportedMediaTypes: string[] = ['VIDEO', 'PHOTO'];

  /**
   * true if code is running on android platform.
   */
  public static isAndroid: boolean = navigator.userAgent.toLowerCase().indexOf('android') > -1;

  /**
   * true if code is running on ios platform.
   */
  public static iOs: boolean = /iphone|ipod|ipad/.test(navigator.userAgent.toString().toLowerCase());

  /**
   * true if code is running on a mobile platform
   */
  public static isMobile: boolean =
  /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());

  /**
   * See https://stackoverflow.com/questions/7944460/detect-safari-browser
   *
   * @type {boolean} true if the current browser is safari
   */
  public static isSafari: boolean = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  public static supportedImageExtensions: string[] =
  ['tif', 'jpeg', 'tiff', 'bmp', 'ico', 'png', 'pix', 'pict', 'jpg', 'svg', 'nef', 'dng', 'cr2'];
  public static supportedVideoExtensions: string[] =
  ['mts', '3gpp', 'mpg', 'ts', 'gif', 'mpe', 'tp', 'ogv', 'ogm', '3gp', 'pcx', 'x3f', 'webm',
  'ogg', 'avi', 'arw', 'mpeg', 'divx', 'wmv', 'mod', 'mkv', 'nsv', 'mov', 'dat', 'asf', 'exr',
  'm4v', 'flv', 'xcf', 'flac', '3ivx', 'tod', 'dv', '3vx', 'mp4', 'vob', 'orf', '3g2', 'asx',
  'mpeg4', 'mrw', 'mxf', 'dvx', 'tga', 'qt', 'f4v', 'mat', 'crw', 'dcr', 'm2ts'];

  /**
   * See https://stackoverflow.com/questions/12410132/html5-video-how-to-test-for-hls-playing-capability-video-canplaytype
   *
   * @param flowplayerConf Javascript object with config for the flowplayer checking if hls is supported
   * @return {boolean} True if hls videos are supported on the current browser, false otherwise
   */
  public static hlsSupported(flowplayerConf): boolean {
    if (!flowplayer) {
      console.error('flowplayer not available for checking hls support');

      return false;
    }

    // first check native support
    if (this._nativeHlsSupport === null) {
      let canPlay = document.createElement('video').canPlayType('application/vnd.apple.mpegURL');
      this._nativeHlsSupport = !!canPlay;
    }

    if (this._nativeHlsSupport) {
      return true;
    }

    // no native support, check hlsjs support
    let hlsSupported = false;

    flowplayer.engines.forEach((engine) => {
      if (engine && engine.engineName === 'hlsjs' && engine.canPlay('application/x-mpegurl', flowplayerConf)) {
        hlsSupported = true;
      }
    });

    return hlsSupported;
  }

  /**
   * Stores all the actual queryparams along with the derived query params from the JWT widget token.
   */
  public static get queryParams(): QueryParams {
    if (!StaticUtils._queryParams) {
      StaticUtils.cacheQueryParams();
    }

    return StaticUtils._queryParams;
  }

  /**
   * Send message to parent frame when url changes
   */
  public static sendMessageToParent(url: string, openWithRedirect: boolean) {
    let data: { 'page': 'face' | 'main', 'ifId': string, openWithRedirect: boolean, url: string } = {
      'page': 'face',
      'openWithRedirect': openWithRedirect,
      'url': encodeURIComponent(url),
      'ifId': this._queryParams.ifId || 'ifId'
    };

    if (url.indexOf('/main') !== -1 || url.indexOf('/content') !== -1) {
      data.page = 'main';
    } else {
      data.openWithRedirect = false;
      data.url = '';
    }

    if (window.parent) {
      window.parent.postMessage(JSON.stringify(data), '*');
    }
  }

  public static smartMergeObjects(target: any, source: any) {
    if (!target || !source) {
      return;
    }

    let sourceKeys = Object.keys(source);

    sourceKeys.forEach((key: string) => {
      if (target.hasOwnProperty(key) && StaticUtils.isObject(target[key]) && StaticUtils.isObject(source[key])) {
        StaticUtils.smartMergeObjects(target[key], source[key]);
      } else {
        // primitive or not set in target, so override
        target[key] = source[key];
      }
    });
  }

  public static isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }

  public static validateObjectField<TYP>(object: any, fieldName: string, valDefault: TYP,
                                         enforce: boolean, errorMessage: string, errors: string[] = []) {
    if (!object) {
      throw new Error('object must be truthy');
    }

    if (object.hasOwnProperty(fieldName)) {
      return;
    }

    if (enforce) {
      throw new Error(errorMessage);
    }

    object[fieldName] = valDefault;
    errors.push(errorMessage);
  }

  /**
   * Gets data from the localstorage
   * @param id identifier for localstorage
   */
  public static getFromLocalStorage(id: string) {
    let item: any;
    let itemJson: any;
    try {
      item = window.localStorage.getItem(id);
      itemJson = JSON.parse(item);
    } catch (e) {
      console.warn(e);
    }

    // match the data with indexedDB response
    if (itemJson) {
      return {
        result: itemJson
      };
    }

    return null;
  }

  /**
   * Saves the value in the localstorage
   * @param id identifier for localStorage
   * @param data data which gets stored in the localstorage
   */
  public static saveInLocalStorage(id: string, data: any) {
    let item: string = JSON.stringify(data);
    window.localStorage.setItem(id, item);
  }

  public static getIndexedDb(name: string): Observable<any> {
    return new Observable((observer) => {
      if (StaticUtils._indexedDBs.hasOwnProperty(name)) {
        observer.next(StaticUtils._indexedDBs[name]);
        observer.complete();

        return;
      }

      if (!window.indexedDB) {
        observer.complete();

        return;
      }

      let request = window.indexedDB.open(name, 4);
      request.onerror = (event: any) => {
        observer.error(event);
        observer.complete();

        return;
      };
      request.onsuccess = (event: any) => {
        if (event.target.result) {
          StaticUtils._indexedDBs[name] = event.target.result;
          observer.next(StaticUtils._indexedDBs[name]);
        }

        observer.complete();

        return;
      };
      request.onupgradeneeded = (event: any) => {
        let indexedDB = event.target.result;
        indexedDB.createObjectStore(name);
      };
    });
  }

  public static createRandomString(): string {
    return (Math.PI * Math.max(0.01, Math.random())).toString(36);
  }

  /**
   * Returns undefined if el does nto exists.
   * @param el HTML element
   */
  public static isInViewport(el: Element): boolean | undefined {
    if (el) {
      let rect: ClientRect = el.getBoundingClientRect();

      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        + rect.height && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) + rect.width /*or $(window).width() */
      );
    }

    return undefined;
  }

  /**
   * Return the current screen's dpi to use for properly scaling user gestures and views
   *
   * @return {number} the current screen's dpi
   */
  public static get screenDPI(): number {
    if (!StaticUtils._cachedDPI) {
      StaticUtils._cachedDPI = StaticUtils.screenDPIBinarySearch(1, 10000);

      if (StaticUtils._cachedDPI < 2 || StaticUtils._cachedDPI > 9999) {
        StaticUtils._cachedDPI = 192; // fix for safari based devices because they do not support matchMedia( dpi )
      }
    }

    return StaticUtils._cachedDPI;
  }
  /**
   * Open the content panel in a new tab with all the existing params.
   * This is used when fixed-sized old-widget has to redirect to NMW
   */
  public static openContentPanelForFixedWidget() {
    let params = new URLSearchParams();
    for (let key in this.queryParams) {
      params.set(key, this.queryParams[key]);
    }

    let url: string = window.location.origin + window.location.pathname + '#/content?' + params.toString();
    let win = window.open(url, '_blank');
    win.focus();
  }

  public static getFileTypeByFileBlob(file: File): 'video' | 'photo' | 'other' {
    let ext: any = file.name.substr(file.name.lastIndexOf('.') + 1).toLowerCase();
    if (this.supportedImageExtensions.indexOf(ext) !== -1) {
      return 'photo';
    }

    if (this.supportedVideoExtensions.indexOf(ext) !== -1) {
      return 'video';
    }

    return ((file.type.indexOf('image/') === 0) ? 'photo' : ((file.type.indexOf('video/') === 0) ? 'video' : 'other'));
  }

  public static getTimezoneName(dt: Date) {
    return moment.tz.guess();
  }

  public static getTimezoneOffset(dt: Date) {
    let tz = ((dt || new Date())).getTimezoneOffset().toString();
    let pre = (tz.split('')[0] === '-' ? '+' : '-'); // some logic of MDN
    let tm: number = Math.abs(parseInt(tz));
    let tmpTzMin = parseInt((tm % 60).toString());
    let tmpTzHrs = ((tm - tmpTzMin) / 60);

    let tzHr = (tmpTzHrs <= 9) ? '0' + tmpTzHrs : tmpTzHrs;
    let tzMin = (tmpTzMin <= 9) ? '0' + tmpTzMin : tmpTzMin;

    return pre + tzHr + ':' + tzMin;
  }

  public static getFileOrigin(file: File, fakePath: string, fileSelectTime: number) {
    if (!this.isMobile) {
      return 'API_CAMERA_ROLL_IMPORTED'; // 'API_CAMERA_CAPTURED_SUBMISSION' |
    }

    if (this.iOs) {
      if (fakePath.indexOf('captured') !== -1 || fakePath.indexOf('.jpg') !== -1) {
        return 'API_CAMERA_CAPTURED_SUBMISSION';
      }
      return 'API_CAMERA_ROLL_IMPORTED';
    }

    let mediaDateTime = (new Date(file.lastModifiedDate)).getTime();
    if (mediaDateTime >= fileSelectTime) {
      return 'API_CAMERA_CAPTURED_SUBMISSION';
    }

    return 'API_CAMERA_ROLL_IMPORTED';
  }
  private static _cachedDPI: number = null;
  private static _nativeHlsSupport: boolean = null;
  private static _queryParams: QueryParams = null;
  private static _indexedDBs = {};

  private static cacheQueryParams() {
    StaticUtils._queryParams = {};
    let params: any = window.location.search ? window.location.search : window.location.hash;

    if (params && (params = params.split('?')[1])) {
      params = params.split('&');
    }

    if (!params) {
      return;
    }

    params.forEach((paramValue: string) => {
      if (paramValue) {
        let values = paramValue.split('=', 2);
        let key: string;
        let value: string;

        if (values.length === 1) {
          key = values[0];
          value = '';
        } else if (values.length === 2) {
          key = values[0];
          value = decodeURIComponent(values[1].replace(/\+/g, ' '));
        }

        if (key === 'mid') {
          StaticUtils._queryParams['mid'] = parseInt(value, 10);
        }

        StaticUtils._queryParams[key] = value;
      }
    });

    // extract the bubbleID and the partnerID from the token
    if (StaticUtils._queryParams.jwt) {
      if (jwtDecode) {
        let decoded = jwtDecode(StaticUtils._queryParams.jwt);

        StaticUtils._queryParams.pi = decoded.pid;
        StaticUtils._queryParams.bi = parseInt(decoded.bid, 10);
      }
    }
  }
  /**
   * Search for the screen's dpi value by using a binary search and the matchMedia window query
   *
   * @param {number} checkLeftValue The left most possible value for the dpi in the current search tree
   * @param {number} checkRightValue The right most possible value for the dpi in the current search tree
   * @return {number} the screen dpi that was found
   */
  private static screenDPIBinarySearch(checkLeftValue: number, checkRightValue: number): number {
    if (Math.abs(checkLeftValue - checkRightValue) < 2) {
      return checkRightValue;
    }

    let checkNewValue: number = checkLeftValue + Math.round((checkRightValue - checkLeftValue) / 2);
    let newValue: boolean = StaticUtils.checkDPIValue(checkNewValue);

    if (newValue) {
      // newValue is positive as well as right side, need to go down left side of search tree
      return StaticUtils.screenDPIBinarySearch(checkLeftValue, checkNewValue);
    } else {
      // newValue is negative as well as left side, need to go down the right side of search tree
      return StaticUtils.screenDPIBinarySearch(checkNewValue, checkRightValue);
    }
  }

  /**
   * Use window.matchMedia to test for the screens max resolution in dpi
   *
   * @param {number} checkValue the dpi value to check
   * @return {boolean} True if the screen supports the resolution, false otherwise
   */
  private static checkDPIValue(checkValue: number): boolean {
    return window.matchMedia('(max-resolution: ' + checkValue + 'dpi)').matches;
  }

}

/**
 * Defines what query params a widget url will have.
 */
export interface QueryParams {
  bt?: string; // bubbleToken used to generate UGC URL.
  mid?: number; // MediaId of the first media. Comes when user shares a media.
  jwt?: string; // Widget Token. The actual token to be send in the AUTH headers.
  bi?: number; // BubbleID: this is not part of the query params but extracted from the WidgetToken
  pi?: string; // PartnerID: this is not part of the query params but extracted from the WidgetToken
  ifId?: string; // Iframe Id : This is set by the parent frame.
  hideclose?: string; // Hides the close x button on the content panel. Sent by shared URL
  shared?: string; // indicates that the widget is actually a shared URL and is opened on FB,Twitter or from email link.
  preview?: string; // tells if this is a preview link or not
  nocacheapi?: string; // tells whether or not to cache API
  nocachemedia?: string; // tells whether or not to cache media
  fixedwidget?: string;
}
