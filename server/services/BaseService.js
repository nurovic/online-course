class BaseService {
    constructor(model){
        this.model = model
    }
    create(object){
        return new this.model(object).save()
    }

    findOne(id){
        return this.model.findOne(id)
    }
    deleteOne(id){
        return this.model.deleteOne(id)
    }
    find(){
        return this.model.findOne()
    }

    list(data){
        return this.model?.find(data || {})
    }

    update(id,data){
        return this.model.findByIdAndUpdate(id, data, {new: true})
    }

    updateOne(id, data){
        return this.model.findOneAndUpdate(id, data, {new: true})
    }

    updateWhere(where, data) {
        return this.model.findOneAndUpdate(where, data, {new: true})
    }
    
    delete(id){
        return this.model.findByIdAndDelete(id)
    }
    removeOrder(){
        return console.log(this.model.remove())
    }
}

module.exports = BaseService