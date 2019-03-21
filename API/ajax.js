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
        
        ul.innerHTML = responseData
        input.append(ul)


    }).fail(()=> {
        console.log('Unfortuneately your request has failed to send')
    })
    })
    
    
    })