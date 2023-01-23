import io from 'socket.io-client';
import { getHost } from './host';

const socket = io(getHost());

export default socket;
