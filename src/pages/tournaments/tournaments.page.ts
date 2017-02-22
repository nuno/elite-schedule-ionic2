import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamsPage } from '../pages'
import { EliteApi } from '../../shared/shared'

/*
  Generated class for the Tournaments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.page.html'
})
export class TournamentsPage {

  tournaments: any;
  constructor(public nav: NavController, public navParams: NavParams, public elitApi: EliteApi) {

  }

  itemTapped($event, torney) {
    this.nav.push(TeamsPage, torney);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
    this.elitApi.getTournaments().then(data => this.tournaments = data);
  }

}
