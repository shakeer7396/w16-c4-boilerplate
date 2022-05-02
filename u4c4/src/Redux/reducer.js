import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch(type){
    case GET_PRODUCT_REQUEST:
      return{
        ...state,
        isLoading:true,
        isError:false,
        products:[],
        filterData:[]
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading:false,
        isError:false,
        products:payload,
        filterData:payload
      }
    case GET_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading:false,
        isError:true,
        products:[],
        filterData:[]
      }
    default:
      return state
  }
};
export { reducer };
