
let heartStored = parseInt(document.getElementById('heart-stored').innerText);
function clickHeart(){
    heartStored += 1;
    document.getElementById('heart-stored').innerText = heartStored;
}


document.getElementById('card-container').addEventListener('click', function(event){

    const targetBtn = event.target.innerText.trim()
    
    if(targetBtn === 'Call'){
        const targetCard = event.target.parentNode.parentNode.id

        const parents = document.getElementById(targetCard).children;
        const parent = parents[0].children
        const targetName = parent[2].innerText
        const targetNumber = parent[3].innerText

        let avilableCoin = parseInt(document.getElementById('avilable-coin').innerText)
        if(avilableCoin > 0){
            let newAvilableCoin = avilableCoin - 20 ;
            document.getElementById('avilable-coin').innerText = newAvilableCoin
            const callHistoryContainer = document.getElementById('call-history-container')
            const time = new Date().toLocaleTimeString()
            // console.log(callHistoryContainer)
            const div = document.createElement('div')
            div.innerHTML = `
                    <div
                    class="rounded-lg bg-[#f5fff6] flex items-center justify-between p-3"
                     >
                        <div>
                            <h2 class="font-semibold">${targetName}</h2>
                            <p class="text-sm">${targetNumber}</p>
                        </div>
                        <p class="text-sm">${time}</p>
                    </div>
            `
            callHistoryContainer.appendChild(div)
            


            alert('Calling ' + targetName + ' ' +targetNumber + '...')

        }else if(avilableCoin === 0){
            alert("You don't have enough coins. At least 20 coins are required to make a call" )
            
        }
        
    }
    // console.log(targetBtn)

})


document.getElementById('clear-btn').addEventListener('click', function(){
    document.getElementById('call-history-container').innerHTML = ''
})
