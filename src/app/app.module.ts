import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthInterceptor } from '../app/core/service/intercepter/intercerpter';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ListflimComponent } from './pages/home/listflim/listflim.component';
import { FilmComponent } from './pages/home/film/film.component';
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { DetailComponent } from './pages/detail/detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SafePipe } from './pipes/safe.pipe';
import { ShowtimeComponent } from './pages/detail/showtime/showtime.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { DetalrapComponent } from './pages/detail/detalrap/detalrap.component';
import { TimefimComponent } from './pages/detail/timefim/timefim.component';
import { DatveComponent } from './pages/datve/datve.component';
import { GheComponent } from './pages/datve/ghe/ghe.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/admin/user/user.component';
import { FlimComponent } from './pages/admin/flim/flim.component';
import { DodashComponent } from './pages/admin/dodash/dodash.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdduserComponent } from './pages/admin/user/adduser/adduser.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './pages/admin/user/popup/popup.component';
import { PopupEditUserComponent } from './pages/admin/user/popup-edit-user/popup-edit-user.component';
const materialMoule = [
  MatTableModule,
  MatSlideToggleModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatGridListModule,
  MatCardModule,
  MatTabsModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatDialogModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ListflimComponent,
    FilmComponent,
    CarouselComponent,
    DetailComponent,
    SafePipe,
    ShowtimeComponent,
    DetalrapComponent,
    TimefimComponent,
    DatveComponent,
    GheComponent,
    AdminComponent,
    UserComponent,
    FlimComponent,
    DodashComponent,
    AdduserComponent,
    PopupComponent,
    PopupEditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialMoule,
    ReactiveFormsModule,
    HttpClientModule,
    SlickCarouselModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
