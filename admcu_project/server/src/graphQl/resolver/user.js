import User from '../../models/user';


const userResolvers = {
    RootQuery:{
        user: (_, {username}) => {
            return User.findOne({username})
        }
    },
    RootMutation: {
       
        login: async (root, { email, password },{ mongo, secrets }) => {
            //const Users = User.collection;
            
            const user = await User.findOne({email});
            if (!user) {
              throw new Error('Email not found');
            }
            
            // za hashed pass bcrypt
            //const validPassword = await bcrypt.compare(password, user.password);
            var validPassword = false;
            if(password == user.password)
              validPassword = true;

            if (!validPassword) {
              throw new Error('Password is incorrect');
            }
            //const JWT_SECRET = "secret";
            // Generate the jwt and add it to the user document being returned.
            //user.jwt = jwt.sign({ id: user.id }, secrets.JWT_SECRET);
            
            return user;
      },
        signup: async (root, { username, email, password }, { mongo }) => {
      
            const existingUser = await User.findOne({ email });
  
            if (existingUser) {
                throw new Error('Email already used');
            }
        
            // za hashed pass bcrypt
           // const hash = await bcrypt.hash(password, 10);
            await User.collection.insert({
              id : 1,
              username,
              password: password,
              email,
            });
            const user = await User.findOne({ email });

             // TODO: Make this real
             return user; 
        },

        
    
    }
}
export default userResolvers;