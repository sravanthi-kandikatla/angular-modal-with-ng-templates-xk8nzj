import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OcBackdropComponent } from './backdrop.component';
import { OcBackdropService } from './backdrop.service';

@NgModule({
  imports: [CommonModule],
  declarations: [OcBackdropComponent],
  exports: [OcBackdropComponent],
  providers: [OcBackdropService]
})
export class OcBackdropModule { }
