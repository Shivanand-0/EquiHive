import User from "../model/UserModel.js";
import createSecretToken  from "../util/SecretToken.js";
import bcrypt from "bcrypt";

export const Signup= async(req,res,next)=>{
    try {
        const { email, password, username, createdAt } = req.body;
        const existingUser= await User.findOne({email});
        if(existingUser){
            return res.json({message: "User already exists"});
        };
        const user=await User.create({
            email,
            password,
            username,
            createdAt,
        });
        const token = createSecretToken(user._id);

        res.cookie("token", token, {
          httpOnly: false, // Set to true for better security in production
          secure: false,   // false is correct for localhost (http)
          sameSite: "lax", // Required for localhost cross-port cookies
          path: "/",       // Ensures cookie is valid for all routes
          maxAge: 3 * 24 * 60 * 60 * 1000 // 3 days
        });

        res.status(200).json({ message: "User logged in successfully", success: true });
        next();
    } catch (error) {
        console.log(error);
        res.json({message: "Error signing up"});
    }
}

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     // ADD THESE LOGS
        console.log("LOGIN DEBUG:");
        console.log("1. User ID:", user._id);
        console.log("2. Secret Key (Check if exists):", process.env.TOKEN_KEY);

        const token = createSecretToken(user._id);
        
        console.log("3. Generated Token:", token); 

        if (!token) {
            return res.json({message: 'Token generation failed'});
        }
      res.cookie("token", createSecretToken(user._id), {
      withCredentials: true,
      httpOnly: false,
      secure: false,       // ⚠️ CRITICAL: Must be FALSE for localhost (http)
      sameSite: "Lax",     // ⚠️ CRITICAL: Must be "Lax" (not 'None' or 'Strict')
      path: "/",           // Ensures cookie works on all pages
      maxAge: 3 * 24 * 60 * 60 * 1000,
    });
    console.log("4. Cookie Set with Token");
     res.status(201).json({ message: "User logged in successfully", success: true });
     next()
  } catch (error) {
    console.error(error);
  }
}

// export default {Signup  , Login};