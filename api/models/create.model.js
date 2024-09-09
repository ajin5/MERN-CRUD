import mongoose from "mongoose";

const createSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    }
})

const createuser = mongoose.model('createuser',createSchema )
export default createuser