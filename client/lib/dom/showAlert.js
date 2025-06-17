import { addClass, removeClass } from './css.js';
import { getNode } from './getNode.js';

export function showAlert({
  target: node,
  className = 'active',
  message = '오류 발생!',
  timeout = 1000,
}) {
  //   if (isString(node)) node = getNode(node);
  addClass(node, className);
  getNode(node).textContent = message;
  setTimeout(() => {
    removeClass(node, className);
  }, timeout);
}
