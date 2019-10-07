const Library = require('../models/library');
const Complaint = require('../models/complaint');


// CREATE

 exports.createLibraryComplaint = (type,cid)=>{

    Library.create({type:type, complaintCid:cid})
    .then(result=>{
        console.log("Library added\n"+result);
    })
    .catch(err=>{
        console.log("Library Adding Failed\n"+err)
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

// UPDATE

// DELETE
