import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ScreenSaverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-screen-saver',
  templateUrl: 'screen-saver.html',
})
export class ScreenSaverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    window.localStorage.setItem('isActivePage', JSON.stringify({ scanner: false, screenSaver: true }));
  }

}
