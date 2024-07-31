class Server {
    static instance: Server;
    constructor() {
        if (!Server.instance) {
            Server.instance = new Server();
        }

        return Server.instance;
    }
}

export default Server;