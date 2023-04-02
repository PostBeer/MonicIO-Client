import {makeAutoObservable} from 'mobx';
export default class UserStore {
    constructor(){
        this._isAuth = false;
        this._user={};
        this._error=false;
        makeAutoObservable(this);
    }

    setError(error){
        this._error=error;
    }

    get error(){
        return this._error;
    }

    setIsAuth(bool){
        this._isAuth=bool;
    }

    setUser(user){
        this._user=user;
    }


    get isAuth(){
        return this._isAuth;
    }

    get user(){
        return this._user;
    }
}