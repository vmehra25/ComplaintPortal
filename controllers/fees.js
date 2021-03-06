const Fees = require('../models/fees');
const Complaint = require('../models/complaint');


// CREATE

 exports.createFeesComplaint = (type,cid)=>{

    Fees.create({type:type, complaintCid:cid})
    .then(result=>{
        console.log("Fees added\n"+result);
    })
    .catch(err=>{
        console.log("Fees Adding Failed\n"+err)
        Complaint.findByPK(cid)
        .then(complaint=>{
            return complaint.destroy();
        })
        .catch(err=>{
            console.log(err);
        });
    });




}

// READ

exports.readFeesComplaint = (req, res) => {
    const sid = req.body.sid;
    Complaint.findAll({
            where: {
                studentSid: sid
            },
            include:[{
                model: Fees,
                attributes: ['type'],
                required : true
            }]
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        });
};


// UPDATE

// DELETE
