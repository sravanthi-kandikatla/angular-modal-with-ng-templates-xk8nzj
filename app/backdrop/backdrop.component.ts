import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { OcBackdropService } from './backdrop.service';
import { backdropAnimation } from './backdrop.animation';

@Component({
  selector   : 'oc-backdrop',
  styleUrls  : ['backdrop.css'],
  animations : [ backdropAnimation ],
  template   : `
    <div class="backdrop" 
      *ngIf="visibility$ | async"
      (click)="onBackdropClick($event)"
      [@backdropAnimation]="isVisible">
    </div>
  `
})
export class OcBackdropComponent {
  visibility$: Observable<boolean> = this.backdropService.isVisible$;

  constructor(private backdropService: OcBackdropService) {}

  onBackdropClick(event) {
    this.backdropService.onBackdropClick(event);
  }
}
