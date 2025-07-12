import { withoutNulls } from './utils/array';
export const DOM_TYPES = {
  TEXT: 'text',
  ELEMENT: 'element',
  FRAGMENT: 'fragment'
};

export function h(tag, props = {}, children = []) {
  return {
    tag,
    props,
    children: mapTextNodes(withoutNulls(children)),
    type: DOM_TYPES.ELEMENT
  };
}

function mapTextNodes(children) {
  return children.map((child) =>
    typeof child === 'string' ? hstring(child) : child
  );
}

export function hstring(str) {
  return { type: DOM_TYPES.TEXT, value: str };
}

export function hFragment(vNodes) {
  return {
    type: DOM_TYPES.FRAGMENT,
    children: mapTextNodes(withoutNulls(vNodes))
  };
}
