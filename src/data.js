const Addnote = () => {
    let note = [];

    const getInput = () => {
        let obj = {
            title: document.querySelector('.title').value,
            notes: document.querySelector('.notes').value,
            date: document.querySelector('.dateInput').value.toString(),
        }
        note.push(obj);
        console.log(note, obj);
    };

    const HTMLelement = () => {
        
    }
    return { getInput }
}
const userInput = Addnote();
export { userInput }

