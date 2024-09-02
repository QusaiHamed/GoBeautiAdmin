import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoBeautyARComponent } from './components/go-beauty-ar/go-beauty-ar.component';
import { GoBeautyENComponent } from './components/go-beauty-en/go-beauty-en.component';

const routes: Routes = [
  {path:'',redirectTo:'AR',pathMatch:'full'},
  {path:'AR',component:GoBeautyARComponent},
  {path:'EN',component:GoBeautyENComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
