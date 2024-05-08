import { RocketType } from 'types';

export function searchArrayByPropertyValue(
  arr: RocketType[],
  propertyName: keyof RocketType,
  searchValue: string
): RocketType[] {
  return arr.filter((obj) =>
    obj[propertyName]
      ?.toString()
      .toLowerCase()
      .includes(searchValue.toLowerCase())
  );
}

export const handleKeyDown = <T>(
  event: KeyboardEvent,
  eventKey: string,
  callback: () => T
) => {
  if (event.metaKey && event.key === eventKey) {
    event.preventDefault();
    return callback();
  }
};
