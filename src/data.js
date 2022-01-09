const notes = () => {
    let collection = [];
    let i = 0;

    const getInput = () => {
        let obj = {
            title: document.querySelector('.title').value,
            description: document.querySelector('.notes').value,
            date: document.querySelector('.dateInput').value.toString(),
        }
        collection.push(obj);
        console.log(collection, obj);
        HTMLelement(obj, i);
        i = i + 1;
    };

    const HTMLelement = (obj, i) => {
        const parentdiv = document.querySelector('.todos');
        const topdiv = document.createElement('div');
        const maindiv = document.createElement('div');
        const divtitle = document.createElement('div');
        const divnotes = document.createElement('div');
        const divdate = document.createElement('div');
        const div = document.createElement('div');
        const divsetting = document.createElement('span');
        const divremove = document.createElement('span');
        const datavalue = document.createAttribute('data-value');
        datavalue.value = i;

        topdiv.className = 'topdiv';
        maindiv.className = 'maindiv';
        divtitle.className = 'divtitle';
        divdate.className = 'divdate';
        div.className = 'div';
        divsetting.className = 'modify';
        divremove.className = 'remove'

        divtitle.textContent = obj.title;
        divdate.textContent = obj.date;
        divnotes.textContent = obj.description;
        divsetting.innerHTML = '<i class="fas fa-cog"></i>'
        divremove.innerHTML = '<i class="fas fa-trash"></i>'

        topdiv.appendChild(divtitle);
        topdiv.appendChild(divdate);   
        div.appendChild(divsetting);  
        div.appendChild(divremove);  
        topdiv.appendChild(div);     
        maindiv.appendChild(topdiv);    
        maindiv.appendChild(divnotes);
        parentdiv.appendChild(maindiv);
        maindiv.setAttributeNode(datavalue);
        console.log(datavalue);

        divremove.addEventListener('click', () => {
            removeNote(datavalue, maindiv);
        });

        
    };

    const removeNote = (datavalue, maindiv) => {
        collection.splice(collection.indexOf(datavalue), 1);
        maindiv.parentNode.removeChild(maindiv);

        console.log(collection, i)
    };

    return { getInput }
}
const userInput = notes();
export { userInput }

