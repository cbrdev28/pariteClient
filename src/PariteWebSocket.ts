export const webSocket = new WebSocket('ws://10.0.1.34:3000/cable');
webSocket.onopen = () => {
  console.warn('Web socket opened');
};
webSocket.onmessage = event => {
  // console.warn('Web socket message');
  // console.warn('event: ', event);
};
webSocket.onerror = error => {
  console.warn('Web socket error');
  console.warn('error: ', error);
};
webSocket.onclose = event => {
  console.warn('Web socket close');
  console.warn('event: ', event);
};
