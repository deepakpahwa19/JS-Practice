function app(){
    this.name = 'Deepak';
    this.designation = 'SSE';
    this.print = function(){
        console.log(this.name + ' ' + this.designation);
    }
}


var a = new app();
a.print();