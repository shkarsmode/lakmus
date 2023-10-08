import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
            import('./home/home.module').then(m => m.HomeModule)
    },
    {
        path: '**',
        loadChildren: () =>
            import('./not-found/not-found.module').then(m => m.NotFoundModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WebsiteRoutingModule {}
