const formatTitle = (title) => {
  return title.split('_').join(' ').toUpperCase();
};

const replaceUnderscores = (text) => {
  return text.split('_').join(' ');
};

const cloneObject = (obj) => JSON.parse(JSON.stringify(obj));

export { formatTitle, replaceUnderscores, cloneObject };
