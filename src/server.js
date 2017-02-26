/**
 * Created by DTRT on 26.02.2017.
 */
import Server from 'socket.io';

export default function startServer(store) {
    const io = new Server().attach(1001);

    store.subscribe(
        () => io.emit('state', store.getState().toJS())
    );
}
