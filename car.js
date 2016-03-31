// Module pattern

var Car = function(){
    
    var fuelLevel = 10;
    
    //'private' function
    function burnGas(amount){
        
        if (fuelLevel - amount < 0){
            console.log("you're out of gas!");
        }
        else{
            fuelLevel = fuelLevel - amount;
        }
    };
    
    return {
        seatHeater : "on",
        
        switchHeater : function(){
            if (this.seatHeater === 'on'){
                seatHeater = "off";
            }
            else if (this.seatHeater === "off"){
                seatHeater = "on";
            }
        },
        
        go : function (speed){ burnGas(speed);},
        
        heater: function() {console.log("seatheater=" + this.seatHeater)},
    };
};
    
    
var crv = new Car();

crv.go(3);
crv.heater();
crv.switchHeater();
crv.heater();

