/**
 *
 * @param {string} node - CSS 선택자 문자열 ex)'.class' , '#id
 * @param {Document | HTMLElement} context 부모가 될 context 노드 ex) 기본값은 document
 * @returns {HTMLElement | null} 매칭된 첫 번째 요소 또는 null
 * @example
 * const btn = getNode('#button')
 * const li = getNode('li','.navigation')
 *
 */

function getNode(node, context = document) {
  if (context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}

function getNodes(node, context = document) {
  if (context.nodeType !== 9) context = getNode(context);

  return context.querySelectorAll(node);
}
