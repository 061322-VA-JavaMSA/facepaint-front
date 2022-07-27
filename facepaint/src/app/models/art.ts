export class Art {
    public image_id: string;
    public title: string;
    public artist: string;

    constructor(image_id: string, title: string, artist: string){
        this.image_id = image_id;
        this.title = title;
        this.artist = artist;
       
    }
}