import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//import {MyTeamsPage } from '../pages';

/*
  Generated class for the TeamDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.page.html'
})
export class TeamDetailPage {

  team: any;

  constructor(public nav: NavController, public navParams: NavParams) {

    this.team = this.navParams.data;
    console.log('**nav params:', this.navParams);
  }

/*  goHome(){
    console.log('**parent', this.nav.parent);
    this.nav.parent.parent.popToRoot();
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
  }

}
