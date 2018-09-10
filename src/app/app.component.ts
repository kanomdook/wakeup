import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Insomnia } from '@ionic-native/insomnia';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav;
  rootPage: any = HomePage;

  constructor(public insomnia: Insomnia, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      // setInterval(() => {
      //   this.checkTime();
      // }, 60000);
    });

    setInterval(() => {
      this.checkTime();
    }, 60000);
  }

  checkTime() {
    let date = new Date();
    let day = date.getDay();
    let isActivePage: any = JSON.parse(window.localStorage.getItem('isActivePage'));
    isActivePage = isActivePage ? isActivePage : { scanner: true, screenSaver: false };
    if (day === 0 || day === 6) { //วันเสาร์ - อาทิตย์
      this.allowSleepAgain();
      if (isActivePage.screenSaver) {
        console.log('aleady ScreenSaverPage');
      } else {
        this.nav.setRoot('ScreenSaverPage');
      }
    } else { //วันจันทร์ - ศุกร์
      let H = date.getHours();
      if (H >= 6 && H <= 9) {
        this.keepAwake();
        if (isActivePage.scanner) {
          console.log('aleady ScannerPage');
        } else {
          this.nav.setRoot('ScannerPage');
        }
      } else if (H >= 14 && H <= 16) {
        this.keepAwake();
        if (isActivePage.scanner) {
          console.log('aleady ScannerPage');
        } else {
          this.nav.setRoot('ScannerPage');
        }
      } else {
        this.allowSleepAgain();
        if (isActivePage.screenSaver) {
          console.log('aleady ScreenSaverPage');
        } else {
          this.nav.setRoot('ScreenSaverPage');
        }
      }
    }
  }

  keepAwake() {
    this.insomnia.keepAwake();
  }

  allowSleepAgain() {
    this.insomnia.allowSleepAgain();
  }
}

