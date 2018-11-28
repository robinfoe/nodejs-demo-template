import express from 'express'

import fileroute from './route/fileroute.js'

class WebFront {
    constructor(){
        this.app = express();
        this.port = 3000;
    }

    init(){
        this.app.use('/file',fileroute);
        
        this.app.use('/', express.static('public'));
        this.app.listen(this.port, function() {
            console.log("Server Started at port 3000");
        });
    }
}

const webfront = new WebFront();
webfront.init();