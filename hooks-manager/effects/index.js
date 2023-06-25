import effects from './effects';

export function loadEffects(args) {
  Object.values(effects).map((effect) => effect(args));
}
