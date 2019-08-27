# Cucumber Hello World

Template project to kick start end-to-end testing using CucumberJS + Protractor with Gherkin style.

### Important

To get started with your own Test Automation Project, [**you don't need to clone this repo anymore.**](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/) Just click the [`Use this template`](https://github.com/kosalanuwan/cucumber-hello-world/generate) button from the top. To learn more about GitHub Template Projects, visit this [link](https://help.github.com/en/articles/creating-a-repository-from-a-template).

## Table of Content

- [Requirements](#requirements)
- [Build and Run](#build-and-run)
- [Contributing](#contributing)
- [Feedback](#feedback)
- [Related Projects](#related-projects)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Requirements

In order to download necessary tools, clone the repo, install dependencies via `yarn`, you need internet access.

You'll need the following tools:

- [Git]()
- [NodeJS](), x64, version `>=10.15`
- [Yarn](), version `>=1.17`, follow the [installation guide]()
- [Python](), version 2.7
  > macOS ships with Python v2.7. Above link is only for contributors that are not on macOS.
- [Visual Studio Code]()
  > Recommended extensions are mentioned in the [`extensions.json`](). This should automatically appear in your Extensions pane once open the code base.

## Build and Run

If you want to understand how starter kit works or want to debug an issue or build your automation test suite, you'll want to get the source code, build it, and run it locally.

### Getting the source Code

First, fork or create a new repo using the starter template. Then, clone your repo locally:

With VS Code:

- Install and build all the dependencies using `yarn`.
```bash
git clone https://github.com/<your-github-account>/cucumber-hello-world
cd cucumber-hello-world
```
- Run `yarn run clean:install` from the project root.
- Run `yarn run test:fast` from the project root.

Occationally, you will want to merge changes in the upstream repo, the official starter kit repo.
```bash
cd cucumber-hello-world
git checkout master
git pull
```
Manage any merge conflicts, commit, and then push them to your upstream repo.

### File structure
```bash
cucumber-hello-world
│
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│   ├── settings.json
│   └── tasks.json
│
├── config/
│   └── config.local.js
│
├── e2e/
│   ├── features/
│   │   └── search-contributor.feature
│   │
│   ├── pages/
│   │   ├── index.js
│   │   ├── navigator.js
│   │   ├── search-summary.component.js
│   │   └── search.component.js
│   │
│   └── steps/
│       └── search-contributor.steps.js
│
├── hooks/
│
├── loaders/
│   ├── use-chai-as-promised.js
│   └── use-ng-optout-browser.js
│
├── .eslintrc.yml
├── .gitignore
├── .npmrc
├── package.json
└── README.md
```

## Contributing

There are many ways in which you can participate in the project, for example:

- [Use this template]() as a start
- [Submit bugs and feature requests](), and help us verify as they are checked in
- Review s[ource code changes]()
- Review the [documentation]() and make pull requests for anything from typos to new content

If you are interested in fixing issues and contributing directly to the code base, please see the [Prerequisites](#prerequisites) and [How to build and run from source](#build-and-run).

## Feedback

- Ask a question on [StackOverflow]()
- [Request a new feature]()
- Up vote [popular feature requests]()
- [File an issue]()
- Follow [@alertbox]() and let us know what you think!

## Related Projects

Many of the core components and dependencies live in their own repositories on GitHub. For example, the [CucumberJS]() and the [Protractor]() have their own repositories. For a complete list, please have a look at the dependencies on the [`project.json`]().

## Code of Conduct

The Alertbox Open Source Conduct is an instantiation of the [TODO Group](https://todogroup.org/) Code of Conduct template, that captures the culture of equality, respect, and inclusion. This same template is used by industry colleagues such as Microsoft, Facebook, Twitter, GitHub, Yahoo, and others in their open source projects.

## License

Copyright (c) Alertbox Inc. All rights reserved.
Licensed under the [MIT](LICENSE) license.