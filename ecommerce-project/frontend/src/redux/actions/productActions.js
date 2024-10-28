import axios from 'axios';

// Define los tipos de acción
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

// Acción para obtener productos
export const getProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_REQUEST });

  try {
    const response = await axios.get('http://localhost:5001/api/products'); // Asegúrate de que la URL sea correcta
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_PRODUCTS_FAILURE,
      payload: error.message,
    });
  }
};
