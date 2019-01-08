export class Auth {

logged = false;


    isAuthenticated(){
const at =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(this.logged)
    },1000)


})

return at;
    }


}