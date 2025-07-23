import { Routes } from '@angular/router';
import { Home } from './components/views/home/home';
import { SobreDesaventureiros } from './components/views/desaventureiros/sobre/sobre';
import { SobreVinteNatural } from './components/views/vinte-natural/sobre/sobre';
import { Personagens } from './components/views/desaventureiros/personagens/personagens';
import { Episodios } from './components/views/desaventureiros/episodios/episodios';
import { Campanhas } from './components/views/vinte-natural/campanhas/campanhas';
import { Oneshots } from './components/views/vinte-natural/oneshots/oneshots';
import { SobreOutrasSeries } from './components/views/outras-series/sobre/sobre';
import { Hque } from './components/views/outras-series/hque/hque';
import { Chaverna } from './components/views/outras-series/chaverna/chaverna';
import { LivesConversa } from './components/views/outras-series/lives-conversa/lives-conversa';
import { ExternalLink } from './components/resources/external-link/external-link';
import { TabelaDePersonagens } from './components/views/vinte-natural/tabela-de-personagens/tabela-de-personagens';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home,
        pathMatch: 'full'
    },
    {
        path: 'desaventureiros/sobre',
        component: SobreDesaventureiros,
        pathMatch: 'full'
    },
    {
        path: 'desaventureiros/personagens',
        component: Personagens,
        pathMatch: 'full'
    },
    {
        path: 'desaventureiros/episodios',
        component: Episodios,
        pathMatch: 'full'
    },
    {
        path: 'desaventureiros',
        redirectTo: 'desaventureiros/sobre',
        pathMatch: 'full'
    },
    {
        path: 'vintenatural/sobre',
        component: SobreVinteNatural,
        pathMatch: 'full'
    },
    {
        path: 'vintenatural/campanhas',
        component: Campanhas,
        pathMatch: 'full'
    },
    {
        path: 'vintenatural/oneshots',
        component: Oneshots,
        pathMatch: 'full'
    },
    {
        path: 'vintenatural/tabela',
        component: TabelaDePersonagens,
        pathMatch: 'full'
    },
    {
        path: 'vintenatural',
        redirectTo: 'vintenatural/sobre',
        pathMatch: 'full'
    },
    {
        path: 'outras/sobre',
        component: SobreOutrasSeries,
        pathMatch: 'full'
    },
    {
        path: 'outras/hque',
        component: Hque,
        pathMatch: 'full'
    },
    {
        path: 'outras/chaverna',
        component: Chaverna,
        pathMatch: 'full'
    },
    {
        path: 'outras/livesconversa',
        component: LivesConversa,
        pathMatch: 'full'
    },
    {
        path: 'outras',
        redirectTo: 'outras/sobre',
        pathMatch: 'full'
    },
    {
        path: 'externallink/:route',
        component: ExternalLink,
        pathMatch: 'full'
    }
];
