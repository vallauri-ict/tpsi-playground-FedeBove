import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Carbonara', 'Tipica pasta con pancetta ecc..', 'https://www.negroni.com/sites/negroni.com/files/styles/scale__1440_x_1440_/public/carbonara_la_pasta_amata.jpg?itok=Iz2Me_rw'),
    new Recipe('Amatriciana', 'Un primo piatto della tradizione laziale..', 'https://images.lacucinaitaliana.it/wp-content/uploads/2018/01/15191250/Bucatini-allamatriciana.jpg'),
    new Recipe('Lasagne', 'In italia questo piatto assume diverse declinazioni..', 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F61F7C83-0190-4F41-8CCA-793D799D91EF/Derivates/DBA70BC0-085D-405D-8593-BB5E136098DF.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
