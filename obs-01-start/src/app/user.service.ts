import { EventEmitter, Inject } from "@angular/core";
import { Subject } from 'rxjs';

// @Inject({ providedIn: 'root' })
export class UserService {
  // activatedEmitter = new EventEmitter<boolean>();
  activatedEmitter = new Subject<boolean>();
}
