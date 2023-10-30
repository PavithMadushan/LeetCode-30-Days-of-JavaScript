class Counter{

    constructor(n){
        this.n=n;
    }

    increment(){
        return this.n++;
    }
}

const counter=Counter(10);
counter.increment();
counter.increment();