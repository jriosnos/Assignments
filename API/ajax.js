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
            url:'http://first-ajax-api.herokuapp.com/a_car',
            method: 'GET',
            dataType: 'html'
        }).done((response)=>{
            console.log(response)
            console.log('Youre click was successfully sent')
            
            const sectionize = document.createElement('section')
            sectionize.innerHTML = response
            input.append(sectionize)

        }).always(() => {
            console.log('Data has been sent')
        }).fail(()=>{
            console.log('Data request unsuccessfully sent')
            
            const inputs = document.querySelector('#input')
            const sections = document.createElement('section')
            sections.innerHTML = "The Ajax request had an incorrect URL, try harder"
            inputs.append(sections)
        })
    })
    })