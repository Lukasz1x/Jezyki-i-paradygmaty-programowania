const currentUser = {
    name: "Name",
    surname: "Surname",
    email: "email",
    www: "www",
    userType: "user",
    isActive: true,
    show: function (){
        console.log(this.name+ " " + this.surname + " " + this.email + " " + this.www + " " + this.userType + " " + this.isActive)
    },
    setActive: function (active){
        this.isActive = active
    }
}

currentUser.show();
currentUser.setActive(false);
currentUser.show();
