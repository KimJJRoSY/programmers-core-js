import { getNode } from '../dom/getNode.js';
import { isString } from './type.js';

export function endScroll(node) {
  if (isString(node)) node = getNode(node);
  node.scrollTop = node.scrollHeight;
}
