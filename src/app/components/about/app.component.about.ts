import {Component, OnInit} from '@angular/core';
import { FirebaseService } from '../../services/app.services.angular';

@Component({
  templateUrl: 'app.component.about.html',
  providers: [FirebaseService]
})

export class AboutComponent implements OnInit {

  constructor(private _fireService: FirebaseService){}
  ngOnInit(): void {
  }

  data = this._fireService.getData();
  title= "About";
}
