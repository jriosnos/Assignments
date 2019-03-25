document.addEventListener("DOMContentLoaded", function(){
    var myButton = document.getElementById('button')
    myButton.addEventListener('click', function(){
    $.ajax({
        url: 'https://bitmaker-monsters-api.herokuapp.com/monsters.json',
        method: 'GET',
        dataType: 'json'
    }).done((responseData) => {
        console.log('Request successfully sent')
        
        const ul = document.createElement('ul')
        const input = document.querySelector('#input')
        
        ul.innerHTML = JSON.stringify(responseData[40])
        input.append(ul)
    }).fail(()=> {
        console.log('Unfortuneately your request has failed to send')
    }).always(()=>{
        console.log('The request has been successfully completed')
    })
    })
    
    var nextButton = document.getElementById('ping')
    nextButton.addEventListener('click',()=>{
        $.ajax({
            url:'http://first-ajax-api.herokuapp.com/ping',
            method: 'GET',
            dataType: 'json'
        }).done((responsedata)=>{
            console.log(responsedata)
            console.log('Youre click was successfully sent')
            
            const sectionize = document.createElement('section')
            sectionize.innerHTML = responseData
            input.append(sectionize)

        }).always(() => {
            console.log('Data has been sent')
        })
    })
    })