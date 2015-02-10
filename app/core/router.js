import Request from './../models/request';

class Router {
    constructor(server) {
        this.request = {};
        /*var controllers = {},controllers_path = process.cwd() + '/app/controllers';
        fs.readdirSync(controllers_path).forEach(function (file) {
            if (file.indexOf('.js') != -1 && file.indexOf('noLoad') == -1) {
                controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
            }
        });*/

        server.get('/', (request,response) => {
            console.log(this.request);
            response.status(200);
            response.json({
                type: true,
                data: 'Request accept'
            })
        });

        server.on('request', (request, response) => {
            console.log('Request incoming');
            this.request = new Request(request);
        });
    }
}

export default Router;