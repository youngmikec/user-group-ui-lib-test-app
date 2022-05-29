import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { UserGroupsDataBrokerServiceToken } from 'ionic-ng-user-groups-ui';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalUserGroupsDataBrokerService } from './services/local-user-groups-data-broker/local-user-groups-data-broker.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  {provide:UserGroupsDataBrokerServiceToken , useClass:LocalUserGroupsDataBrokerService}],
  bootstrap: [AppComponent],
})
export class AppModule {}
