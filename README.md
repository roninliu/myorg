# Nx 使用示例

基于 NX 实现多包设计方式

## 项目目录

```bash
├── apps
│   ├── mobile
│   │   ├── README.md
│   │   ├── build
│   │   │   ├── index.js
│   │   │   └── index.js.map
│   │   ├── package.json
│   │   ├── project.json
│   │   ├── public
│   │   │   ├── build
│   │   │   │   ├── _assets
│   │   │   │   │   └── styles-AKC2VCWJ.css
│   │   │   │   ├── _shared
│   │   │   │   │   ├── chunk-3L74C7FM.js
│   │   │   │   │   └── chunk-ZTKE6CV2.js
│   │   │   │   ├── entry.client-CHAVFOZR.js
│   │   │   │   ├── manifest-27F45E06.js
│   │   │   │   ├── root-NASWVRCI.js
│   │   │   │   └── routes
│   │   │   │       ├── _index-W36RTXA3.js
│   │   │   │       └── hero-VBWDKYPJ.js
│   │   │   └── favicon.ico
│   │   ├── remix.config.js
│   │   ├── remix.env.d.ts
│   │   ├── src
│   │   │   ├── root.tsx
│   │   │   ├── routes
│   │   │   │   ├── _index.tsx
│   │   │   │   └── hero
│   │   │   │       ├── HeroList.tsx
│   │   │   │       └── route.tsx
│   │   │   └── styles.css
│   │   ├── tailwind.config.ts
│   │   └── tsconfig.json
│   └── web
│       ├── README.md
│       ├── build
│       │   ├── index.js
│       │   └── index.js.map
│       ├── package.json
│       ├── project.json
│       ├── public
│       │   ├── build
│       │   └── favicon.ico
│       ├── remix.config.js
│       ├── remix.env.d.ts
│       ├── src
│       │   ├── root.tsx
│       │   ├── routes
│       │   │   ├── _index.tsx
│       │   │   └── hero
│       │   │       ├── HeroList.tsx
│       │   │       └── route.tsx
│       │   └── styles.css
│       ├── tailwind.config.ts
│       └── tsconfig.json
├── babel.config.json
├── libs
│   ├── entities
│   │   ├── README.md
│   │   ├── project.json
│   │   ├── src
│   │   │   ├── hero
│   │   │   │   └── HeroEntity.ts
│   │   │   └── index.ts
│   │   ├── tsconfig.json
│   │   └── tsconfig.lib.json
│   ├── hooks
│   │   ├── README.md
│   │   ├── project.json
│   │   ├── src
│   │   │   ├── hero
│   │   │   │   └── useHero.ts
│   │   │   └── index.ts
│   │   ├── tsconfig.json
│   │   └── tsconfig.lib.json
│   ├── repository
│   │   ├── README.md
│   │   ├── project.json
│   │   ├── src
│   │   │   ├── datatmp
│   │   │   │   └── data.ts
│   │   │   ├── hero
│   │   │   │   └── HeroRepository.ts
│   │   │   └── index.ts
│   │   ├── tsconfig.json
│   │   └── tsconfig.lib.json
│   └── services
│       ├── README.md
│       ├── project.json
│       ├── src
│       │   ├── hero
│       │   │   └── HeroService.ts
│       │   └── index.ts
│       ├── tsconfig.json
│       └── tsconfig.lib.json
├── nx.json
├── package-lock.json
├── package.json
├── tools
│   ├── generators
│   └── tsconfig.tools.json
└── tsconfig.base.json

```

### 目录说明

- apps: 应用目录
- libs: 各个模块目录

## 体验开发方式

注: 应用使用 remixjs

### 安装依赖

```bash
npm install
```

### 启动应用

- web 应用

```bash
nx dev web
```

- mobile 应用

```bash
nx dev mobile
```

### 分析项目依赖关系

```bash
nx graph
```

#### 相关资料

- remix : <https://remix.run/docs/en/main>
- nx : <https://nx.dev/getting-started/intro>
- @nrwl/remix : <https://www.npmjs.com/package/@nrwl/remix>
