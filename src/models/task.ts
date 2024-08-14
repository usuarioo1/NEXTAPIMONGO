
import { Schema, model, models } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        require: true,
        unique: true,
        trim: true,


    },
    description: {
        type: String,
        require: true,
        trim: true
    }
},{
    timestamps:true
});

export default models.Tasks || model('Tasks', taskSchema)
