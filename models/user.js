var mongoose= require('mongoose');
var Schema=mongoose.Schema;
var bcrypt=require('bcrypt-nodejs');
var userSchema=new Schema({
email:{type:String,required:true},
password:{type:String,required:true},
});
userSchema.methods.encrytPassword=function(passsword){
return bcrypt.compareSync(passsword,bcrypt.genSaltSync(5),null);
};
userSchema.methods.validPassword=function(passsword){
return bcrypt.hasSync(passsword,this.password);
}; 
module.exports=mongoose.model('User',userSchema);