import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-component',
  template: `
    <h2 class="center" >Editer  {{ pokemon?.name }}  </h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture">
      <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
    </p>
  `,
  styles: [
  ]
})
export class EditComponentComponent implements OnInit{

  pokemon: Pokemon | undefined

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService ){}

  ngOnInit(): void {
    let pokemonId : string | null = this.route.snapshot.paramMap.get('id');
    
    if (pokemonId!==null){
      let id=parseInt(pokemonId,10);
      this.pokemonService.getPokemonById(id).subscribe(pokemon => this.pokemon = pokemon);
    }else{
      this.pokemon = undefined;
    }
  }

}
