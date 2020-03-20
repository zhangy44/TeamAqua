$(document).ready(function () {
    // $("#carNumberControl").on("click", function (e) {
    //     let carNumber = Math.floor(Math.random() * 200);
    //     world.carsNumber = carNumber;
    //     console.log(`Car Number ${carNumber}`)
    //     $(this).html(`Car Number ${carNumber}`)
    // })
    $(document).keydown(function(event) {

        var key = (event.keyCode ? event.keyCode : event.which);
        switch(key){
            case 38:
                // alert("up")
                adjustCarNumber(true)
                break
            case 40:
                adjustCarNumber(false)
                // alert("up")
                break
        }

    })
    function adjustCarNumber(isUp){
        let increment = 10;
        let max = 1000;
        let min = 10;
        let currentCarsNumber = world.carsNumber;
        if(isUp){
            if((currentCarsNumber + increment) > max){
                world.carsNumber = max
            }   else    {
                world.carsNumber += increment
            }
        }   else    {
            if((currentCarsNumber - increment) < min){
                world.carsNumber = min;
            }   else    {
                world.carsNumber -= increment
            }
        }
    }
})
