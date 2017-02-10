import {Component, OnInit} from '@angular/core';
import { FirebaseService } from '../../services/app.services.angular';
import { routerTransition } from '../../animations/router.animations';
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''},
  providers: [FirebaseService]
})

export class AppComponent implements OnInit {
  menu = [
    {
      title: "Education",
      link: "education"
    },
    {
      title: "Experience",
      link: "experience"
    },
    {
      title: "Skills",
      link: "skills"
    },
    {
      title: "Works",
      link: "works"
    },
    {
      title: "Contact",
      link: "contact"
    }
  ];

  constructor(private _fireService: FirebaseService,
              private titleService: Title, private router: Router){
  }

  data = this._fireService.getData();
  ngOnInit(): void {
    this.router.events.subscribe(path => {
      this.data.subscribe(snapshot => {
        this.titleService.setTitle(snapshot['title'] + ' | ' + path.url.split('/')[1]);
      });
    });
  }
}
