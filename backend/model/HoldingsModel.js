import {model} from 'mongoose';

import HoldingsSchema from'../schemas/HoldingsSchema.js';


const HoldingsModel= new model('Holding',HoldingsSchema);

export default HoldingsModel;