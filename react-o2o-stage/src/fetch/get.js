// 为了兼容性存在的  fetch是基于promise，但是ie的低端浏览器能支持promise?
import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
  var result = fetch(url, {
      credentials: 'include',
      headers: {
          'Accept': 'application/json, text/plain, */*'
      }
  });

  return result;
}
