import Tandem from '../models/tandem';
import User from '../models/user';


Tandem.remove({}, (err) => {
    if(!err){
        (createTandem("John Doe", ["spanish", "english"], ["german", "arabic"], 51.028740, 13.735930, 'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/22180033_272860193232570_4612071554086020558_o.jpg?oh=54c192dc4919a17e79845159d79e05c8&oe=5A8CBCF9'));
        (createTandem("Linda Kaye", ["german", "english"], ["spanish", "arabic"], 51.042645, 13.637351, 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/16807729_1419957944742173_8134632204845229819_n.jpg?oh=939c5e5627ae3b0e60af1e2cda13ae3a&oe=5ACE22A7'));      
        (createTandem("Martin Zimmermann", ["german", "french"], ["spanish", "arabic"], 51.027208, 13.752103, 'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/18056112_1353085764785473_8112648350141593212_o.jpg?oh=3f90d54631e1aea6fe05b28ecc0518dc&oe=5AD59555'));
        (createTandem("David Lee", ["gernam", "arabic"], ["french", "english"], 51.029175, 13.748907, 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/15894785_1744552288903560_6924623326605686251_n.jpg?oh=06e8f3da1837c1767abf6867890ce047&oe=5ABA1D91'));
        (createTandem("Alicia Florrik", ["spanish", "french"], ["german", "arabic"], 51.041570, 13.643580,'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14502967_1594369430588514_7103819835896140296_n.jpg?oh=abeb995fb1e819e6f194b20eb7ccad60&oe=5AD0E8E7'));
        (createTandem("Peter Florrik", ["spanish", "french"], ["german", "arabic"], 51.041570, 13.643580,'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14502967_1594369430588514_7103819835896140296_n.jpg?oh=abeb995fb1e819e6f194b20eb7ccad60&oe=5AD0E8E7'));
        (createTandem("Anabel Dupon", ["spanish", "french"], ["german", "arabic"], 51.041570, 13.643580,'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14502967_1594369430588514_7103819835896140296_n.jpg?oh=abeb995fb1e819e6f194b20eb7ccad60&oe=5AD0E8E7'));
    }
})

var createTandem = (userId, offers, receives, latitude, longitude, image) => {
    var coordinates = [latitude, longitude]
    var tandem = new Tandem({
        user: userId,
        image: image,
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
        (createUser("1", "ljupka", "123",  "l")); 
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


