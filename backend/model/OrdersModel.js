import {model} from 'mongoose';
import OrdersSchema from '../schemas/OrdersSchema.js';


const OrdersModel= new model('Order',OrdersSchema);

export default OrdersModel;