import Tandem from '../models/tandem';



Tandem.remove({}, (err) => {
    if(!err){
        (createTandem("salohy", ["german", "english"], ["spanish", "arabic"], 51.028740, 13.735930));      
        (createTandem("Martin", ["german", "french"], ["spanish", "arabic"], 51.027208, 13.752103));
        (createTandem("Ljupka", ["gernam", "arabic"], ["french", "english"], 51.029175, 13.748907));
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



