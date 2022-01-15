'use strict';

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
        divremove.className = 'remove';

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
        
        divsetting.addEventListener('click', () => {
            modifynote(obj, topdiv, divnotes)
        })
    };

    const removeNote = (datavalue, maindiv) => {
        collection.splice(collection.indexOf(datavalue), 1);
        maindiv.parentNode.removeChild(maindiv);

        console.log(collection, i)
    };

    const modifynote = (obj, topdiv, divnotes) => {
        const main = document.querySelector('.main');
        const container = document.createElement('div');
        const maindiv = document.createElement('div');
        const closediv = document.createElement('div');
        const form = document.createElement('form');
        const titleta = document.createElement('textarea');
        const notesta = document.createElement('textarea');
        const date = document.createElement('input')
        const button = document.createElement('input')

        container.className = 'modifypopup';
        maindiv.className = 'modifypopup-content';
        closediv.className = 'close2';
        titleta.className = 'newTitle';
        notesta.className = 'newNotes';
        date.className = 'dateInput';
        button.className = 'submit2';

        titleta.placeholder = "title";
        notesta.placeholder = "notes";
        date.type = 'date';
        button.type = 'button';

        form.appendChild(titleta);
        form.appendChild(notesta);
        form.appendChild(date);
        form.appendChild(button);
        maindiv.appendChild(form);
        maindiv.appendChild(closediv);
        container.appendChild(maindiv);
        main.appendChild(container);

        button.addEventListener('click', () => {
            console.log('ciao')
            container.style.display = 'none'
            const array2 = topdiv.childNodes;
            console.log(array2)
            if(titleta.value !== "")
            {
                obj.title = titleta.value;
                console.log(titleta.value);
                array2[0].textContent = titleta.value;
                console.log(obj)
            }

            if(notesta !== "")
            {
                obj.descriptionx = notesta.value;
                console.log(notesta.value);
                divnotes.textContent = notesta.value;
            }
        })
    }

    return { getInput }
}
const userInput = notes();
export { userInput }

