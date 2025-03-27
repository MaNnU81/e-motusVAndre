import Motus  from "../model/motus.ts";

export default class MotusService {

    moti: Motus[];


    constructor() {
        this.moti = []
    }

    async loadMoti() {
        const localMotiString = localStorage.getItem('moti');
        if (localMotiString) {
            this.moti = JSON.parse(localMotiString);
        } else {
            this.moti = await this.getMotiFromJson()
            this.saveMoti();
        }
        const newMoti = this.createMotus(this.moti) as unknown as Motus;
        return newMoti;
    }

    createMotus(rawMoti: { id: string; value: number; note: string }[]){
        const motiArray = [];
        
        for (const motus of rawMoti) {
            const newMotus = new Motus(motus.id, motus.value, motus.note, 0, { lat: 0, lng: 0 });
            motiArray.push(newMotus);
        }
            return motiArray;
    }

    getMotiFromJson(): Promise<Motus[]>{
        return fetch('/emotions.json')
              .then(resp => resp.json())
    }

    saveMoti(){
        localStorage.setItem('moti', JSON.stringify(this.moti));
        return this.moti;
    }

    addMotus(motus: Motus){
        this.moti.push(motus);
        this.saveMoti()
        return this.moti;
    }



}