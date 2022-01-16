import { Injectable, OnInit, Output } from "@angular/core";

import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class OcBackdropService {
  private isVisible: BehaviorSubject<boolean> = new BehaviorSubject(false);

  private clickStream: Subject<MouseEvent> = new Subject();

  isVisible$: Observable<boolean> = this.isVisible.asObservable();

  onClick$: Observable<MouseEvent> = this.clickStream.asObservable();

  toggleBackdrop(state: boolean): void {
    this.isVisible.next(state);
  }

  onBackdropClick(event: MouseEvent): void {
    this.clickStream.next(event);
  }
}
