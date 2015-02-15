import Request from './../models/request';
import Response from './../models/response';

class Router {
    constructor(server) {
        this.request = {};
        this.response = null;
        /*var controllers = {},controllers_path = process.cwd() + '/app/controllers';
        fs.readdirSync(controllers_path).forEach(function (file) {
            if (file.indexOf('.js') != -1 && file.indexOf('noLoad') == -1) {
                controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
            }
        });*/

        server.get('/', (request,response) => {
            this.response = new Response(200,request);

            response.status(200);
            response.json({
                type: true,
                data: 'Request accept'
            });

            response.send(this.response);
        });

        server.on('request', (request, response) => {
            console.log('Request incoming');
            this.request = new Request(request);
        });
    }
}

export default Router;