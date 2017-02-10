import {Component, OnInit} from '@angular/core';
import { FirebaseService } from '../../services/app.services.angular';

@Component({
  templateUrl: 'app.component.education.html',
  providers: [FirebaseService],
  styles: [`
    .education li { 
      list-style: none; 
      border-bottom: 1px solid #d8d8d8;
      padding: 10px;
    }
  `]
})

export class EducationComponent {
  title = 'Education';
  constructor(private _fireService: FirebaseService) {}
  data = this._fireService.getData();
}
