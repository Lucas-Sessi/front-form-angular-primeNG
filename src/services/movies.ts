import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class MoviesService {
    constructor(private http: HttpClient) {}
    
    url = "http://localhost:3005/movies";

    getMovies(): Observable<any> {
        return this.http.get(this.url);
    }

    getMovieById(id: number): Observable<any> {
        return this.http.get(`${this.url}/find/${id}`);
    }

    postMovies(data: any): Observable<any> {
        return this.http.post(this.url, data);
    }

    udpateMovies(id: number, data: any): Observable<any> {
        return this.http.patch(`${this.url}/${id}`, data);
    }

    deleteMovies(id: number): Observable<any> {
        return this.http.delete(`${this.url}/${id}`);
    }
}