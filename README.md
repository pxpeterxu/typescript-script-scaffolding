# Scaffolding for non-GUI projects

This is the scaffolding for a project without any GUI. It includes linting,
typechecking, and tests using Jest, but does not include React/server code.

This is ideal for scripts that are only to be run locally or from a server.

## Usage guide

1. Clone this repository
2. Update all dependencies in package.json to the latest version:
   - Remove yarn.lock and change all dependencies to the latest version
   - Follow the instructions to update the airbnb ESLint config:
     ```shell
     npx install-peerdeps --dev eslint-config-airbnb-base
     ```
   - Run `yarn install`
   - Make sure that `yarn lint`, `yarn jest example.test.ts`, and
     `yarn b-node example.ts` all work
   - Commit the latest version of this repostiroy
3. Remove the `.git` folder:
   ```shell
   rm -rf .git
   ```
4. Run `git init` and commit, and then push to a new branch in GitLab or GitHub
