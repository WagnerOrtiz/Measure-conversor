function convertion(){

    let inputSelector = document.querySelector('select#input-select').value
    let outputSelector = document.querySelector('select#output-select').value
    let inputValue = Number(document.querySelector('input#input-value').value)
    let outputValue = document.querySelector('input#output-value')

    inputSelector == "#" || outputSelector == "#" ? window.alert("Select a valid measure unit!") : outputValue.value = unitsReader(inputSelector, outputSelector, inputValue)
}


function unitsReader(inputSelector,outputSelector,inputValue){
    if(inputValue==""){
        window.alert("Set a valid measure in 'Input value'!")
    }
    else if(inputSelector=="Km"){
        switch(outputSelector){
            case "Km":
            window.alert("Set different measure units from one another!")
            break

            case "m":
            return inputValue*1000
            break

            case "cm":
            return inputValue*100000
            break

            case "mm":
            return inputValue*1000000
            break
        }
    }
    else if(inputSelector=="m"){
        switch(outputSelector){
            case "m":
            window.alert("Set different measure units from one another!")
            break

            case "Km":
            return inputValue/1000
            break

            case "cm":
            return inputValue*100
            break

            case "mm":
            return inputValue*1000
            break
        }
    }
    else if(inputSelector=="cm"){
        switch(outputSelector){
            case "cm":
            window.alert("Set different measure units from one another!")
            break

            case "Km":
            return inputValue/100000
            break

            case "m":
            return inputValue/100
            break

            case "mm":
            return inputValue*10
            break
        }
    }
    else {
        switch(outputSelector){
            case "mm":
            window.alert("Set different measure units from one another!")
            break

            case "Km":
            return inputValue/100000
            break

            case "m":
            return inputValue/1000
            break

            case "mm":
            return inputValue/100
            break
        }
    }
}

