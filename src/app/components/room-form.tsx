
export default function RoomForm({ setRoom }) {

  function handleSubmit(event) {
    event.preventDefault();
    const room = event.target.elements[0].value;
    setRoom(room) 
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-56">
      <input className="text-black" type="text" placeholder="Room name" />
      <button type="submit">Join room</button>
    </form>
  )
}