export default class MotusDialog extends HTMLElement{
    
    dialog!: HTMLDialogElement;
    
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.styling();
        this.render();
    }

    styling(){
        const style = document.createElement('style');
        style.innerText = `
 
        `
        this.shadowRoot!.appendChild(style);
    }

    render(){
        this.dialog = document.createElement("dialog");
        this.dialog.id = "new-motus";
        this.dialog.innerHTML = `
            <form> 
                <label for="crying">😭</label>
                <input type="radio" name="motus" id="crying">
                <label for="sad">😥</label>
                <input type="radio" name="motus" id="sad">
                <label for="neutral">😐</label>
                <input type="radio" name="motus" id="neutral">
                <label for="happy">🙂</label>
                <input type="radio" name="motus" id="happy">
                <label for="euphoric">😁</label>
                <input type="radio" name="motus" id="euphoric">
                <label for="note">Come ti senti?</label>
                <textarea name="note" id="note"></textarea>
            </form>
        `

        const cancelBtn = document.createElement("button");
        cancelBtn.appendChild(document.createTextNode('cancella'));
        cancelBtn.addEventListener('click', () => this.dialog.close());
        this.dialog.appendChild(cancelBtn);

        const okBtn = document.createElement("button");
        okBtn.appendChild(document.createTextNode('ok'));
        okBtn.addEventListener('click', () => {
            this.dispatchMotus();
            this.dialog.close();
        });
        this.dialog.appendChild(okBtn);

        this.shadowRoot!.appendChild(this.dialog);
    }

    dispatchMotus(){
       
    }

    openMe() {
        this.dialog.showModal();
    }

}

customElements.define('motus-dialog', MotusDialog)