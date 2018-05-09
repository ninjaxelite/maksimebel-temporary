import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Image } from "./image";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PresentationService {

    public imgBlurEffectSubject: BehaviorSubject<any> = new BehaviorSubject<any>(false);
    images: Array<Image>;

    constructor(private http: HttpClient) {

    }

    setImages(imgs: Array<Image>): void {
        this.images = imgs;
    }

    getImages(): Array<Image> {
        return this.images;
    }

    showBlurEffect(): boolean {
        this.imgBlurEffectSubject.next(true);
        return true;
    }

    hideBlurEffect(): boolean {
        this.imgBlurEffectSubject.next(false);
        return false;
    }

    getBlurEffectObservable(): Observable<any> {
        return this.imgBlurEffectSubject.asObservable();
    }
}