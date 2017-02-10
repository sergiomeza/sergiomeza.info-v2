import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import {Injectable} from "@angular/core";

@Injectable()
export class FirebaseService {
  fireData: FirebaseObjectObservable<any[]>;
  constructor(af: AngularFire) {
    this.fireData = af.database.object('/info');
  }

  getData(){
    return this.fireData;
  }
}
