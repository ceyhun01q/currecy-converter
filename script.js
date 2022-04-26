const rub1 = document.querySelector(".input1");
const usd1 = document.querySelector(".input2");
const eur1 = document.querySelector(".input3");
const gbp1 = document.querySelector(".input4");
const rub2 = document.querySelector(".input5");
const usd2 = document.querySelector(".input6");
const eur2 = document.querySelector(".input7");
const gbp2 = document.querySelector(".input8");
const fromAmount = document.querySelector(".inpt1");
const toAmount = document.querySelector(".inpt2");
const inputArea1 = document.querySelector(".input-area1");
const inputArea2 = document.querySelector(".input-area2");
const conArea1 = document.querySelector(".area1");
const conArea2 = document.querySelector(".area2");


let left;
let right;

    function newData (){
        fetch(`https://api.exchangerate.host/latest?base=${left}&symbols=${right}`)
        .then(res => res.json())
        .then(data => {
           
            toAmount.value=fromAmount.value*data.rates[`${right}`].toFixed(4)

            let altDIV1 = `1${left} = ${(data.rates[`${right}`]).toFixed(4)}${right}`;
            conArea1.innerText = altDIV1

            let altDIV2 = `1${right} = ${(1 / data.rates[`${right}`]).toFixed(4)}${left}`;
            conArea2.innerText = altDIV2
            
        })
        
        };
       
        toAmount.addEventListener("input",newData)
        fromAmount.addEventListener("input",newData)
        rub1.addEventListener('click', () => {
            left = 'RUB'
            newData()
            rub2.addEventListener('click', () => {
                right = 'RUB'
                newData()
            });
            usd2.addEventListener('click', () => {
                right = 'USD'
                newData()
            });
            eur2.addEventListener('click', () => {
                right = 'EUR'
                newData()
            });
            gbp2.addEventListener('click', () => {
                right = 'GBP'
                newData()
            });
        });
        usd1.addEventListener('click', () => {
             left = 'USD'
             newData()
             rub2.addEventListener('click', () => {
                right = 'RUB'
                newData()
            });
            usd2.addEventListener('click', () => {
                right = 'USD'
                newData()
            });
            eur2.addEventListener('click', () => {
                right = 'EUR'
                newData()
            });
            gbp2.addEventListener('click', () => {
                right = 'GBP'
                newData()
            });
        });
         eur1.addEventListener('click', () => {
             left = 'EUR'
             newData()
            rub2.addEventListener('click', () => {
                right = 'RUB'
                newData()
            });
            usd2.addEventListener('click', () => {
                right = 'USD'
                newData()
            });
            eur2.addEventListener('click', () => {
                right = 'EUR'
                newData()
            });
            gbp2.addEventListener('click', () => {
                right = 'GBP'
                newData()
            });
         });
            gbp1.addEventListener('click', () => {
             left = 'GBP'
             newData()
             rub2.addEventListener('click', () => {
                right = 'RUB'
                newData()
            });
            usd2.addEventListener('click', () => {
                right = 'USD'
                newData()
            });
            eur2.addEventListener('click', () => {
                right = 'EUR'
                newData()
            });
            gbp2.addEventListener('click', () => {
                right = 'GBP'
                newData()
            });
         });

         function backgroundRUB(){
            left='RUB'
            rub1.style.background='#833AE0'
            eur1.style.background='none'
            usd1.style.background='none'
            gbp1.style.background='none'
        }
        rub1.addEventListener('click', backgroundRUB)
        function backgroundUSD(){
            left='USD'
            rub1.style.background='none'
            eur1.style.background='none'
            usd1.style.background='#833AE0'
            gbp1.style.background='none'
        }
        usd1.addEventListener("click",backgroundUSD)

        function backgroundEUR(){
            left='EUR'
            rub1.style.background='none'
            eur1.style.background='#833AE0'
            usd1.style.background='none'
            gbp1.style.background='none'
        }
        eur1.addEventListener("click",backgroundEUR)
        function backgroundGBP(){
            left='GBP'
            rub1.style.background='none'
            eur1.style.background='none'
            usd1.style.background='none'
            gbp1.style.background='#833AE0'
        }
        gbp1.addEventListener("click",backgroundGBP);

        ////////////////////////////////////


        function backgroundRUB2(){
            right='RUB'
            rub2.style.background='#833AE0'
            eur2.style.background='none'
            usd2.style.background='none'
            gbp2.style.background='none'
        }
        rub2.addEventListener('click', backgroundRUB2)
        function backgroundUSD2(){
            right='USD'
            rub2.style.background='none'
            eur2.style.background='none'
            usd2.style.background='#833AE0'
            gbp2.style.background='none'
        }
        usd2.addEventListener("click",backgroundUSD2)

        function backgroundEUR2(){
            right='EUR'
            rub2.style.background='none'
            eur2.style.background='#833AE0'
            usd2.style.background='none'
            gbp2.style.background='none'
        }
        eur2.addEventListener("click",backgroundEUR2)
        function backgroundGBP2(){
            right='GBP'
            rub2.style.background='none'
            eur2.style.background='none'
            usd2.style.background='none'
            gbp2.style.background='#833AE0'
        }
        gbp2.addEventListener("click",backgroundGBP2)