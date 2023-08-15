const employee = {
    name: "Howard",
    streetAddress: "604 s 60th st",
};


function updateEmployeeWithKeyAndValue(obj, key, value ){
    const newEmployee = {...employee}
    newEmployee[key] = value;

    return newEmployee;  
   }
   
   function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
        obj[key] =value;
        
        return obj;
   }
    

    function deleteFromEmployeeByKey(obj, key){
        const newObj = {...obj};
        delete newObj[key];
        
        return newObj;
    }

    function destructivelyDeleteFromEmployeeByKey(obj, key){
        delete obj[key];
        
        return obj;
    }