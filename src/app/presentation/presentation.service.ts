import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Image } from "./image";

@Injectable()
export class PresentationService {

    images: Array<Image>;

    constructor(private http: HttpClient) {

    }

    setImages(imgs: Array<Image>): void {
        this.images = imgs;
    }

    getImages(): Array<Image> {
        return this.images;
    }


}