import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TournamentsPage } from '../pages';
/*
  Generated class for the MyTeams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.page.html'
})
export class MyTeamsPage {

  constructor(public nav: NavController, public navParams: NavParams) {}


  goToTournaments() {
    this.nav.push(TournamentsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

}
