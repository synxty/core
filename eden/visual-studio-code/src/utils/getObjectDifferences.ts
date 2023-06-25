export function getObjectDifferences<T extends object>(obj1: T, obj2: T): Partial<T> | null {
  const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  const differences: Partial<T> = {};

  for (const key of keys) {
    const value1 = obj1[key as keyof T];
    const value2 = obj2[key as keyof T];

    if (value1 !== value2) {
      if (typeof value1 === 'object' && typeof value2 === 'object') {
        const nestedDifferences = getObjectDifferences(value1, value2);
        if (nestedDifferences !== null && Object.keys(nestedDifferences).length > 0) {
          differences[key as keyof T] = nestedDifferences as T[keyof T];
        }
      } else {
        differences[key as keyof T] = value2;
      }
    }
  }

  return Object.keys(differences).length > 0 ? differences : null;
}
