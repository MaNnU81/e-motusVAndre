
import Location from "./location"




export default class Motus {
    id: string
    value: number
    note: string
    creationDate?: number
    location?: Location
    constructor(id: string, value: number, note: string, creationDate: number, location: Location) {


        this.id = id;
        this.value = value;
        this.note = note;
        this.creationDate = creationDate;
        this.location = location;
    }

    fromValueToEmoji(value: number){
        switch (value) {
            case 0: 
                return '😭';
            case 1: 
                return '😥';
            case 2: 
                return '😐';
            case 3: 
                return '🙂';   
            default:
                return '😁';
        }
    }

    fromTimeStampToDateString(timeStamp: number){
        const date = new Date(timeStamp);
        return date.toDateString() + ' - ' + date.toLocaleTimeString();
    }
}

