import { OnInit, Directive, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

/** Rxjs */
import { Subscription } from 'rxjs/Subscription';
import { filter } from 'rxjs/operators';

/** Lib */
import { OcBackdropService } from '../backdrop/backdrop.service';

/** Components */
import { OcModalComponent } from './modal.component';
import { OcModalService } from './modal.service';

import { ModalConfig } from './modal-config';

@Directive({
  selector: '[ocModalOutlet]'
})
export class OcModalOutletDirective implements OnInit, OnDestroy {

  timeoutHandler;

  subscription: Subscription;

  constructor(
    private vcr: ViewContainerRef,
    private modalator: OcModalService,
    private backdropper: OcBackdropService
  ) {
    this.backdropper.onClick$.pipe(
      filter(_ => this.vcr.length > 0)
    ).subscribe(_ => {
      this.cleanUp();
    });
  }

  ngOnInit(): void {
    this.subscription = this.modalator.modal$.subscribe(
      id => {
        if (id === 'MODAL_DESTROY') {
          this.destroyModal()
          return;
        }

        // Remueve el modal de haber alguno previamente rendereado
        this.vcr.clear();

        // Obtiene una referencia al template actual a renderear y si tiene timeout
        const { ref, timeout } = this.modalator.getModalConfigFromRegistry(id);
        this.backdropper.toggleBackdrop(true);
        this.vcr.createEmbeddedView(ref);

        // De haber timeout, cierra el modal en el tiempo establecido
        if ( timeout && timeout > 0 ) {
          this.timeoutHandler = setTimeout(() => this.destroyModal(), timeout);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.cleanUp();
    this.subscription.unsubscribe();
  }

  destroyModal() {
    this.cleanUp();
    this.backdropper.toggleBackdrop(false);
  }

  cleanUp() {
    console.log('Modal cleanUp')
    this.vcr.clear();
    if ( this.timeoutHandler ) {
      clearTimeout(this.timeoutHandler);
    }
  }
}
