const employees =[];

function Employee(name,jobTitle,salary,status ="Full time"){
    this.name = name;
    this.jobTitle= jobTitle;
    this.salary= salary; 
    this.status= status;
    this.printEmployeeForm =function(){
        console.log ("name: " + this.name + "jobtitle" + this.jobTitle + "salary" + this.salary + "status" + this.status)
       
    
    }
}
let employee1 =new Employee("Beni","Designer","400k")
let employee2 =new Employee("Marteen","CFO", "200k")
let employee3 =new Employee("Lynn", "Chief Bossman", "500k")


employee2.status ="Part Time"


employees.push(employee1,employee2,employee3)


employees.forEach(items => items.printEmployeeForm())