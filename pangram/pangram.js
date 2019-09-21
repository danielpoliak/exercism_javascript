export const isPangram = (s) => {
  let lc = s.toLowerCase();

  return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .filter(c => lc.indexOf(c) === -1)
      .length === 0;
};
