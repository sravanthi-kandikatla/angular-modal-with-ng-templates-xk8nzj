import {
  animate, 
  AnimationTriggerMetadata, 
  keyframes, 
  state, 
  style, 
  transition, 
  trigger
} from '@angular/animations';

export const backdropAnimation: AnimationTriggerMetadata = trigger('backdropAnimation', [
  state('visible', style({ opacity: 1 })),
  transition('void => *', [
    style({ opacity: .001 }),
    animate('.195s cubic-bezier(0.4, 0.0, 0.2, 1.0)')
  ]),
  transition('* => void', [
    animate(
      '.195s .195s cubic-bezier(0.4, 0.0, 0.2, 1.0)',
      style({ opacity: .001 })
    )
  ])
]);
