function tabuada() {
    let num = document.getElementById('num1')
    let tab = document.getElementById('seltab')
    if (num.value.lenght == 0) {
        window.alert('Digite um number')   
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            
        }
    }
}