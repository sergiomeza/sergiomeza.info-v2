import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/app.services.angular";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [FirebaseService]
})
export class SkillsComponent implements OnInit {

  title = 'Skills';
  constructor(private _fireService: FirebaseService) {}
  data = this._fireService.getData();

  ngOnInit() {
  }

}
