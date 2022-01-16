import { Directive, Host, HostListener } from '@angular/core';

import { OcModalComponent } from './modal.component';

@Directive({
  selector: '[ocModalClose]'
})
export class OcModalCloseDirective {
  constructor(@Host() private modal: OcModalComponent) {}

  @HostListener('click', ['$event'])
  onCloseClick(event: PointerEvent) {
    this.modal.selfDestroy();
  }
}
