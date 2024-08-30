import { API_URL } from "@/const";
import { useSearchParams } from "next/dist/client/components/navigation";
import { useCallback, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";


export default function UseSocket() {
  const [value, setValue] = useState<string | undefined>();
  const [message, setMessage] = useState<string | undefined>();
  const [socket, setSocket] = useState<Socket>();

  const searchParams = useSearchParams();
  const room = searchParams.get("room");
  const name = searchParams.get("name");

  useEffect(() => {
    const socket = io(API_URL, {
      transports: ["websocket"],
    });
    setSocket(socket);

    socket.on("joinedRoom", (message) => {
      setMessage(message);
    });

    socket.on("value", ({ value, message }) => {
      setValue(value);
      setMessage(message);
    });

    if (room) {
      socket.emit("joinRoom", room);
    }

    return () => {
      socket.disconnect();
    };
  }, [room, name]);

  const roll = useCallback(() => {
    if (socket) {
      socket.emit("roll", name);
    }
  }, [socket, name]);

  return {
    room,
    socket,
    roll,
    value,
    message,
    name
  }
}