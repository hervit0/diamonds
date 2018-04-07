import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameModule } from "./game/game.module";

const routes: Routes = [
    {
        path: 'game',
        loadChildren: () => GameModule
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
