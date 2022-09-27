const ports = [];

self.onconnect = (e) => {
  const port = e.ports[0];

  port.onmessage = (e) => {
    switch (e.data.type) {
      case 'broadcast':
        ports.forEach((targetPort) => {
          setTimeout(() => {
            const timestamp = new Date().getTime();
            targetPort.postMessage({
              name: e.data.name,
              msg: e.data.msg,
              timestamp,
            });
          }, Math.random() * 1000);
        });
        break;
    }
  };
  ports.push(port);
};

self.addEventListener('disconnect', (e) => {
  console.log(e);
});
