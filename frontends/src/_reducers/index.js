import { combineReducers} from 'redux';
import login from './login';
import signup from './signup';
import emailcheck from './email';

const reducers = combineReducers({
    login, signup, emailcheck,
});

export default reducers;