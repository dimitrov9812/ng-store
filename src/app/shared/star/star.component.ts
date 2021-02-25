import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input('rating') public rating: number  = 1;
    @Output('notify') public notify: EventEmitter<string> = new EventEmitter<string>();
    public starWidth: number;
    constructor() {}

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick() {
        this.notify.emit(this.rating.toString());
    }
}