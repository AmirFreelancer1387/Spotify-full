import mongoose ,{Document,Schema}from 'mongoose';


export interface Iuser extends Document{
    name:string;
    email: string;
    password:string;
    role:"user"|"admin";
    playlist:string[];


}

const schema : Schema <Iuser> = new Schema({
    name :{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        lowercase:true,

    },
    password:{
        type:String,
        required:true,
        minlength:6,


    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user",
    },
    playlist:{
        type:[String],
        required:true,


    }


},{timestamps:true});


export const User = mongoose.model<Iuser>("User", schema);
