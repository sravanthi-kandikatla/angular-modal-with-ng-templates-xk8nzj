/** Angular */
import { Injectable, TemplateRef } from '@angular/core';

/** Rxjs */
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

/** Componentes & Stuff */
import { OcModalComponent } from './modal.component';


/** Modelos */
import { ModalConfig, ModalRegistry } from './modal-config';

@Injectable()
export class OcModalService {
  /** Registro de todos los modales registrados en la vista */
  private modalRegistry: ModalRegistry<OcModalComponent>;
  
  /** Stream de id's */
  private modal: Subject<string> = new Subject<string>();

  /** API pública para this.modal */
  modal$: Observable<string> = this.modal.asObservable();

  /**
   * Agrega un modal al registro de modales
   * @param id Nombre del modal
   * @param config Configuración del modal
   */
  addToRegistry(id: string, config: ModalConfig<OcModalComponent>) {
    this.modalRegistry = {
      ...this.modalRegistry,
      [id]: config
    }

    if ( config.openOnLoad ) {
      this.showModal(id);
    }
  }

  /**
   * Resetea el registro de modales
   */
  clearRegistry() {
    this.modalRegistry = {};
  }

  /**
   * Remueve una modal en específico del registro (Puede ser útil cuando tenga
   * un modal de campaña que sólo necesito mostrar una vez y a la que nunca más
   * tendré que acceder)
   * @param id Nombre del modal
   */
  removeFromRegistry(id: string) {
    this.modalRegistry = Object.keys(this.modalRegistry).reduce(
      (result, key) => {
        if ( key !== id ) {
          result[key] = this.modalRegistry[key];
        }
        return result;
      },
      {}
    );
  }

  /**
   * Retorna la configuración de una modal específica
   * @param id Nombre del modal
   */
  getModalConfigFromRegistry(id: string): ModalConfig<OcModalComponent> {
    return this.modalRegistry[id];
  }

  /**
   * Envía una nueva modal a renderear por el stream de modales y renderea
   * el backdrop
   * @param id Nombre del modal
   */
  showModal(id: string): void {
    this.modal.next(id);
  }

  destroyModal(): void {
    this.modal.next('MODAL_DESTROY');
  }
}