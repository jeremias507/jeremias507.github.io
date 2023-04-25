const chart = document.querySelector("#chart").getContext('2d');

// 
new Chart(chart, {
    type: 'line',
    data: {
        labels: [ 'Jul', 'Agu', 'Sep', 'Oct','Nov','Dic','Jan', 'Feb', 'Mar', 'Apr', 'May',],
        
        datasets: [
          {
            label:'BTC',
            data:[29374,54362,25637,87635,82653,17345,63874,74243,36729,89333,73678],
            boderColor:'red',
            borderWidth: 2
          },
          {
            label:'ETH',
            data:[27634,37924,27384,63482,38459,34789,68349,58394,82934,28954,78340],
            boderColor:'blue',
            borderWidth: 2
          }
        ]
    },
    options: {
        responsive: true
    }
}) 


// show or hide sidebar

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn'); 
const aside = document.querySelector('aside'); 

menuBtn.addEventListener("click",()=>{
  aside.classList.add("menu-closed")
}) 

closeBtn.addEventListener("click",()=>{
  aside.classList.remove("menu-closed")
}) 

const themeBtn = document.querySelector('.theme-btn'); 

themeBtn.addEventListener('click',() => {
  document.body.classList.toggle('dark-theme')
  themeBtn.querySelector('i:first-child').classList.toggle('active');
  themeBtn.querySelector('i:last-child').classList.toggle('active')

}) 


const list = document.querySelectorAll('.list')
function activarLink(){
    list.forEach((item)=> 
    item.classList.remove('active'))
    this.classList.add('active')

}
list.forEach((item)=>
item.addEventListener('click',activarLink)
)