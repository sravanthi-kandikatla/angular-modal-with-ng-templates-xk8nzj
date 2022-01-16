import { TemplateRef } from '@angular/core';

export class ModalConfig<T> {
  ref: TemplateRef<T>;
  timeout: number;
  openOnLoad: boolean;

  constructor(
    ref: TemplateRef<T>,
    timeout: number = null,
    open: boolean = false
  ){ 
    this.ref = ref;
    this.timeout = timeout;
    this.openOnLoad = open;
  }
}

export interface ModalRegistry<T> {
  [id: string]: ModalConfig<T>;
}
