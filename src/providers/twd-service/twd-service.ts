import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';


/*
  Generated class for the TwdServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TwdServiceProvider {
  public data: any;
  
  constructor(public http: Http) {
    console.log("Hello HeroService");
  }

  public load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http
        .get(
          `https://api.tvmaze.com/singlesearch/shows?q=the-walking-dead&embed=episodes`
        )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  public getEpisodeById(id: number) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http
        .get(`http://api.tvmaze.com/episodes/${id}`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
