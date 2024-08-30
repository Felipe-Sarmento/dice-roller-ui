import { API_URL } from "@/const";
import { io } from "socket.io-client";

export const SOCKET_CLIENT = io(API_URL);

