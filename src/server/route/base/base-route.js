import express from 'express'

class BaseRoute{
    constructor(trunkPath){
        this.router = express.Router();
        this.trunkPath = trunkPath();
    }

    addGet(path,job){

    }

    addRoute(){
        
    }

}