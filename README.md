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
``` node ace configure @adonisjs/lucid ```
``` # CREATE: config/database.ts ```
``` # UPDATE: .env,.env.example ```
``` # UPDATE: tsconfig.json { types += "@adonisjs/lucid" } ```
``` # UPDATE: .adonisrc.json { commands += "@adonisjs/lucid/build/commands" } ```
``` # UPDATE: .adonisrc.json { providers += "@adonisjs/lucid" } ```
    7. When prompted, select the PostgreSQL database driver option
6. Finally, create your initial project commit by doing the following:
    1. Enter the command ``` git add -A ```
    2. Enter the command ``` git commit -m "Initial Commit" ```
    3. Enter the command ``` git push -u origin main ```
7. From here on you can do the following to push changes to your repository:
    1. Enter the command ``` git add -A ```
    2. Enter the command ``` git commit -m "COMMIT_MESSAGE" ``` where *COMMIT_MESSAGE* is a descriptive tag for your changes
    3. Enter the command ``` git push ```

<br />
<br />
<br />

**NEXT TOPIC**