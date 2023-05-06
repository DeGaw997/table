
let tbody = document.querySelector('tbody')

let ip = '192.168.1.5'

fetch('http://' + ip).then(res => res.json())
.then(
    data => {
        let info = data
        
        
        for(let i = 0; i < info.length; i++) {
            let table1 =  document.createElement('tr')
            let anotherTd =  document.createElement('td')

            // for(let i =0; i < info.length; i++) {

            //  table1.append(anotherTd)
            // }
            let newTd = document.createElement('td') 
            let newTd2 = document.createElement('td') 
            let newTd3 = document.createElement('td') 
            tbody.append(table1)
            table1.append(newTd,newTd2,newTd3)
            newTd.append(info[i].brand)
            newTd2.append(info[i].year)
            newTd3.append(info[i].color)
           



        newSlot.append(brandCarBmw)
        newSlot2.append(yearCarBmw)

        console.log(brandCarBmw);
        console.log(data)
    }
}
)

