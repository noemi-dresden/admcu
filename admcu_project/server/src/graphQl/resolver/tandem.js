import Tandem from '../../models/tandem';
import db from '../../config/database/db';


const tandemResolvers = {
    RootQuery:{
        tandems: (_, {latitude, longitude}) => {
            return db.runCommand({
                geoSearch : "tandems",
                near: [ latitude, longitude],
                maxDistance : 6,
                limit : 10
            })
        }
    }
    
}
export default tandemResolvers;