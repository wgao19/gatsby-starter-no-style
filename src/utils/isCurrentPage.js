export default (currentPage, path) => {
  if (currentPage === '/') return path === '/';
  else return path !== '/' && currentPage.startsWith(path);
};
