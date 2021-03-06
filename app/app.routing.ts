import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { PrincipalComponent } from "./principal/principal.component";
import { SeguentComponent } from './seguent/seguent.component';

const routes: Routes = [
    { path: "", redirectTo: "/principal", pathMatch: "full" },
    { path: "principal", component: PrincipalComponent },
    { path: "seguent", component: SeguentComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }