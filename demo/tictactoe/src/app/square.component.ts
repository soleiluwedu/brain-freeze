import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from './store.service';

@Component({
    selector: 'square',
    template: `
    <img src="{{imgUrl}}" width="250px" height="250px">
  `
})
export class SquareComponent implements OnInit {
    @Input() id: number;
    private value: string;
    private imgUrl: string;
    constructor(private store: StoreService) { }
    ngOnInit(): void {
        this.value = this.store.getState()['board'][this.id]
        this.imgUrl = `./transparent.png`
        this.store.subscribe(() => {
            this.value = this.store.getState()['board'][this.id]
            this.imgUrl = this.value === '-'
                ? `./transparent.png`
                : this.value === 'X'
                    ? `./X.png`
                    : `./O.png`
        })
    }
}
