





function myBill() {
    let payment = document.getElementById("bill").value; //retrieve the cost of bill
    let tip; // placeholder for the tip
    let serviceX = document.getElementById("service");
    let service1 = serviceX.options[serviceX.selectedIndex].value;//shows the selected drop box option
    let numOfPeople = document.getElementById("people").value; //retrieve the amount of people




    if (service1 == "outstanding") // want it to take the cost of the mean and depending on the rate of service, caluclate the percentage.
    {
        tip = (payment * 30 / 100);

    }

    else if (service1 == "good") {
        tip = (payment * 20 / 100);
    }

    else if (service1 == "ok") {
        tip = (payment * 15 / 100);
    }

    else if (service1 == "bad") {
        tip = (payment * 10 / 100);
    }

    else if (service1 == "terrible") {
        tip = (payment * 5 / 100);
    }

    totalCost = (tip / numOfPeople).toFixed(2); //divide the percentage among the number of people

    document.getElementById("peopleBtn").onclick = cost;


    function cost() { // to display total seperately with a submit button


        document.getElementById("total").innerHTML = "$" + totalCost; // prints out the answer

    }





}







//document.getElementById("myBtn").addEventListener("click", function() {
   // document.getElementById("demo").innerHTML = "Hello World";










