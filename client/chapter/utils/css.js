/**
 * @function DOM  element에 클래스를 추가하는 함수
 * @author 범쌤
 * @param {HTMLElement | string} node
 * @param {string|array|object} className
 * @return {void}
 */
function addClass(node, className) {
  if (isString(node)) node = getNode(node);
  if (className.includes(',')) {
    className = className.replace(/\s*/g, '').split(',');
  }
  if (isObject(className)) {
    className = Object.values(className);
  }
  if (isArray(className)) {
    className.forEach((item) => node.classList.add(item));
  } else {
    node.classList.add(className);
  }
}

/**
 *
 * @param {HTMLElement | string} node
 * @param {string} className
 * @returns {void}
 */

function removeClass(node, className) {
  if (isString(node)) node = getNode(node);

  if (!className) {
    node.className = '';
  }

  node.classList.remove(className);
}

/**
 *
 * @param {HTMLElement | string} node
 * @param {string} className
 * @returns {boolean} - 추가 true, 제거 false
 */

function toggleClass(node, className) {
  if (isString(node)) node = getNode(node);
  return node.classList.toggle(className);
}
