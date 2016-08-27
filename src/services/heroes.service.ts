import { Injectable } from '@angular/core';
import * as heroes from '../heroes';
import { IHero, HeroRole } from '../heroes';

export { IHero, HeroRole };

@Injectable()
export class HeroesService {

  public Ana = heroes.Ana;
  public Bastion = heroes.Dva;
  public Dva = heroes.Dva;
  public Genji = heroes.Genji;
  public Hanzo = heroes.Hanzo;
  public Junkrat = heroes.Junkrat;
  public Lucio = heroes.Lucio;
  public McCree = heroes.McCree;
  public Mei = heroes.Mei;
  public Mercy = heroes.Mercy;
  public Pharah = heroes.Pharah;
  public Reaper = heroes.Reaper;
  public Reinhardt = heroes.Reinhardt;
  public Roadhog = heroes.Roadhog;
  public Soldier76 = heroes.Soldier76;
  public Symmetra = heroes.Symmetra;
  public Torbjorn = heroes.Torbjorn;
  public Tracer = heroes.Tracer;
  public Widowmaker = heroes.Widowmaker;
  public Winston = heroes.Winston;
  public Zarya = heroes.Zarya;
  public Zenyatta = heroes.Zenyatta;

  public HeroesByName: { [name: string]: IHero};
  public AllHeroes: IHero[];

  constructor() {
    this.HeroesByName = {};
    this.AllHeroes = [];

    this.HeroesByName["ana"] = this.Ana;
    this.HeroesByName["bastion"] = this.Bastion;
    this.HeroesByName["dva"] = this.Dva;
    this.HeroesByName["genji"] = this.Genji;
    this.HeroesByName["hanzo"] = this.Hanzo;
    this.HeroesByName["junkrat"] = this.Junkrat;
    this.HeroesByName["lucio"] = this.Lucio;
    this.HeroesByName["mccree"] = this.McCree;
    this.HeroesByName["mei"] = this.Mei;
    this.HeroesByName["mercy"] = this.Mercy;
    this.HeroesByName["pharah"] = this.Pharah;
    this.HeroesByName["reaper"] = this.Reaper;
    this.HeroesByName["reinhardt"] = this.Reinhardt;
    this.HeroesByName["roadhog"] = this.Roadhog;
    this.HeroesByName["soldier76"] = this.Soldier76;
    this.HeroesByName["symmetra"] = this.Symmetra;
    this.HeroesByName["torbjorn"] = this.Torbjorn;
    this.HeroesByName["tracer"] = this.Tracer;
    this.HeroesByName["widowmaker"] = this.Widowmaker;
    this.HeroesByName["winston"] = this.Winston;
    this.HeroesByName["zarya"] = this.Zarya;
    this.HeroesByName["zenyatta"] = this.Zenyatta;

    for (let heroName in this.HeroesByName) {
      if (this.HeroesByName.hasOwnProperty(heroName)) {
        this.AllHeroes.push(this.HeroesByName[heroName]);
      }
    }
  }

  public getHero(name: string): heroes.IHero {
    return this.HeroesByName[name];
  }
}
