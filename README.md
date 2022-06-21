**PROJECT OVERVIEW**<br />
This README is designed to guide you through the process of creating this simple application. In this project, you will create both the frontend and backend of a simple website that will manipulate and display information from a database. This project will use Adonis.JS for its backend application, and Next.JS for its frontend application.

<br />
<br />
<br />

**PROJECT INITIALIZATION**
1. Create a new folder called *onboard-program*
2. Open the command line terminal within this folder
3. To initialize the GitHub repository, do the following:
    1. Enter the command ``` git init ```
    2. Enter the command ``` git remote add origin YOUR_REPO_URL.git ``` where *YOUR_REPO_URL* is the url to your specified GitHub repository
    3. Enter the command ``` git branch -M main ```
4. To create the frontend application, do the following:
    1. Enter the command ``` npx create-next-app@latest --typescript ```
    2. When prompted, enter the application name as *client*
    3. Use all default options to complete the installation
5. To create the backend application, do the following:
    1. Enter the command ``` npm init adonis-ts-app@latest server ```
    2. When prompted, select the *api* installation path
    3. Use all default options to complete the installation
    4. Using the command line terminal, enter into the new *server* folder
    5. Enter the command ``` npm i @adonisjs/lucid ```
    6. Enter the following command all at once<br />
``` node ace configure @adonisjs/lucid ```<br />
``` # CREATE: config/database.ts ```<br />
``` # UPDATE: .env,.env.example ```<br />
``` # UPDATE: tsconfig.json { types += "@adonisjs/lucid" } ```<br />
``` # UPDATE: .adonisrc.json { commands += "@adonisjs/lucid/build/commands" } ```<br />
``` # UPDATE: .adonisrc.json { providers += "@adonisjs/lucid" } ```
    7. When prompted, select the PostgreSQL database driver option
    8. Using the command line terminal, exit back into the *onboard-program* folder
1. Finally, create your initial project commit by doing the following:
    1. Enter the command ``` git add -A ```
    2. Enter the command ``` git commit -m "Initial Commit" ```
    3. Enter the command ``` git push -u origin main ```
2. From here on you can do the following to push changes to your repository:
    1. Enter the command ``` git add -A ```
    2. Enter the command ``` git commit -m "COMMIT_MESSAGE" ``` where *COMMIT_MESSAGE* is a descriptive tag for your changes
    3. Enter the command ``` git push ```

<br />
<br />
<br />

**BACKEND APPLICATION**
1. **CREATE A NEW MODEL**
   1. Using the command line terminal, enter into the *server* folder
   2. Enter the command ``` node ace make:model Item ```
2. **CREATE A NEW VALIDATOR**
   1. Using the command line terminal, enter into the *server* folder
   2. Enter the command ``` node ace make:validator ItemValidator ```
3. **CREATE A NEW CONTROLLER**
   1. Using the command line terminal, enter into the *server* folder
   2. Enter the command ``` node ace make:controller ItemsController ```
4. **CREATE API CONTROLLER ROUTES**
   1. Open the *server* folder in Visual Studio Code
   2. Delete the default route
```js
Route.get('/', async () => {
  return { hello: 'world' }
})
```
   3. Create a new route group with the prefix *api*
   4. Create a new nested route group within the *api* group with the prefix *item*
   5. Create a route corresponding to each method written in the ItemsController
   6. The end result should be similar to the following:
```js
```
1. **INITIALIZE PGADMIN DATABASE**
2. **CREATE A NEW MIGRATION**
   1. Using the command line terminal, enter into the *server* folder
3. **TEST THE BACKEND APPLICATION USING POSTMAN**

<br />
<br />
<br />

**FRONTEND APPLICATION**

<br />
<br />
<br />

**FRONTEND-BACKEND CONNECTION**