import Motus  from "../model/motus.ts";

export default class MotusService {

    moti: Motus[];


    constructor() {
        this.moti = []
    }

    async loadMoti() {   //non serve piu chiamata a create motus(cancellata) in quanto usa il costruttore della classe(mappa direttamente)
        const localMotiString = localStorage.getItem('moti');
        if (localMotiString) {
            this.moti = JSON.parse(localMotiString).map(
                (m: any) => new Motus(m.id, m.value, m.note, m.creationDate, m.location)
            );
        } else {
            this.moti = await this.getMotiFromJson();
            this.saveMoti();
        }
        return this.moti;
    }

    // createMotus(rawMoti: { id: string; value: number; note: string }[]){
    //     const motiArray = [];
        
    //     for (const motus of rawMoti) {
    //         const newMotus = new Motus(motus.id, motus.value, motus.note, 0, { lat: 0, lng: 0 });
    //         motiArray.push(newMotus);
    //     }
    //         return motiArray;
    // }

    getMotiFromJson(): Promise<Motus[]>{
        return fetch('/emotions.json')
              .then(resp => resp.json())
              .then((data: any[]) => data.map(m => new Motus(m.id, m.value, m.note, m.creationDate, m.location)));
    }

    saveMoti(){
        localStorage.setItem('moti', JSON.stringify(this.moti));
        return this.moti;
        
        
    }

    // addMotus(motus: Motus){
    //     this.moti.push(motus);
    //     this.saveMoti()
    //     return this.moti;
    // }
    addMotus(motus: Motus) {
        
        const newMotus = new Motus(
            motus.id,
            motus.value,
            motus.note,
            motus.creationDate,
            motus.location
        );
    
        this.moti.push(newMotus);  
        this.saveMoti();           
        return this.moti;          
    }



}