import useChat from './hooks/useChat';

const Room = ({ name }) => {
  const { msgs, sendMsg } = useChat();

  return (
    <div>
      <div style={{ width: 400, height: 500, border: '1px solid' }}>
        {msgs.map(({ name: msgSender, timestamp, msg }) => (
          <div
            key={timestamp}
            style={{ textAlign: msgSender === name ? 'right' : 'left' }}
          >
            <div style={{ color: '#ccc' }}>{msgSender} says</div>
            <div>{msg}</div>
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const msg = e.currentTarget.msg.value;
          msg && sendMsg(name, msg);
          e.currentTarget.msg.value = '';
        }}
      >
        <input type="text" name="msg" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Room;
