const Order = require("../models/order");

exports.getAll = async () => {
  const binds = await Order.find().lean();

  return binds;
};


exports.getSingleBind = (id) => Order.findById(id);


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