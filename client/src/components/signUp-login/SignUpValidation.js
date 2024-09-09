function Validation (values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const name_pattern = /^[A-Za-z\s'-]+$/;
    const phoneNumber_pattern = /^(\+972|0)?-?(5\d{1})-?\d{3}-?\d{4}$/;
    const password_pattern = /^.{8,}$/;
    
    if(values.email === ''){
        error.email = 'Email should not be empty'
        }
        else if(!email_pattern.test(values.email)){
        error.email =  "Email didn't match"
        }else{
        error.email = ""
        }

    if(values.name === ''){
        error.name = 'Name should not be empty'
       }
       else if(!name_pattern.test(values.name)){
        error.name =  "name didn't match"
       }else{
        error.name = ""
       }

    if(values.phoneNumber === ''){
        error.phoneNumber = 'Phone number should not be empty'
        }
        else if(!phoneNumber_pattern.test(values.phoneNumber)){
        error.phoneNumber =  "phoneNumber didn't match"
        }else{
        error.phoneNumber = ""
        }
 
    if(values.password === ''){
        error.password = "Password sould not be empty"
        }
        else if(!password_pattern.test(values.password)){
        error.password =  "Password didn't match"
        }else{
        error.password = ""
        }
        return error;
 }
 
 export default Validation;