import Tandem from '../../models/tandem';
import db from '../../config/database/db';


const tandemResolvers = {
    RootQuery:{
        tandems: (_, {latitude, longitude, offer, search}) => {
            return Tandem.find({
                "languages.offer": offer,
                "languages.search": search
            }).limit(10).exec((err, tandems) => {
                if(err) console.log(err)
            })
        },

        // should be replaced with the function from Salohy
       matches:  (_, {offer, search}) => {
            return Tandem.find({
                "languages.offer": offer,
                "languages.search": search
            }).limit(10).exec((err, tandems) => {
                if(err) console.log(err)
            }) 
    },
    allTandems:  (root, args, context) => {
        return Tandem.find({}).limit(10).exec((err, tandems) => {
            if(err) console.log(err)
        }) 
}
}
    
}
export default tandemResolvers;
