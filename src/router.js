const reqPages = require.context('./component/page', true, /\.vue$/);
console.log(reqPages);
const routes = reqPages.keys().map(key => {
  const component = reqPages(key);
  return ({
    path: key.slice(1, -'.vue'.length) + (component.route || ''),
    component: component,
  })
});

export default routes;
