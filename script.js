

const form=document.querySelector('form');
form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    // Handle form submission
    const amount=document.querySelector('#amount').value;
    const from=document.querySelector('#from').value;
    const to=document.querySelector('#to').value;
    // console.log(amount,from,to);
    const result=document.querySelector('#result');
    if (amount === "") {
    result.textContent = "Please enter an amount.";
    return;
    }

    if (amount <= 0) {
    result.textContent = "Please enter a valid amount.";
    return;
    }
    const url=`YOUR_API_URL_HERE?from=${from}&to=${to}&amount=${amount}`;

    try{
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
         const rate = data.data[to].value;/*data.data["USD"].value;*/

        const convertedAmount = amount * rate;

        // console.log(convertedAmount);
         result.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
    } catch (error) {
        console.log( error);
         
         result.textContent='Something went wrong. Please try again later.';

    }
   
    
});