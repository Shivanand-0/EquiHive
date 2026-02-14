import {model} from 'mongoose';
import OrdersSchema from '../schemas/OrdersSchema';


const OrdersModel= new model('Order',OrdersSchema);

export default OrdersModel;