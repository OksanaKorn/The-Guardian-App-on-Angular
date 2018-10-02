import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from "rxjs";
// import { News } from './news';
import { catchError } from 'rxjs/operators';

@Injectable()
export class NewsService {

    constructor(private http: HttpClient) { }
    getNews (currentPage:number): Observable<any> {
        return this.http.get<any>(`http://content.guardianapis.com/search?page=${currentPage}&api-key=ab8aec74-4f1f-4e71-9bf0-fe1de0febcc3`)
    }
   
    getDescription(descriptionUrl) {
        return this.http.get(descriptionUrl + "?show-blocks=body&api-key=ab8aec74-4f1f-4e71-9bf0-fe1de0febcc3")
    }
    // private handleError<T> (operation = "operation", result?: T) {
    //     return(error: any): Observable<T> => {
    //         console.error(error);
    //         return of (result as T)
    //     }
    }

    // public dataserviceNews: SearchNewsResult = new SearchNewsResult();

    // public loadRepos(repoName: string) {
    //     return this.http.get<SearchNewsResult>("http://content.guardianapis.com/search?page=2&api-key=ab8aec74-4f1f-4e71-9bf0-fe1de0febcc3")
    //         .map(result => this.dataserviceNews = result);

    // };

