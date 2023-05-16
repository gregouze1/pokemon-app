import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemon-list';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, of } from 'rxjs';

@Injectable()
export class PokemonService {

  constructor(private  http: HttpClient){}

  getPokemonList(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap( (pokemonList: Pokemon[]) => console.table(pokemonList)),
      catchError((error) => {
        console.log(error);
        return of([])
      })
    );
  }

  getPokemonById(pokemonId: number): Observable <Pokemon|undefined>{
    const g={id:pokemonId};
    return this.http.get<Pokemon>(`api/pokemons/${g.id}`).pipe(
      tap((pok: Pokemon) => console.table(pok)),
      catchError((error) => {
        console.log(error);
        return of(undefined)
      })
    )
  }

  getPokemonTypeList(): string[]{
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy'
    ];
  }
}
