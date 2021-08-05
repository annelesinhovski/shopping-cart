# Shopping Cart Flow

Welcome!
This is a front-end project for a (fictional) shopping cart flow.

## Setup

Yarn - ^1.22.4

Node - ^14.16.1

## Getting Started

First, install the dependencies needed to run this project:

```bash
yarn
```

After that, you can run the project you want to see running locally.
As this project is built using Yarn workspaces' architecture, there is a list bellow with all the projects in this repository and its running command.

**Shopping Cart**

```bash
yarn start:shopping
```

## Architecture

The repository is a monorepo using **yarn workspaces**, in other words, it is a project that has several other projects inside them that will be divided into two layers:

- **Shared**: projects shared among other projects (e.g.: components, useful scripts, requests)

- **Projects**: projects related to the application flow (in this structure, we have only one flow, which is the shopping cart flow, named "/shopping")

This architecture was designed to have a scalable structure that allows, among other things, good management of dependencies and code organization.

## Stack

This is a front-end project built using [React](https://pt-br.reactjs.org/) and [Next.js](https://nextjs.org/).

**Next.js** was choosen due to its advantages: rendering handling (hybrid, static, or SSR), smart bundle, ease routing (next/router) and the benefit of SEO (e.g. custom HEAD page) and performance optimization (e.g. image rendering).

HTTPs requests were made with [Axios](https://axios-http.com/ptbr/).

Unit tests using [Jest](https://jestjs.io/pt-BR/) and [Testing Library](https://testing-library.com/).
