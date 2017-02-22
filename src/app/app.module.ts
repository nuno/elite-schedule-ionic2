import { Page1 } from './../pages/page1/page1';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import {EliteApi} from '../shared/shared'

import { MyApp } from './app.component';
import {
  MyTeamsPage,
  TournamentsPage,
  TeamsPage,
  TeamDetailPage,
  TeamHomePage,
  StandingsPage
} from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    TeamHomePage,
    StandingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    TeamHomePage,
    StandingsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApi
    ]
})
export class AppModule {}
