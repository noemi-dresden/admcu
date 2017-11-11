import  merge  from 'lodash/merge';
import userResolvers from './user';
import tandemResolvers from './tandem';


const resolvers = merge( userResolvers
                        ,tandemResolvers
                        )

export default resolvers;