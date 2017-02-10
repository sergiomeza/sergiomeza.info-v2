import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/app.services.angular";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  title = 'Works';
  constructor(private _fireService: FirebaseService) {}
  data = this._fireService.getData();

  ngOnInit() {
  }
}
