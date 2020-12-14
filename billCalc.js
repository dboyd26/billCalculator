





function myBill()
{
    let payment = document.getElementById("bill").value; //retrieve the cost of bill
    console.log(payment);
    let tip; // placeholder for the tip
    let serviceX = document.getElementById("service");
    let service1 = serviceX.options[serviceX.selectedIndex].value;//shows the selected drop box option
    console.log(service1);
    
    

    let numOfPeople = document.getElementById("people").value; //retrieve the amount of people
    console.log(numOfPeople);
      
    let totalCost;

   if (service1 == "outstanding") // want it to take the cost of the mean and depending on the rate of service, caluclate the percentage.
    {
        tip = (payment * 30 / 100);
        
    }

    else if (service1 == "good")
    {
        tip = (payment * 20 / 100) ;
    }

    else if (service1 == "ok")
    {
        tip = (payment * 15 / 100);
    }

    else if (service1 == "bad")
    {
        tip = (payment * 10 / 100);
    }

    else if (service1 == "terrible")
    {
        tip = (payment * 5 / 100);
    }
  
    


    totalCost = (tip / numOfPeople);
    console.log(totalCost);
    
    
    

    

    //document.getElementById(totalCost).innerHTML = "totalCost";










}






