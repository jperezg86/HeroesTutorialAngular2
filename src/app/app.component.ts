import { Component } from '@angular/core';
import { HeroDetailComponent} from  './hero-detail/hero-detail.component';
import { HeroService } from './special-super-heroe.service';
import { Hero } from './models/hero';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit{
  // heroes = HEROES;
  public heroes : Hero[];
  selectedHero : Hero;
  title = 'Tour of Heroes!';
  hero : Hero = {
  	id : 1,
  	name : 'Windstorm'
  };

  constructor(private heroService : HeroService){

  }  

  getHeroes(){
    this.heroes = this.heroService.getHeroes(); 
  }

  ngOnInit () {
    this.getHeroes();
  }


  onSelect(hero:Hero) : void {
  	this.selectedHero = hero;
  }
}
