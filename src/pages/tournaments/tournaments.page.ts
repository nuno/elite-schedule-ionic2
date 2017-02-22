
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamsPage } from '../pages'

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

  constructor(public nav: NavController, public navParams: NavParams) {}

  itemTapped() {
    this.nav.push(TeamsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');
  }

}
