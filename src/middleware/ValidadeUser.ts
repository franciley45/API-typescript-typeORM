export const ValidadeUser = (name: string, email: string, password: string) => {
 if(name && email && password){
    return true
 }else {
    return false
 }
}