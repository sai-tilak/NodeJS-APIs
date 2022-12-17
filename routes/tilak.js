const express=require('express')
const router =express.Router()
const Tillu =require('../models/tillu')
                                    // M - Model = Schema
                                    // V - View  = View
                                    // C - Controller = Router

router.get('/',async(req,res)=>{     

    try{
        const tilak =await Tillu.find()
        res.send(tilak)
    }
    catch(err){
        res.send('Error' + err)
    }
})
// get request 

router.get('/:id', async(req,res) => {
    try{
           const tillu = await Tillu.findById(req.params.id)
           res.json(tillu)
        }catch(err){
        res.send('Error ' + err)
    }
})



// post request 

router.post('/',async(req,res)=>{
    const tillu =new Tillu({
            name: req.body.name,
            tech: req.body.tech,
            sub: req.body.sub
    })
    try{
        const a1 =await tillu.save()
        res.json(a1);  
    }   
    catch(err){
        res.send('Error');
    }
})

// patch

router.patch('/:id',async(req,res)=> {
    try{
        const tillu = await Tillu.findById(req.params.id) 
        tillu.sub = req.body.sub
        const a1 = await tillu.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})

module.exports = router