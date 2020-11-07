/* eslint-disable no-param-reassign */
export const merge = <T>(...objects: T[]) => {
  const isObject = (obj: object) => obj && typeof obj === 'object';

  return objects.reduce<T>((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal);
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = merge(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });

    return prev;
  }, {} as T);
};
