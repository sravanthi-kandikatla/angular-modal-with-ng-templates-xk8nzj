import { AfterViewInit, Directive, Input, TemplateRef } from "@angular/core";

import { OcModalService } from "./modal.service";
import { OcModalComponent } from "./modal.component";

import { ModalConfig, ModalRegistry } from "./modal-config";

@Directive({
  selector: "[ocModalContent]"
})
export class OcModalContentDirective implements AfterViewInit {
  @Input() 
  ocModalContent: string;

  /** En cuanto tiempo se va a hacer dismiss del modal */
  @Input() 
  ocModalContentTimeout: number;

  @Input() 
  ocModalContentOpen: boolean;

  constructor(
    private templateRef: TemplateRef<OcModalComponent>,
    private modalator: OcModalService
  ) {}

  ngAfterViewInit() {
    const config: ModalConfig<OcModalComponent> = new ModalConfig(
      this.templateRef,
      this.ocModalContentTimeout,
      this.ocModalContentOpen
    );

    this.modalator.addToRegistry(this.ocModalContent, config);
  }
}
