import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TwdServiceProvider } from '../../providers/twd-service/twd-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public obj: any;
  public result: any;

  constructor(
    public navCtrl: NavController,
    public twdService: TwdServiceProvider
  ) {
    this.getAll();
  }

  public getAll() {
    this.twdService.load()
      .then(data => {
        this.obj = data;
        this.result = this.obj._embedded.episodes;
      });
  }
}
