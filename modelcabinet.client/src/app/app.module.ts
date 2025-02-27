import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // For routerLink
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProjectListPageComponent } from './projects/project-list-page/project-list-page.component';
import { ProjectPageComponent } from './projects/project-page/project-page.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { HelpProjectComponent } from './Help-Page/Help-Page.component';
import { AssetListComponent } from './asset/asset-list/asset-list.component';
import { AssetDetailComponent } from './asset/asset-detail/asset-detail.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AboutModelCabinetComponent } from './About-ModelCabinet/About-ModelCabinet.component';
import { TagEditComponent } from './tags/tag-edit/tag-edit.component';
import { LoginComponent } from './login/login.component';

// Also import any additional components used in templates:
import { ContributorsComponent } from './components/contributors/contributors.component';
import { DeveloperCardComponent } from './components/developer-card/developer-card.component';
import { TagLabelComponent } from './components/tag-label/tag-label.component';
// ... and any other components, pipes, or directives.

@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent,
    LandingPageComponent,
    ProjectListPageComponent,
    ProjectPageComponent,
    ChangelogComponent,
    HelpProjectComponent,
    AssetListComponent,
    AssetDetailComponent,
    ProfilePageComponent,
    AboutModelCabinetComponent,
    TagEditComponent,
    LoginComponent,
    ContributorsComponent,
    DeveloperCardComponent,
    TagLabelComponent,
    // Declare any custom pipes (e.g., a fileSize pipe) if you use them.
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,              // For ngModel
    ReactiveFormsModule,      // For formGroup
    HttpClientModule,         // For HTTP calls (e.g., AuthService)
    RouterModule,             // For routerLink etc.
  ],
  providers: [],
  // Optionally, if you want to ignore unknown element errors, you can add:
  // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
