import properties from './properties';

export function getContext(args) {
  return Object.entries(properties).reduce(
    (acc, [key, propertyFunc]) => ({
      ...acc,
      [key]: propertyFunc(args),
    }),
    {},
  );
}
