import { combineReducers } from 'redux';
import productReducer from './productReducer';  // Asegúrate de tener tu productReducer definido

export default combineReducers({
  product: productReducer,  // Añade otros reducers aquí si tienes más
});
