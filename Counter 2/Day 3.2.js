class counter{
    constructor(init){
        this.init=init;
        let count=init;
    }

    increment(){
        return ++this.count;
    }

    decrease(){
        return --this.count;
    }

    reset(){
        this.count=this.init;
        return this.count;
    }
}