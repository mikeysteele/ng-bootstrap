import {Injectable} from '@angular/core';

export interface NgfdDemoConfig {
  title: string;
  code?: string;
  markup?: string;
  type: any;
  files?: Array<{[name: string]: string}>;
  showCode?: boolean;
}

export interface NgfdDemoListConfig { [demo: string]: NgfdDemoConfig; }

export interface NgbfDemoOverviewConfig { [anchor: string]: string; }

@Injectable({providedIn: 'root'})
export class NgfdDemoList {
  private _demos: {[widget: string]: NgfdDemoListConfig} = {};

  private _overviews: {[widget: string]: NgbfDemoOverviewConfig} = {};


  register(widget: string, list: NgfdDemoListConfig, overview?: NgbfDemoOverviewConfig) {
    this._demos[widget] = list;
    if (overview) {
      this._overviews[widget] = overview;
    }
  }

  getDemos(widget: string) { return this._demos[widget]; }

  getOverviewSections(widget: string) {
    const overview = this._overviews[widget];
    const sections = {};
    if (overview) {
      Object.keys(overview).forEach(fragment => { sections[fragment] = {fragment, title: overview[fragment]}; });
    }
    return sections;
  }
}
