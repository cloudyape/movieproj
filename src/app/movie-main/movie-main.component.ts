import { Component, OnInit } from '@angular/core';
import { MovieServiceService } from '../movie-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movie-main',
  templateUrl: './movie-main.component.html',
  styleUrls: ['./movie-main.component.css']
})
export class MovieMainComponent implements OnInit {
  movieDetail : any;
  selectedMovie:any;
  constructor(private movieService: MovieServiceService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.movieService.findAllMovies().subscribe(res => {
      this.movieDetail = res;
    });
  }

  open(content) {
    console.log('content', content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }

  movieSelection(movie) {
    this.selectedMovie = this.movieDetail.find(x => x.id === movie);
    console.log('selectedMovie' , this.selectedMovie);
  }

}
