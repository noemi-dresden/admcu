import Tandem from '../models/tandem';
import User from '../models/user';



Tandem.remove({}, (err) => {
    if(!err){
        (createTandem("salohy", ["german", "english"], ["spanish", "arabic"], 51.028740, 13.735930));      
        (createTandem("Martin", ["german", "french"], ["spanish", "arabic"], 51.027208, 13.752103));
        (createTandem("ljupka", ["gernam", "arabic"], ["french", "english"], 51.029175, 13.748907));
        (createTandem("Tomy", ["spanish", "french"], ["german", "arabic"], 51.041570, 13.643580));
    }
})

var createTandem = (userId, offers, receives, latitude, longitude) => {
    var coordinates = [latitude, longitude]
    
    var tandem = new Tandem({
        user: userId,
        languages: {
            offer: offers,
            search: receives
        },
        location: coordinates
    })

    tandem.save((err) => {
        if(err) console.log(err) 
    })
}

User.remove({}, (err) => {
    if(!err){
        (createUser("1", "ljupka", "123",  "ljupka@yahoo.com")); 
        (createUser("2", "domi", "123",  "domi@yahoo.com"));      
    }
})


var createUser = (id,username, password, email) => {
    
    var user = new User({
        id:id,
        username: username,
        password: password,
        email: email
    })

    user.save((err) => {
        if(err) console.log(err) 
    })
}


