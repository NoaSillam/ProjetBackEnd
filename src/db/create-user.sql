-- creation schema de donnee
const thingSchema = mongoose.Schema({
    title: {type:String, required:true},
    description:{ type:String, required:true},
    imageUrl:{type:String, required:true},
    userId: {type: Number, required:true},
    price :{type: Number, required:true},
});


module.exports = monogoose.model('Thing', thingSchema);

