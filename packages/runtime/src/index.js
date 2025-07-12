import { h } from './h';

console.log('This will soon be a frontend frame work!');

h('form', { class: 'login-form', action: 'login' }, [
  h('input', { type: 'text', name: 'user' }),
  h('input', { type: 'password', name: 'pass' }),
  h('button', { on: { click: login } }, ['Log in'])
]);
