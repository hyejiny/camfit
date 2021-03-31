import { combineReducers} from 'redux';
import login from './login';
import signup from './signup';
import emailcheck from './email';
import selftrainlist from './selftrain';
import community from './community';

const Reducers = combineReducers({
    login, signup, emailcheck, selftrainlist, community
});

export default Reducers;