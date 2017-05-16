require("should");
var validateUom = require('../../master/uom-validator'); 
        
module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property('code');
    data.code.should.instanceof(String); 
    
    data.should.have.property('date');
    data.date.should.instanceof(Object);

    data.should.have.property('packingId');
    data.packingId.should.instanceof(Object);
    
    data.should.have.property('packingCode');
    data.packingCode.should.be.String();
    
    data.should.have.property('remark');
    data.remark.should.be.String(); 
     
    data.should.have.property('accepted');
    data.accepted.should.instanceof(Boolean);

    data.should.have.property('declined');
    data.declined.should.instanceof(Boolean);



    data.should.have.property('productionOrderNo');
    data.productionOrderNo.should.be.String();

    data.should.have.property('buyer');
    data.buyer.should.be.String();

    data.should.have.property('colorName');
    data.colorName.should.be.String();

    data.should.have.property('construction');
    data.construction.should.be.String();
};