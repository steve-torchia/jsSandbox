function Employee(name) {
  this.name = name;
  this.dept = "general";
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);

function SalesPerson() {
   WorkerBee.call(this);
   this.dept = "sales";
   this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer() {
   WorkerBee.call(this);
   this.dept = "engineering";
   this.machine = "";
}
Engineer.prototype = Object.create(WorkerBee.prototype);

var mark = new WorkerBee;

mark.name = "";
mark.dept = "general";
mark.projects = [];

mark.bonus = 3000;

for(var key in mark){
    console.log(mark[key]);
}

var updateZip = function(){
    console.log(this);
}
updateZip();
