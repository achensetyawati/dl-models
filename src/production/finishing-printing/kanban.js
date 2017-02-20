'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var ProductionOrder = require('../../sales/production-order');
var ProductionOrderDetail = require('../../sales/production-order-detail');
var Cart = require('./cart');
var Instruction = require('../../master/instruction');

module.exports = class Kanban extends BaseModel {
    constructor(source) {
        super('kanban', '1.0.0');

        // Define properties.  
        this.code = '';
        this.productionOrderId = {};
        this.productionOrder = new ProductionOrder();
        this.selectedProductionOrderDetail = new ProductionOrderDetail();
        this.cart = new Cart();
        this.instructionId = {};
        this.instruction = new Instruction();

        this.copy(source);
    }
};
