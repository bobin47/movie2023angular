import { MovieService } from './../../core/service/movie/movie.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { resolveConfig } from 'prettier';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}
  ThongtinPhim: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      console.log(res);
      this.movieService.DetailFim(res['id']).subscribe(
        (res) => {
          this.ThongtinPhim = res;
          console.log(this.ThongtinPhim, 'ba');
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
