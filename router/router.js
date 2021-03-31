const express=require('express');
const router=express.Router();
const connectingDataBase=require('../controller/controller');
router.get('/',(req,res)=>{
    connectingDataBase.find()
    .then(response=>{
        res.status(200).json({response:response})
    })
    .catch(error=>{
        res.status(401).json({error})
    })
})
router.post('/signup',(req,res)=>{
    const dataUser=new connectingDataBase({
        name:req.body.name,
        email:req.body.email
    })
    dataUser.save()
    .then(data=>{
        res.status(200).json({data: data})
    }).catch(error=>{
        res.status(401).json({message:"something went wrong"})
    })
})

router.put('/:id',(req,res)=>{
    const updating={name:req.body.name}
    connectingDataBase.updateOne({_id:req.params.id},updating)
    .then(data=>{
        connectingDataBase.find({_id:req.params.id}).then(cdata => {
            res.status(200).send(cdata)
        }).catch(err => {
            res.status(401).json(error)    
        })
    }).catch(error=>{
        res.status(401).json(error)
    })
})
router.delete('/:id',(req,res)=>{
     connectingDataBase.remove({_id:req.params.id})
        .then(data=>{
            res.status(200).json(data)
        }).catch(error=>{
            res.status(401).json(error)
        })
})
module.exports=router;