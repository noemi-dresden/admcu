import  merge  from 'lodash/merge';
import userResolvers from './user';
import tandemResolvers from './tandem';
import bcrypt from 'bcrypt';

const resolvers = merge( userResolvers
                        ,tandemResolvers
                        )

export default resolvers; 