import { Component , ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Chart } from 'chart.js';
/**
 * Generated class for the SampleModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sample-modal',
  templateUrl: 'sample-modal.html',
})
export class SampleModalPage {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;
  images = ['1.png','2.png'];
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    console.log("123");
  }


  closeModal(ok) {
    console.log(ok)
    this.viewCtrl.dismiss(ok);
  }

}
