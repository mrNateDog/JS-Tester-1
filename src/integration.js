let HelloName = (name) => {
  return `Hello ${name}!`;
};

let checkAndSayHello = (name) => {
  if (!name.trim()) {
    return false;
  }
  return HelloName(name);
};
