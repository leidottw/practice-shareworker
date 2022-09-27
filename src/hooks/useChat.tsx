import { useCallback, useEffect, useRef, useState } from 'react';

export type Msg = {
  name: string;
  msg: string;
  timestamp: number;
};

export const useChat = () => {
  let sw = useRef(new SharedWorker('chatWorker.js', {}));
  const [msgs, setMsgs] = useState([] as Msg[]);

  useEffect(() => {
    sw.current.port.onmessage = ({ data }: { data: Msg }) => {
      setMsgs([...msgs, data]);
    };
  }, [msgs]);

  const sendMsg = useCallback((name: string, msg: string) => {
    sw.current.port.postMessage({ type: 'broadcast', name, msg });
  }, []);

  return {
    msgs,
    sendMsg,
  };
};

export default useChat;
