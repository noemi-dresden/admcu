import Tandem from '../../models/tandem';
import db from '../../config/database/db';


const tandemResolvers = {
    RootQuery:{
        tandems: (_, {latitude, longitude, offer, search}) => {
            return Tandem.find({
                "languages.offer": offer,
                "languages.search": search,
                "location": {
                    $near: [latitude, longitude],
                    $maxDistance: 1
                }
            }).limit(10).exec((err, tandems) => {
                if(err) console.log(err)
            })
        } 
    }
    
}
export default tandemResolvers;
