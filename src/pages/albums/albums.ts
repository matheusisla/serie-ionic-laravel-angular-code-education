import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {HttpClient} from "@angular/common/http";

/**
 * Generated class for the AlbumsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-albums',
    templateUrl: 'albums.html',
})
export class AlbumsPage {

    resultado = null;

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    }

    ionViewDidLoad() {
        this.http.get<any>('http://localhost:8000/api/albums').subscribe(data => this.resultado = data);
    }

}
