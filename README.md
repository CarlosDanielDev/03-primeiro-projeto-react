# Dia 15 - Primeiro projeto com React


# Criando projeto

Vamos iniciar com uma ferramenta chamada `CRA`, ou mais conhecida como `Create React App`, é uma feeramenta que cria um boilerplate, ou seja um step inicial com tudo pré-configurado pra você, não é necessário que você tenha essa ferramente instalada na sua máquina, basta você ter o `Node` na versão `LTS` que ele vem uma ferramenta muito dahora chamada `NPX`, com o `NPX` você consegue executar a `CLI` do `CRA` utilizando o exemplo abaixo:

```bash
npx create-react-app My-New-App --template=typescript
```

> Como vamos utilizar typescript utilizei a flag `--template` passando o template de `typescript`.

Esta é a estrutura gerada pelo CRA:

```bash
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── serviceWorker.ts
│   └── setupTests.ts
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

Agora eu vou sublinhar em vermelho neste esquema acima quais arquivos vou apagar e de verde quais arquivos vou modificar, e logo abaixo vai estar o código de cada um modificado.

```bash
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── serviceWorker.ts
│   └── setupTests.ts
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#3a3a3a" />
    <title>Github_explorer</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

```tsx
// src/App.tsx

import React from 'react';

const App: React.FC = () => <h1>Olá Mundo</h1>;

export default App;
```

```tsx
// index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

Agora, vá no terminal e execute o comando abaixo para dar inicio:

```bash
yarn start
```

Agora, segue abaixo 1 link de referência para configuração do ESLint.

- [Eslint](https://www.notion.so/Padr-es-de-projeto-com-ESLint-Prettier-e-EditorConfig-0b57b47a24724c859c0cf226aa0cc3a7)

# Criando Rotas

Agora, vamos instalar a primeira dependência da nossa aplicação, uma dependência pra lidar com as rotas da nossa aplicação:

```bash
yarn add react-router-dom && yarn add @types/react-router-dom -D
```

Antes de criar as rotas, vamos criar algumas páginas para a nossa aplicação.

Dentro da pasta `src/`, crie uma pasta com o nome `pages/`, dentro dessa pasta crie mais 2 pastas, uma com o nome `Dashboard/` e dentro dessa pasta coloque um arqui, com o nome `index.tsx` e faça a mesma coisa para a pasta `Repository/`, com `index` dentro da pasta.

```tsx
// src/pages/Dashboard/index.tsx

import React from 'react';

const Dashboard: React.FC = () => {
  return <h1>Dashboard</h1>;
};

export default Dashboard;
```

```tsx
// src/pages/Repository/index.tsx

import React from 'react';

const Repository: React.FC = () => {
  return <h1>Repository</h1>;
};

export default Repository;
```

Agora, dentro da pasta `src/`, crie uma pasta com o nome `routes/`, e dentro dessa pasta que um arquivo com o nome `index.tsx`, deixe o arquivo dessa maneira:

```tsx
import React from 'react';
// importamos o Switch e o Route
// - Switch: Ele inclui a exclusividade de renderização, ou seja somente uma rota por vez
// - Route: Ele é um componente de Rota.
import { Switch, Route } from 'react-router-dom';
// Aqui umportamos nossas Pages
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

// Criamos nosso componente de Rotas
const Routes: React.FC = () => (
  // Encapsulamos todad as rotas dentro do Switch
  <Switch>
    {/* Passamos algumas propriedades pro componente de rota */}
    {/* path: propriedade onde informamos o cominho da rota */}
    {/* exact: propriedade onde informamos que a rota tem que ser exatamente como no path */}
    {/* component: propriedade onde informamos qual componente a rota vai renderizar */}
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
```

Agora, vamos modificar o arquivo `src/App.tsx`, deixe-o dessa forma:

```tsx
import React from 'react';
// Importamos o browser ROutes pra encapsular nossas rotas
import { BrowserRouter } from 'react-router-dom';
// Importamos noss arquivo de Rotas
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
```

Por fim, finalizamos as rotas 🙂

# Utilizando Styled Components

Agora vamos utilizar a lib pra Css in JS styled-components, para que possamos estilizar componentes de forma isolada, então execute o comando abaixo pra instalar as dependências:

```bash
yarn add styled-components && yarn add @types/styled-components -D
```

Crie uma pasta dentro da pasta `src/` com o nome `assets/`, e dentro dessa pasta crie um arquivo com o nome background.svg, e cole o conteúdo abaixo dentro deste arquivo:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="688"
  height="648"
  viewBox="0 0 688 648"
  fill="none"
>
  <g opacity="0.05">
    <g clip-path="url(#clip0)">
      <path
        d="M344 -25.6667C153.94 -25.6667 0 125.693 0 312.371C0 461.753 98.556 588.43 235.21 633.093C252.41 636.275 258.717 625.812 258.717 616.839C258.717 608.812 258.43 587.542 258.287 559.363C162.597 579.745 142.416 514.012 142.416 514.012C126.764 474.997 104.146 464.562 104.146 464.562C72.9853 443.607 106.554 444.037 106.554 444.037C141.097 446.387 159.243 478.867 159.243 478.867C189.917 530.553 239.768 515.617 259.433 506.989C262.529 485.116 271.387 470.238 281.22 461.781C204.823 453.325 124.528 424.257 124.528 294.741C124.528 257.847 137.858 227.689 159.931 204.039C156.061 195.497 144.451 161.125 162.941 114.571C162.941 114.571 191.751 105.512 257.541 149.229C285.061 141.718 314.301 137.991 343.541 137.819C372.781 137.991 402.021 141.718 429.541 149.229C494.901 105.512 523.711 114.571 523.711 114.571C542.201 161.125 530.591 195.497 527.151 204.039C549.081 227.689 562.411 257.847 562.411 294.741C562.411 424.601 482.001 453.181 405.461 461.495C417.501 471.643 428.681 492.369 428.681 524.045C428.681 569.281 428.251 605.631 428.251 616.61C428.251 625.468 434.271 636.046 451.901 632.663C589.53 588.287 688 461.523 688 312.371C688 125.693 533.974 -25.6667 344 -25.6667Z"
        fill="url(#paint0_linear)"
      />
    </g>
  </g>
  <defs>
    <linearGradient
      id="paint0_linear"
      x1="344"
      y1="-25.6667"
      x2="344"
      y2="633.676"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#121214" />
      <stop offset="1" stop-color="#121214" stop-opacity="0" />
    </linearGradient>
    <clipPath id="clip0">
      <rect y="-40" width="688" height="688" fill="white" />
    </clipPath>
  </defs>
</svg>
```

Agora que temos nosso `background`, vamos começar primeiro estilizando nosso componente de `Dashboard`, então dentro da pasta `Dashboard/`, vamos criar um arquivo `styles.ts`, e dentro desse arquivo vamos fazer o seguinte código:

```tsx
// importamos a propriedade Styled den dentro da lib
import styled from 'styled-components';

// exportamos uma constante com o nome do nosso componente
// dentro da propriedade styled, eu tenho todos os elementos do html, no nosso caso vamos usar o h1
// então fazemos dessa forma, abrimos o Template Literals, e fazemos o css puro dentro desse Template Literals do JS.
export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;
```

Agora, dentro no nosso index da pasta Dashboard/, vamos fazer algumas modificações, segue o código abaixo:

```tsx
import React from 'react';

// importamos tudo dentro da propriedade S, acredito que fique mais fácil pra identificar componentes estilizados de componentes nativos
// mas voie poderia importar desestruturando, fica a seu critério
import * as S from './styles';

const Dashboard: React.FC = () => {
  return <S.Title>Explore repositórios no Github.</S.Title>;
};

export default Dashboard;
```

Então, nesse momento vamos adicionar os estilos globais em nossa aplicação, agora na apsta `src/`, crie uma pasta com o nome `styles/`, depois crie um arquivo com o nome `global.ts`, e dentro desse arquivo coloque o seguinte código:

```tsx
import { createGlobalStyle } from 'styled-components';
// importei a imagem de background
import background from '../assets/background.svg';
// criei os estilos globais
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #F0F0F5 url(${background}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Roboto', sans-serif;
  }

  #root {
    max-width: 900px;
    margin: 0 auto;
    padding: 40px 20px;
  }

	button {
    cursor: pointer;
  }
`;
export default GlobalStyle;
```

Agora edite o arquivo App.tsx, e deixe-o dessa forma:

```tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    {/* Declarei meu componente de estilo Global na minha aplicação */}
    <GlobalStyle />
  </>
);

export default App;
```

Finalizamos o uso do Styled-Components

# Estilizando Dashboard

Agora, vamos colocar a logo da aplicação no dashboard, crie um arquivo da pasta assets dentros de src, com o nome logo.svg, cole o código abaixo noa rquivo:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="215"
  height="32"
  viewBox="0 0 215 32"
  fill="none"
>
  <path
    d="M48.9609 17.5664C48.9609 15.5977 49.4219 14.0273 50.3438 12.8555C51.2734 11.6758 52.5039 11.0859 54.0352 11.0859C55.4805 11.0859 56.6172 11.5898 57.4453 12.5977L57.5742 11.3203H60.1406V23.6133C60.1406 25.2773 59.6211 26.5898 58.582 27.5508C57.5508 28.5117 56.1562 28.9922 54.3984 28.9922C53.4688 28.9922 52.5586 28.7969 51.668 28.4062C50.7852 28.0234 50.1133 27.5195 49.6523 26.8945L51 25.1836C51.875 26.2227 52.9531 26.7422 54.2344 26.7422C55.1797 26.7422 55.9258 26.4844 56.4727 25.9688C57.0195 25.4609 57.293 24.7109 57.293 23.7188V22.8633C56.4727 23.7773 55.3789 24.2344 54.0117 24.2344C52.5273 24.2344 51.3125 23.6445 50.3672 22.4648C49.4297 21.2852 48.9609 19.6523 48.9609 17.5664ZM51.7969 17.8125C51.7969 19.0859 52.0547 20.0898 52.5703 20.8242C53.0938 21.5508 53.8164 21.9141 54.7383 21.9141C55.8867 21.9141 56.7383 21.4219 57.293 20.4375V14.8594C56.7539 13.8984 55.9102 13.418 54.7617 13.418C53.8242 13.418 53.0938 13.7891 52.5703 14.5312C52.0547 15.2734 51.7969 16.3672 51.7969 17.8125ZM66.1055 24H63.2578V11.3203H66.1055V24ZM63.082 8.02734C63.082 7.58984 63.2188 7.22656 63.4922 6.9375C63.7734 6.64844 64.1719 6.50391 64.6875 6.50391C65.2031 6.50391 65.6016 6.64844 65.8828 6.9375C66.1641 7.22656 66.3047 7.58984 66.3047 8.02734C66.3047 8.45703 66.1641 8.81641 65.8828 9.10547C65.6016 9.38672 65.2031 9.52734 64.6875 9.52734C64.1719 9.52734 63.7734 9.38672 63.4922 9.10547C63.2188 8.81641 63.082 8.45703 63.082 8.02734ZM72.7852 8.23828V11.3203H75.0234V13.4297H72.7852V20.5078C72.7852 20.9922 72.8789 21.3438 73.0664 21.5625C73.2617 21.7734 73.6055 21.8789 74.0977 21.8789C74.4258 21.8789 74.7578 21.8398 75.0938 21.7617V23.9648C74.4453 24.1445 73.8203 24.2344 73.2188 24.2344C71.0312 24.2344 69.9375 23.0273 69.9375 20.6133V13.4297H67.8516V11.3203H69.9375V8.23828H72.7852ZM80.0156 12.7031C80.9453 11.625 82.1211 11.0859 83.543 11.0859C86.2461 11.0859 87.6172 12.6289 87.6562 15.7148V24H84.8086V15.8203C84.8086 14.9453 84.6172 14.3281 84.2344 13.9688C83.8594 13.6016 83.3047 13.418 82.5703 13.418C81.4297 13.418 80.5781 13.9258 80.0156 14.9414V24H77.168V6H80.0156V12.7031ZM98.2266 22.7578C97.3906 23.7422 96.2031 24.2344 94.6641 24.2344C93.2891 24.2344 92.2461 23.832 91.5352 23.0273C90.832 22.2227 90.4805 21.0586 90.4805 19.5352V11.3203H93.3281V19.5C93.3281 21.1094 93.9961 21.9141 95.332 21.9141C96.7148 21.9141 97.6484 21.418 98.1328 20.4258V11.3203H100.98V24H98.2969L98.2266 22.7578ZM115.008 17.7891C115.008 19.7578 114.566 21.3242 113.684 22.4883C112.809 23.6523 111.602 24.2344 110.062 24.2344C108.578 24.2344 107.422 23.6992 106.594 22.6289L106.453 24H103.875V6H106.723V12.5391C107.543 11.5703 108.648 11.0859 110.039 11.0859C111.586 11.0859 112.801 11.6602 113.684 12.8086C114.566 13.957 115.008 15.5625 115.008 17.625V17.7891ZM112.16 17.543C112.16 16.168 111.918 15.1367 111.434 14.4492C110.949 13.7617 110.246 13.418 109.324 13.418C108.09 13.418 107.223 13.957 106.723 15.0352V20.2617C107.23 21.3633 108.105 21.9141 109.348 21.9141C110.238 21.9141 110.926 21.582 111.41 20.918C111.895 20.2539 112.145 19.25 112.16 17.9062V17.543Z"
    fill="#737380"
  />
  <path
    d="M126.727 26.2383H115.98V24H126.727V26.2383ZM133.816 24.2344C132.012 24.2344 130.547 23.668 129.422 22.5352C128.305 21.3945 127.746 19.8789 127.746 17.9883V17.6367C127.746 16.3711 127.988 15.2422 128.473 14.25C128.965 13.25 129.652 12.4727 130.535 11.918C131.418 11.3633 132.402 11.0859 133.488 11.0859C135.215 11.0859 136.547 11.6367 137.484 12.7383C138.43 13.8398 138.902 15.3984 138.902 17.4141V18.5625H130.617C130.703 19.6094 131.051 20.4375 131.66 21.0469C132.277 21.6562 133.051 21.9609 133.98 21.9609C135.285 21.9609 136.348 21.4336 137.168 20.3789L138.703 21.8438C138.195 22.6016 137.516 23.1914 136.664 23.6133C135.82 24.0273 134.871 24.2344 133.816 24.2344ZM133.477 13.3711C132.695 13.3711 132.062 13.6445 131.578 14.1914C131.102 14.7383 130.797 15.5 130.664 16.4766H136.09V16.2656C136.027 15.3125 135.773 14.5938 135.328 14.1094C134.883 13.6172 134.266 13.3711 133.477 13.3711ZM145.676 15.4922L148.09 11.3203H151.254L147.375 17.5664L151.383 24H148.242L145.711 19.6641L143.191 24H140.027L144.035 17.5664L140.168 11.3203H143.309L145.676 15.4922ZM164.297 17.7891C164.297 19.75 163.852 21.3164 162.961 22.4883C162.07 23.6523 160.875 24.2344 159.375 24.2344C157.984 24.2344 156.871 23.7773 156.035 22.8633V28.875H153.188V11.3203H155.812L155.93 12.6094C156.766 11.5938 157.902 11.0859 159.34 11.0859C160.887 11.0859 162.098 11.6641 162.973 12.8203C163.855 13.9688 164.297 15.5664 164.297 17.6133V17.7891ZM161.461 17.543C161.461 16.2773 161.207 15.2734 160.699 14.5312C160.199 13.7891 159.48 13.418 158.543 13.418C157.379 13.418 156.543 13.8984 156.035 14.8594V20.4844C156.551 21.4688 157.395 21.9609 158.566 21.9609C159.473 21.9609 160.18 21.5977 160.688 20.8711C161.203 20.1367 161.461 19.0273 161.461 17.543ZM169.746 24H166.898V6H169.746V24ZM172.324 17.543C172.324 16.3008 172.57 15.1836 173.062 14.1914C173.555 13.1914 174.246 12.4258 175.137 11.8945C176.027 11.3555 177.051 11.0859 178.207 11.0859C179.918 11.0859 181.305 11.6367 182.367 12.7383C183.438 13.8398 184.016 15.3008 184.102 17.1211L184.113 17.7891C184.113 19.0391 183.871 20.1562 183.387 21.1406C182.91 22.125 182.223 22.8867 181.324 23.4258C180.434 23.9648 179.402 24.2344 178.23 24.2344C176.441 24.2344 175.008 23.6406 173.93 22.4531C172.859 21.2578 172.324 19.668 172.324 17.6836V17.543ZM175.172 17.7891C175.172 19.0938 175.441 20.1172 175.98 20.8594C176.52 21.5938 177.27 21.9609 178.23 21.9609C179.191 21.9609 179.938 21.5859 180.469 20.8359C181.008 20.0859 181.277 18.9883 181.277 17.543C181.277 16.2617 181 15.2461 180.445 14.4961C179.898 13.7461 179.152 13.3711 178.207 13.3711C177.277 13.3711 176.539 13.7422 175.992 14.4844C175.445 15.2188 175.172 16.3203 175.172 17.7891ZM193.16 13.9219C192.785 13.8594 192.398 13.8281 192 13.8281C190.695 13.8281 189.816 14.3281 189.363 15.3281V24H186.516V11.3203H189.234L189.305 12.7383C189.992 11.6367 190.945 11.0859 192.164 11.0859C192.57 11.0859 192.906 11.1406 193.172 11.25L193.16 13.9219ZM200.309 24.2344C198.504 24.2344 197.039 23.668 195.914 22.5352C194.797 21.3945 194.238 19.8789 194.238 17.9883V17.6367C194.238 16.3711 194.48 15.2422 194.965 14.25C195.457 13.25 196.145 12.4727 197.027 11.918C197.91 11.3633 198.895 11.0859 199.98 11.0859C201.707 11.0859 203.039 11.6367 203.977 12.7383C204.922 13.8398 205.395 15.3984 205.395 17.4141V18.5625H197.109C197.195 19.6094 197.543 20.4375 198.152 21.0469C198.77 21.6562 199.543 21.9609 200.473 21.9609C201.777 21.9609 202.84 21.4336 203.66 20.3789L205.195 21.8438C204.688 22.6016 204.008 23.1914 203.156 23.6133C202.312 24.0273 201.363 24.2344 200.309 24.2344ZM199.969 13.3711C199.188 13.3711 198.555 13.6445 198.07 14.1914C197.594 14.7383 197.289 15.5 197.156 16.4766H202.582V16.2656C202.52 15.3125 202.266 14.5938 201.82 14.1094C201.375 13.6172 200.758 13.3711 199.969 13.3711ZM214.254 13.9219C213.879 13.8594 213.492 13.8281 213.094 13.8281C211.789 13.8281 210.91 14.3281 210.457 15.3281V24H207.609V11.3203H210.328L210.398 12.7383C211.086 11.6367 212.039 11.0859 213.258 11.0859C213.664 11.0859 214 11.1406 214.266 11.25L214.254 13.9219Z"
    fill="#A8A8B3"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0 16C0 7.16002 7.16002 0 16 0C24.84 0 32 7.16002 31.9999 16C31.9999 24.832 24.8399 31.9999 16 31.9999C7.16002 31.9999 0 24.832 0 16ZM6.39997 25.6L19.504 19.504L25.6 6.39997L12.496 12.496L6.39997 25.6ZM17.76 16C17.76 16.968 16.9759 17.76 16 17.76C15.032 17.76 14.2399 16.968 14.2399 16C14.2399 15.0319 15.0319 14.2399 16 14.2399C16.976 14.2399 17.76 15.0319 17.76 16Z"
    fill="#121214"
  />
</svg>
```

Antes disso vamos inatalar um pacote de icones para a nossa aplicação:

```bash
yarn add react-icons
```

Agora, vamo editar o arquivo index da nossa page Dashboard, deixe-o arquivo dessa forma:

```tsx
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="github_explorer" />
      <S.Title>Explore repositórios no Github.</S.Title>
      <S.Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </S.Form>

      <S.Repositories>
        <a href="teste">
          <img
            src="https://xesque.rocketseat.dev/users/avatar/profile-bafd0fef-4ab3-4bc7-a28e-d1c9d639e906.jpg"
            alt="Carlos Daniel"
          />
          <div>
            <strong>DanPHP7/primeiro-react</strong>
            <p>Guia para o seu primeiro projeto em React!</p>
          </div>

          <FiChevronRight />
        </a>
      </S.Repositories>
    </>
  );
};

export default Dashboard;
```

> Antes de fazer o CSS instale a lib abaixo:

```bash
yarn add polished
```

Agora, edite o arquivo de estilo da page Desahboard:

```tsx
import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 715px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
```

Com isso finalizamos a estilização do Dashboard da nossa aplicação!

# Conectando a API

Agora, vamos consumir a API do github pra exibir os repositeorios reais.

Agora vamos istalar uma lib pra lidar com requisicões http, o axios, instale ele na sua aplicação com o comando abaixo:

```bash
yarn add axios
```

Agora na pasta `src/`, do nosso projeto, crie uma pasta com o nome `services/`, e dentro dessa pasta o arquivo `api.ts`:

```tsx
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
```

Agora, vamos editar o arquivo de index da nossa page Dashboard integrando com a API do GitHub, utilizando state, interfaces, imutabilidade e muito mais :D :

```tsx
import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import * as S from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`/repos/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');
  }
  return (
    <>
      <img src={logo} alt="github_explorer" />
      <S.Title>Explore repositórios no Github.</S.Title>
      <S.Form onSubmit={handleAddRepository}>
        <input
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </S.Form>

      <S.Repositories>
        {repositories.map(repository => (
          <a href="teste" key={repository.full_name}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight />
          </a>
        ))}
      </S.Repositories>
    </>
  );
};

export default Dashboard;
```

Fim :), estilizamos nosso Dashboard, e conectamos com a API do Github.

# Lidando com erros

Agora, vamos lidar com alguns erros que podem acontecer na aplicacão, vamos criar um estado pra erros e tratar esses erros, edite o arquivo inde da nossa page Dashboard:

```tsx
import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import * as S from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  // criei um novo estado para os erros
  const [error, setInputError] = useState('');

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    // fiz uma verificacão na variavel que usamos para a busca de um novo repo
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }
    // utilizei o try/catch para a captura de erros
    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch {
      setInputError('Erro na busca por esse repositório');
    }
  }
  return (
    <>
      <img src={logo} alt="github_explorer" />
      <S.Title>Explore repositórios no Github.</S.Title>
      {/*Coloquei uma propriedade de erro para o formulário para nós podemros estilizar ele*/}
      <S.Form hasError={!!error} onSubmit={handleAddRepository}>
        {/* coloquei o value do input com a nossa variavel de busca */}
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </S.Form>
      {/*  Fiz um if pra exibir o componente de erro */}
      {error && <S.Error>{error}</S.Error>}

      <S.Repositories>
        {repositories.map(repository => (
          <a href="teste" key={repository.full_name}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight />
          </a>
        ))}
      </S.Repositories>
    </>
  );
};

export default Dashboard;
```

Depois disso vamos fazer algumas configuracões no nosso arquivo de estilos da nossa page Dashboard para estilizar nossos erros:

```tsx
// importei uma função pra adionar css extra no styled-components
import styled, { css } from 'styled-components';
import { shade } from 'polished';

// defini as props do nosso form
interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;
`;
// estilizei o componente de erro
export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 715px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: solid 2px #fff;
    border-right: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

		${// Aqui tenho acesso a propriedade do form e posso aplicar css sobre ela}

    ${({ hasError }) =>
      hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
```

Por fim finalizamos as tratativas de erro!

# Salvando no Storage

Agora vamos salvar os dados dos repositories no `storage` da aplicação!

Vamos utilizar a variavel global `localStorage` do próprio `JS`, então abaixo seguem as modificações no código:

```tsx
import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import * as S from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  // como o localStorage é um API Síncrona podemos ao invés de passar um array
  // como valor default, passar uma função, e dentro dessa função
  // fazemos algumas verificações
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    // buscamos os dados da chave da nossa aplicação no localStorage
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );
    // verificamos se há algo
    if (storagedRepositories) {
      // se sim devolva esse valor como default do meu estado
      return JSON.parse(storagedRepositories);
    }
    // se  não devolva um array vazio.
    return [];
  });
  const [error, setInputError] = useState('');

  // estamos monitoramdno a variavel repositories com esse hook
  // e setando toda vez um novo valor no localStorage
  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch {
      setInputError('Erro na busca por esse repositório');
    }
  }
  return (
    <>
      <img src={logo} alt="github_explorer" />
      <S.Title>Explore repositórios no Github.</S.Title>
      <S.Form hasError={!!error} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </S.Form>
      {error && <S.Error>{error}</S.Error>}

      <S.Repositories>
        {repositories.map(repository => (
          <a href="teste" key={repository.full_name}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight />
          </a>
        ))}
      </S.Repositories>
    </>
  );
};

export default Dashboard;
```

FIm :)

# Navegando entre rotas

O que vamos fazer agora é navgera entre as rotas da nossa aplicação, vamos começar editando o arquivo de rotas da nossa aplicação, segue o código abaixo:

```tsx
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/*
			- Adicionamos um parâmetro pra nossa rota, como a rota do github
			pra buscar detalhes de um repository em especifico é o owner/repository_name
			o react router dom ficaria confuso e acharia que deposi da / seria outra rota
			pra resolver este problema incluimos o simbolo de + após o parâmetro da rota
		 */}
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
```

Agora no nosso arquivo `Dashboard/index.tsx`, vamos substituir a ancora que faz o redirecionamento pra página de `Repository/index.tsx`:

```tsx
import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
// importei o Link do rrd
import { Link } from 'react-router-dom';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import * as S from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });
  const [error, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch {
      setInputError('Erro na busca por esse repositório');
    }
  }
  return (
    <>
      <img src={logo} alt="github_explorer" />
      <S.Title>Explore repositórios no Github.</S.Title>
      <S.Form hasError={!!error} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </S.Form>
      {error && <S.Error>{error}</S.Error>}

      <S.Repositories>
        {repositories.map(repository => (
					{/* E Substitui a nossa ancora pelo Link do rrd */}
          <Link
            to={`/repository/${repository.full_name}`}
            key={repository.full_name}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight />
          </Link>
        ))}
      </S.Repositories>
    </>
  );
};

export default Dashboard;
```

Depois disso, nós precisamos receber os parâmetros passados na rota pro nosso componente `Repository/index.tsx`, vamos recebe-los assim:

```tsx
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return <h1>Repository: {params.repository}</h1>;
};

export default Repository;
```

Agora sabemos como navegar entre rotas, passar parâmetros e recuperar os parâmetros das rotas!

# Estilizando detalhes

Agora vamos estilizar a página de `Repository/index.tsx`, primeiro vamos começar criando a estrutura do componente, depois vamos pra estilização, e por fim sua integração.

```tsx
// Repository/index.tsx
import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import * as S from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <S.Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </S.Header>

      <S.RepositoryInfo>
        <header>
          <img
            src="https://ligadoamusica.com.br/wp-content/uploads/2019/07/acdc-2019.jpg"
            alt="AC/DC"
          />
          <div>
            <strong>ac_dc/highway_to_hell</strong>
            <p>Descrição</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>

          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>

          <li>
            <strong>65</strong>
            <span>Issues</span>
          </li>
        </ul>
      </S.RepositoryInfo>

      <S.Issues>
        <Link to="/acdc">
          <div>
            <strong>asdasd</strong>
            <p>asasasas</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </S.Issues>
    </>
  );
};

export default Repository;
```

Crie um arquivo com o nome `styles.ts` dentro da pasta `Repository/`

```tsx
// Repository/styles.ts
import styled from 'styled-components';

export const Header = styled.h1`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    font-size: 18px;
    transition: color 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
```

> Dica: Se você começar as estilizar mais de 2 níveis de elementos em uma estrutura de componente, isole o componente até permanecer na regra dos 2 níveis

# Listando Issues da API

Agora, vamos nos conectar coma a API do Github!

Agora vamos usar alguns `hooks`, o `useEffect` e o `useState` do `React`!, segue o exemplo abaixo:

- o `useState` é utilizado para armazenar estados.
- o `useEffect` é utilizado para controle do ciclo de vida do componente e side effects.

```tsx
// Repository/index.tsx

import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

import * as S from './styles';
// criamos algumas interfaces
interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  title: string;
  id: number;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  // aqui criamos os estados
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();
  // chamamos o usEffect
  useEffect(() => {
    // criamos uma função para lidar com a chama e atualização dos estados
    async function loadData(): Promise<void> {
      const [repositoryResponse, issuesResponse] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);
      setRepository(repositoryResponse.data);
      setIssues(issuesResponse.data);
    }

    // aqui invocamos a função
    loadData();
  }, [params.repository]);

  return (
    <>
      <S.Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </S.Header>
      {/* Criamos a condicional apra aguardar o carregamento dos dados */}
      {repository && (
        <S.RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt="AC/DC" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>

            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>

            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues</span>
            </li>
          </ul>
        </S.RepositoryInfo>
      )}

      <S.Issues>
        {/* Iteramos sob o array de issues exibindo cada */}
        {issues.map(issue => (
          <a
            href={issue.html_url}
            rel="noopener noreferrer"
            target="_blank"
            key={issue.id}
          >
            <div>
              <strong>{issue.user.login}</strong>
              <p>{issue.title}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </S.Issues>
    </>
  );
};

export default Repository;
```
