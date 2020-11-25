const pubsub = (() => {
  let events = {};

  const subscribe = (eventName, callback) => {
    events[eventName] = events[eventName] || [];
    events[eventName].push(callback);
  };

  const unsubscribe = (eventName, callback) => {
    if (events[eventName]) {
      for (let i = 0; i < events[eventName].length; i++) {
        if (events[eventName][i] === callback) {
          events[eventName].splice(i, 1);
          break;
        }
      }
    }
  };

  const publish = (eventName, data) => {
    if (events[eventName]) {
      events[eventName].forEach((callback) => {
        callback(data);
      });
    }
  };

  return { subscribe, unsubscribe, publish };
})();

export default pubsub;
