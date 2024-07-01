import { Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NoteComponent } from './components/note/note.component';
import { AboutComponent } from './components/about/about.component';
import { AboutProjectsComponent } from './components/about-projects/about-projects.component';
import { AboutSponsorsComponent } from './components/about-sponsors/about-sponsors.component';

export const routes: Routes = [
  {
    path: 'notes',
    title: 'Notes',
    component: NotesComponent,
  },
  {
    path: 'notes/:id',
    title: 'Note',
    component: NoteComponent,
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent,
    children: [
      {
        path: 'projects',
        title: 'About Project',
        component: AboutProjectsComponent,
      },
      {
        path: 'sponsors',
        title: 'About Sponsors',
        component: AboutSponsorsComponent,
      },
    ],
  },

  //   {
  //     path: '',
  //     redirectTo: '/notes',
  //     pathMatch: 'full',
  //   },
  {
    path: '**',
    title: '404 - Page not found',
    component: PageNotFoundComponent,
  },
];
