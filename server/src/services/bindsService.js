const Product = require("../models/Product");

exports.getAll = async () => {
  const binds = await Product.find().lean();

  return binds;
};


exports.getSingleBind = (id) => Product.findById(id);


exports.update = (bindId, bindData) => Order.findByIdAndUpdate(bindId, bindData);


exports.delete = (bindId) => Order.findByIdAndDelete(bindId);

exports.addLikeToBind = async(bindId,email) =>{

  const bind = await this.getSingleBind(bindId)
  if(bind.likedBy.includes(email)){
    return
  }
bind.likes += 1
  bind.likedBy.push(email)
  return bind.save()
  



}