import {model} from 'mongoose';
import PositionsSchema from '../schemas/PositionsSchema.js';


const PositionsModel= new model('Position',PositionsSchema);

export default PositionsModel;