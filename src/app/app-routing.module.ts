import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoredDataComponent } from './stored-data/stored-data.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{path:'register', component:UserComponent
},
{path:'registeredUsers',component:StoredDataComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
