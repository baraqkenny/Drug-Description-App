let inputText = document.getElementById('inputText');
let submit = document.querySelector('.submit');
let showHistory = document.querySelector('.showHistory');

submit.addEventListener('click', ()=>{
    let drugName = "";
    
   drugName = inputText.value;
   

   

 const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3126b1ba03mshc9870e9ce6a5b5bp16f515jsn9b9997c79d62',
      'X-RapidAPI-Host': 'drug-info-and-price-history.p.rapidapi.com'
    }
  };

  
  
  fetch(`https://drug-info-and-price-history.p.rapidapi.com/1/druginfo?drug=${drugName}`, options)
    .then(response => response.json())
    .then(data => {
       

     
     showHistory.innerHTML = `
                            <ul>
                             <li>Brand Name: ${data[0].brand_name}</li>
                             <li>Dosage Form: ${data[0].dosage_form}</li>
                             <li>Strength: ${data[0].active_ingredients[0].strength}</li>
                             <li>Expiration date: ${data[0].listing_expiration_date}</li>
                             <li>Product Type: ${data[0].product_type}</li>
                          
                             </ul
                             `
        



    })
    //.catch(err => console.error(err));
   
    setTimeout(() => {
      showHistory.style.display = 'block';
    }, 2000);
})
