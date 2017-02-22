import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../pages';

/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.page.html'
})
export class TeamsPage {

  teams = [
    { id: 1, name: 'HC Elite' }, 
    { id: 2, name: 'Team Takeover' }, 
    { id: 3, name: 'DC Thunder' }
  ]

  constructor(public nav: NavController, public navParams: NavParams) {}

  itemTapped($event, team) {
    this.nav.push(TeamHomePage, team);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

}
