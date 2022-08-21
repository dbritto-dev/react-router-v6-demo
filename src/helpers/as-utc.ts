export const asUTC = (date: Date): Date => {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
};
