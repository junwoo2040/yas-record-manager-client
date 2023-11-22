export const camelCaseToTitle = (str: string) => {
  const spacedString = str.replace(/([A-Z])/g, " $1");
  return spacedString.charAt(0).toUpperCase() + spacedString.slice(1);
};
