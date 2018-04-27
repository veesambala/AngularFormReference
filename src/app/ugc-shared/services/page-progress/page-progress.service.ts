import { Injectable } from '@angular/core';

/**
 * PageProgressService handles the UGC progress
 */
@Injectable()
export class PageProgressService {

    private _pageProgressPercent: number;

    public get pageProgressPercent(): number {
        return this._pageProgressPercent;
    }

    constructor() {

    }

    /**
     * Responsible to calculate the page progress
     * @param newRoutName module name which loads on page change.
     */
    public pageChanged(newRoutName: string) {

    }
}