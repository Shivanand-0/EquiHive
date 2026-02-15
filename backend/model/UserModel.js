import {model} from "mongoose";
import UserSchema from "../schemas/UserSchema.js";

const UserModel = new model("User", UserSchema);

export default UserModel;