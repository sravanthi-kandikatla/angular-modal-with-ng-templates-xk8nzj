import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const modalAnimation = trigger(
  'modalAnimation', [
    state('in', style({ 
      transform: 'scale(1) translateY(0)', 
      opacity: '1' 
    })),
    transition(
      'void => *', [
        style({ 
          transform: 'scale(.9) translateY(10%)', 
          opacity: '.5' 
        }),
        animate('.225s cubic-bezier(0.4, 0.0, 0.2, 1.0)')
      ]
    ),
    transition(
      '* => void', [
        animate(
          '.225s cubic-bezier(0.4, 0.0, 0.2, 1.0)',
          style({ 
            transform: 'scale(.9) translateY(10%)', 
            opacity: '0' 
          })
        )
      ]
    )
  ]
);
