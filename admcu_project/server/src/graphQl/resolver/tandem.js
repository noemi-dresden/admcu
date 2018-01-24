import Tandem from '../../models/tandem';
import db from '../../config/database/db';


const tandemResolvers = {
    RootQuery:{
        tandems: (_, {latitude, longitude, offer, search, limit, skip}) => {
            return Tandem.find({
                "languages.offer": offer,
                "languages.search": search,
                "location": {
                    $near: [latitude, longitude],
                    $maxDistance: 1
                }
            }).limit(limit).skip(skip).exec((err, tandems) => {
                if(err) console.log(err)
            })
        },
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
