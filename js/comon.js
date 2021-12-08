var tabars = document.getElementsByClassName('tabbar_item')
var tabCon_items = document.getElementsByClassName('tabCon_item')
var tabbar_items  = document.getElementsByClassName('tabbar_item')
for (let index = 0; index < tabars.length; index++) {
    tabars[index].onclick=()=>{
        changeTabBar(index)
    }
    
}

function changeTabBar(index){
    for (let indexs = 0; indexs < tabCon_items.length; indexs++) {
        tabCon_items[indexs].classList.remove('ac')
    }

    for (let indexss = 0; indexss < tabbar_items.length; indexss++) {
        tabbar_items[indexss].classList.remove('ac')
    }
    tabbar_items[index].classList.add('ac')
    tabCon_items[index].classList.add('ac')
}