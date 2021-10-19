import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})

export class StarRatingComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 75;

  ngOnChanges (): void {
    this.cropWidth = this.rating * 75/5;
  }

}

/*
export class NgbdRatingDecimal {
  currentRate = 3.14;
}
*/

