import { Movie } from './../../core/models/movie.type';
import { MovieService } from './../../core/service/movie/movie.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private movieService: MovieService) {}
  public DSPhim: Movie[] = [];
  ngOnInit() {
    this.movieService.DanhSachPhim().subscribe(
      (res) => {
        this.DSPhim = res;
        console.log(this.DSPhim);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
