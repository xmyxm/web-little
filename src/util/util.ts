export function getUrlParam(name: string): string {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split('=');
    if (pair[0] === name) { return pair[1]; }
  }
  return '';
}

export default {
  getUrlParam,
};
