import { Component, HostBinding, Input, OnDestroy, ViewEncapsulation } from '@angular/core';

import { OcModalService } from './modal.service';
import { modalAnimation } from './modal.animation';

@Component({
  selector      : 'st-modal',
  styleUrls     : [ 'modal.css' ],
  animations    : [ modalAnimation ],
  encapsulation : ViewEncapsulation.None,
  template      : `
    <div class="st-modal__container">
      <button class="st-modal__dismiss" stModalClose>
        <i class="str-icon-times"></i>
      </button>
      <ng-content></ng-content>
    </div>
  `
})
export class OcModalComponent {
  @HostBinding('class.st-modal')
  private setDefaultClassName: boolean = true;

  @HostBinding('@modalAnimation') 
  animate: string = 'in';

  constructor(private modalator: OcModalService) {}

  selfDestroy() {
    this.modalator.destroyModal();
  }
}