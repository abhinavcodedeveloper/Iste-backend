const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const electronikaSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required:true
        },
        image:{
            type: String,
            default:"https://res.cloudinary.com/du1pi2myd/image/upload/v1679380739/profpic_qnpaef.png"
        },
        description: {
            type: String,
            required: true
        }
    },{
        timestamps:true,
    }
)

module.exports = mongoose.model("Electronika",electronikaSchema)