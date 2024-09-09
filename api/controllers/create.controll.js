
import createuser from '../models/create.model.js'

export const create = async(req, res)=>{
    const {name, email} = req.body
    if(!name || !email || name=='' || email==''){
        res.json('Fill Details')
    }

    try{
        const newCreate = new createuser({
            name,
            email
        })
        await newCreate.save()
        res.json(newCreate)

    }catch(e){
        res.json(e)

    }


}

export const create1 = async(req, res)=>{
    const rese = await createuser.find()
    res.json(rese)
    
}

export const update = async(req, res)=>{
    const{name,email} = req.body;
    const id = req.params.id
    const updateData = await createuser.findByIdAndUpdate(
        id,
        {name, email},
        {new:true}
    )
    res.json(updateData)

}

export const delete1 = async(req, res)=>{
    const id = req.params.id
    const deleteUser = await createuser.findByIdAndDelete(
        id
    )
    res.status(267).end()
}