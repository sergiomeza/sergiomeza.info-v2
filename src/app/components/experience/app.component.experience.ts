import {Component, OnInit} from '@angular/core';
import { FirebaseService } from '../../services/app.services.angular';

@Component({
  templateUrl: 'app.component.experience.html',
  providers: [FirebaseService],
  styles: [`
    .content-data {
      max-height: 450px;
      overflow: auto;
    }
    
    .service {
      box-shadow: 0 1px 5px 0 rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
      transition: all 0.3s;
      padding: 10px 24px;
      font-size: 15px;
    }
    
    h4 {
      text-align: center;  
      font-size: 24px;
    }
    
    ul li {
      list-style: none;   
    }
  `]
})

export class ExperienceComponent {
  title = 'Experience';
  constructor(private _fireService: FirebaseService) {}
  data = this._fireService.getData();
}
