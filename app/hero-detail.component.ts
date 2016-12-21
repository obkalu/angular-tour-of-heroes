import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
    selector: 'my-hero-detail',
    template: `
            <div *ngIf="hero">
                <h2>{{hero.name}} details!</h2>
                <div><label>Hero Id: </label>{{hero.id}}</div>
                <div>
                    <label for="txtName">Name: </label>
                    <input id="txtName" [(ngModel)]="hero.name" placeholder="name"/>
                </div>
            </div>
    `
})
export class HeroDetailComponent {
    @Input()
    hero: Hero;
}
