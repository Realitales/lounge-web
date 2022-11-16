export const setLocalStorageItem = (
  key: string,
  value: any,
  expiredInMinutes: number
) => {
  const now = new Date();

  const item: any = {
    value: value,
  };

  if (expiredInMinutes)
    item.expiry = now.getTime() + expiredInMinutes * 60 * 1000;

  localStorage.setItem(key, JSON.stringify(item));
};
