import User from '../../models/user';


const userResolvers = {
    RootQuery:{
        user: (_, {id}) => {
            return User.findOne({_id:id})
        }
    },
    RootMutation: {
        setUser: (_, {name, password}) => {
            //function to set the user
        }
    }
}
export default userResolvers;