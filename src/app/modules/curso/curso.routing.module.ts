import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuestraCursoComponent } from './muestra-curso/muestra-curso.component';
import { CursoComponent } from './curso/curso.component';

const routes: Routes = [
    {
        path: '',        
        children: [
        {
            path: 'mostrarCurso',
            component: MuestraCursoComponent
        },
        {
            path: 'crearCurso',
            component: CursoComponent
        },
        {
            path: 'crearCurso/:id',
            component: CursoComponent
        },
    ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CursoRoutingModule { }