import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="bg-pink-200 text-pink-900 shadow-md">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <a routerLink="/" class="text-2xl font-bold">HeadHunter</a>
          <div class="flex space-x-4">
            <a routerLink="/companies" routerLinkActive="font-bold underline" 
               class="hover:bg-pink-400 px-3 py-2 rounded">Companies</a>
            <a routerLink="/vacancies" routerLinkActive="font-bold underline" 
               class="hover:bg-pink-400 px-3 py-2 rounded">Vacancies</a>
            <a routerLink="/top-vacancies" routerLinkActive="font-bold underline" 
               class="hover:bg-pink-400 px-3 py-2 rounded">Top Vacancies</a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {}