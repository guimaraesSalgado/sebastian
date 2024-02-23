import {
  animate,
  AnimationTriggerMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { AnimationEasings, AnimationTimings } from './animations';

export const loadingAnimations: {
  readonly transformBackdrop: AnimationTriggerMetadata;
  readonly transformContent: AnimationTriggerMetadata;
} = {
  transformBackdrop: trigger('transformBackdrop', [
    state('void', style({
      opacity: 0,
      display: 'none',
    })),
    state('showing', style({
      opacity: 1,
    })),
    transition('void => *', [
      style({ display: 'block' }),
      animate(`${AnimationTimings.FAST.X1} ${AnimationEasings.EASE_IN_OUT}`)
    ]),
    transition('* => void',
      animate(
        `${AnimationTimings.FAST.X1} ${AnimationEasings.EASE_IN_OUT}`,
        style({ opacity: 0 })
      )
    )
  ]),
  transformContent: trigger('transformContent', [
    state('void', style({
      transform: 'translateX(-50%) translateY(0%)',
      opacity: 0,
      display: 'none',
    })),
    state('showing', style({
      opacity: 1,
      transform: 'translateX(-50%) translateY(-50%)',
    })),
    transition('void => *', [
      style({ display: 'block' }),
      animate(`${AnimationTimings.FAST.X2} ${AnimationEasings.EASE_IN_OUT}`)
    ]),
    transition('* => void',
      animate(
        `${AnimationTimings.FAST.X2} ${AnimationEasings.EASE_IN_OUT}`,
        style({
          opacity: 0,
          transform: 'translateX(-50%) translateY(0%)',
        })
      )
    )
  ]),
};
