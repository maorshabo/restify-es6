"use strict";
import restify from 'restify';
import Router from './core/router';
class Server {
    constructor() {
        let port = process.env.PORT || 3000;
        // define restify serve
        this.server = restify.createServer();
        // load all routes
        this.router = new Router(this.server);

        this.server.use(restify.fullResponse()).use(restify.bodyParser());

        this.server.listen(port, (err) => {
            if (err)
                console.error(err);
            else
                console.log('App is ready at : ' + port);
        });

        if (process.env.environment == 'production') {
            process.on('uncaughtException', (err) =>
                console.error(JSON.parse(JSON.stringify(err, ['stack', 'message', 'inner'], 2)))
            );
        }
    }
}
new Server();