const chart=document.querySelector('#chart').getContext('2d')



new Chart(chart,{
    type:'line',
    data:{
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    },
    datasets:
        [
            {

                label:'BTC',
                data:[29374,33537,59895,572828,36684,33572,39974,48847,48115,61004],
                borderColor:'red',
                borderWidth:2
            },
            {

                label:'ETH',
                data:[8374,33547,6374,33547,5674,33547,34374,33547,9074,33547],
                borderColor:' blue',
                borderWidth:2
            },
        
        ],

    
    options:{
        responsive:true,
    }
})
//show or hid nav
const menuBtn=document.querySelector('#menu-btn');
const closeBtn=document.querySelector('#close-btn');
const sidebar=document.querySelector('aside');
menuBtn.addEventListener('click',()=>{
    sidebar.style.display='block'
});
closeBtn.addEventListener('click',()=>{
    sidebar.style.display='none'
})
//change Theme
const themeBtn=document.querySelector('.theme-btn');
themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme');
    themeBtn.querySelector('span:first-child').classList.toggle('active')
    themeBtn.querySelector('span:last-child').classList.toggle('active')
    
})
