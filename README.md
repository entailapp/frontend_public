<p style="text-align: center;"><img src="https://pbs.twimg.com/profile_banners/1332436193661886466/1614728551/1500x500"></p>

## apps and libs

### [apps/client-mobile](apps/client-mobile/README.md)

### [apps/client-web](apps/client-web/README.md)

### [libs/api-client](libs/api-client/README.md)

### [libs/business-logic](libs/business-logic/README.md)

## prerequisite collection

You will need to download and install the following software:

- [node.js](https://nodejs.org/en/)
- [pnpm](https://pnpm.io/)
- [Java](https://www.oracle.com/au/java/technologies/javase-downloads.html)

You should be able to execute these installed apps from from any working directory.

## how to start development

After you have installed the prerequisite software:

- Execute `pnpm i` from the root directory.
- Execute `yarn install` from the client-mobile directory.

We recommend that you use the [nx](https://nx.dev/latest/react/cli/run) CLI to execute the [npm scripts](https://docs.npmjs.com/cli/v7/using-npm/scripts) inside the various apps and libs.

## Git workflow

We follow the [Atlassian Git workflow.](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) Additionally, your branch names should match the regex in the [post-checkout](.husky/post-checkout) Git hook, e.g. `hotfix/enny/ENNY-101-update-readme`


## pull requests

Your pull request is more likely to be approved if:

- it summerises the changes in a short list.
- every change is in scope.
- the solution to the issue is easily reproducible.

## code reviews

Please be courtious towards your fellow front-end developers and follow [best practices.](https://smartbear.com/learn/code-review/best-practices-for-peer-code-review/) 🦅 🐺

## code standards

We use the [Google TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html) with
almost all of the styling rules being automatically enforced.

### component styles

- We recommend usage of the `className` prop over the `styles` prop.
- We recommend usage of [Tailwind classes](https://tailwindcss.com/docs) over custom written CSS classes.
  - If you really need a custom written CSS class, consider writing it as a [Tailwind utility.](https://tailwindcss.com/docs/adding-new-utilities)

## UI designs

We use the free [Iconic icon library](https://iconic.app/) in our applications.
