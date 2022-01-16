/** Angular */
import { NgModule, ModuleWithProviders } from '@angular/core';

/** Modal */
import { OcModalCloseDirective } from './modal-close.directive';
import { OcModalComponent } from './modal.component';
import { OcModalContentDirective } from './modal-content.directive';
import { OcModalOutletDirective } from './modal-outlet.directive';

import { OcModalService } from './modal.service';

const modalElements = [
  OcModalCloseDirective,
  OcModalComponent,
  OcModalContentDirective,
  OcModalOutletDirective
]

@NgModule({
  declarations: [ 
    ...modalElements 
  ],
  exports: [ 
    ...modalElements 
  ],
  providers: [
    OcModalService
  ]
})
export class OcModalModule {}
