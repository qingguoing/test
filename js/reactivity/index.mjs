let listener = null;
export const createSignal = initialValue => {
  const global = {
    value: initialValue,
    observers: [],
  };
  const read = () => {
    if (listener) {
      global.observers.push(listener);
      listener = null;
    }
    return global.value;
  };

  const write = newValue => {
    if (newValue !== global.value) {
      global.value = newValue;
      global.observers.forEach(a => a());
    }
    return global.value;
  };

  return [read, write];
};

export const createEffect = fn => {
  listener = fn;
  fn();
};
