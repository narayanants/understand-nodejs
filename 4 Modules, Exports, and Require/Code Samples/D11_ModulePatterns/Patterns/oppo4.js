function Oppo4(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = function(){
        console.log('Welcome to Oppo4 ' + this.firstname + ' ' + this.lastname);
    }
}


module.exports = Oppo4;