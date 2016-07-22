function Oppo3(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.fullname = function(){
        console.log('Welcome to Oppo3 ' + this.firstname + ' ' + this.lastname);
    }
}

module.exports = new Oppo3('Narayanan','Ts');

