var person = {
    firstName : '',
    lastName :  '',
    greet: function(){
        console.log(this.firstName+ ' ' + this.lastName);
    }
}

var dpk = Object.create(person);
dpk.firstName ='Deepak';
dpk.lastName = 'Pahwa';
dpk.greet();

var indu = Object.create(person);
indu.firstName ='Indrajeet';
indu.lastName = 'Kaur';
indu.greet();