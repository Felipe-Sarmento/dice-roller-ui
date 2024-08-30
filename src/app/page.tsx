"use client"
import UseSocket from "./use-socket";

export default function Home() {
  const { room, socket, message, roll, name} = UseSocket();

  // http://localhost:3000/?room=123&name=Pedro

  return (
    <main>
        <p>Room: {room}</p> 
        <p>Name: {name}</p>
        <p>Mensagem: {message}</p>
        <p>SocketId: {socket?.id}</p>
        <button className="bg-red-400" onClick={roll}>Roll</button>  
    </main>
  );
}
