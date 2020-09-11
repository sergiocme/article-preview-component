export default function createState() {
  const state = {
    share: false,
  };

  const observers = [];

  function subscribe(observerFunction) {
    observers.push(observerFunction);
  }

  function notifyAll() {
    for (const observerFunction of observers) {
      observerFunction(state);
    }
  }

  function setShare() {
    state.share = !state.share;
    notifyAll();
  }

  return {
    state,
    subscribe,
    setShare,
  };
}
