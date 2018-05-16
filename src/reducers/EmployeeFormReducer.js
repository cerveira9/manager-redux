import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            return { ...state,
                [action.payload.prop]: action.payload.value 
            }; 
//[] não é um array.
//É um Key Interpolation, ou seja, o que ta dentro do [] será decidido on Runtime. 
//Se mexer no nome será [nome:]
        case EMPLOYEE_CREATE: //Ta resetando o form pra tirar os valores entrados no último uso.
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};
