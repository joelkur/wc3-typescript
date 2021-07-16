declare let main: () => void;
const wc3Main = main;
const afterMain: (() => void)[] = [];

export const onMapInitialization = (func: () => void) => afterMain.push(func);

main = () => {
  wc3Main();
  afterMain.forEach((func) => func());
};
