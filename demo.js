class Kontirol{
    constructor(options){
        this.data = options.data
        this.observe(this.data)
        this.proxy()
    }
    proxy(){
        const self = this
        Object.keys(this.data).forEach(key=>{
            Object.defineProperty(self,key,{
                get(){
                    return self.data[key]
                },
                set(newVal){
                    self.data[key] =  newVal
                }
            })
        })
    }
    observe(obj){
        Object.keys(obj).forEach(key => {
            let value = obj[key]
            const self = this
            Object.defineProperty(obj,key,{
                get(){
                    return value
                },
                set(newVal){
                    value = newVal
                    self.update()
                }
            })
        });
    }
    update(){
        console.log("试图更新了",this.data);
    }
}

const app = new Kontirol({
    data:{
        nijat:"hello"
    }
})

console.log(app.nijat = "123123");
