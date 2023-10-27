const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');//passport comparison

function initialize(passport, getUserByEmail,getUserById){
    const autheticateUser=async (email,password,done)=>{
        const user=getUserByEmail(email)
        if(user == null){
            return done(null, false,{message: 'No user with this email'})
        }
        try {
            if (await bcrypt.compare(password,user.password)) {
            return done(null,user)
        } else {
            return done(null,false,{message:'Password incorrect'})
        }
    } catch (error) {
        return done(error)
    }

}

passport.use(new LocalStrategy({usernameField:'email'},
autheticateUser))
passport.serializeUser((user,done)=>done(null,user.id))
passport.deserializeUser((id,done)=>{
    return done(null,getUserById(id))
 })
}

module.exports=initialize