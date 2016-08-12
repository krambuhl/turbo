const getFileName = file => {
  return file.basename.substr(0, file.basename.length - file.extname.length); 
};

const getFileCategory = file => {
  const base = file.path.substr(file.base.length);
  const name = base.substr(1, base.lastIndexOf('/'));
  return name.substr(0, name.indexOf('/'));
};

const getFileNamespace = file => {
  const base = file.path.substr(file.base.length);
  const name = base.substr(1, base.lastIndexOf('/'));
  return name.substr(name.indexOf('/')).split('/').filter(a => a).join('');
};

module.exports = {
  getFileName,
  getFileCategory,
  getFileNamespace
};