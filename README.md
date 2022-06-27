![alt text](https://k20center.ou.edu/wp-content/uploads/2020/02/K20Condensed-1.png)
**PROJECT OVERVIEW**<br />
This README is designed to guide you through the process of creating this simple shopping list application. In this project, you will create both the frontend and backend of a simple website that will manipulate and display information from a database. This project will use Adonis.JS for its backend application, and Next.JS for its frontend application.

<br />
<br />
<br />

**DOWNLOADING THIS REPOSITORY [NOTE: THIS IS OPTIONAL AND SHOULD ONLY BE USED AS A REFERENCE]**
1. Using the command line terminal, enter into the folder you'd like to hold this application
2. Enter the command ``` git clone https://github.com/SkylerRiggle/onboard ```
3. Using the command line terminal, enter into the folder you've just downloaded
4. Using the command line terminal, enter into the *client* folder
5. Enter the command ``` npm install ```
6. Using the command line terminal, enter into the *server* folder
7. Enter the command ``` npm install ```
8. Enter the command ``` node ace migration:run ```
9. Inside of the *server* folder, create a file titled *.env*
10. Inside of the new *.env* file copy the contents of the file titled *.env.example*

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
    4. Enter the command ``` npm i axios ```
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
6. Finally, create your initial project commit by doing the following:
    1. Enter the command ``` git remote add origin YOUR_REPO_URL``` where *YOUR_REPO_URL* is the url for a repo you create using your GitHub account
    2. Enter the command ``` git branch -M main" ```
7. From here on you can do the following to push changes to your repository:
    1. Enter the command ``` git add -A ```
    2. Enter the command ``` git commit -m "COMMIT_MESSAGE" ``` where *COMMIT_MESSAGE* is a descriptive tag for your changes
    3. Enter the command ``` git push -u origin main ``` **NOTE: After this point, you will only need to enter *git push***

<br />
<br />
<br />

**BACKEND APPLICATION**
1. **CREATE A NEW MODEL**
   1. Using the command line terminal, enter into the *server* folder
   2. Enter the command ``` node ace make:model Item ```
   3. Open the *server* folder in Visual Studio Code
   4. Open the file with the path *server/app/Models/Item.ts*
   5. Create a new column for the item's name
   6. Create a new column for the item's cost
   7. The end result should be similar to the Model file in this repository
2. **CREATE A NEW VALIDATOR**
   1. Using the command line terminal, enter into the *server* folder
   2. Enter the command ``` node ace make:validator ItemValidator ```
   3. Open the *server* folder in Visual Studio Code
   4. Open the file with the path *server/app/Validators/ItemValidator.ts*
   5. At the top of the file, be sure to import *rules* alongside schema and CustomMessages
   6. In the messages body, create a new message for required fields
   7. In the schema body, create a new string schema for the name that uses the *required* rule
   8. In the schema body, create a new number schema for the cost that uses the *required* rule
   9. The end result should be similar to the Validator file in this repository
3. **CREATE A NEW CONTROLLER**
   1. Using the command line terminal, enter into the *server* folder
   2. Enter the command ``` node ace make:controller ItemsController ```
   3. Open the *server* folder in Visual Studio Code
   4. Open the file with the path *server/app/Controllers/Http/ItemsController.ts*
   5. Uncomment the import at the top for the HttpContextContract
   6. Create an async method to get all items called *getAll*
   7. Create an async method to get an item with a specified id called *get*
   8. Create an async method to create an item called *create*
   9. Create an async method to edit an item with a specified id called *edit*
   10. Create an async method to delete an item with a specified id called *delete*
   11. The end result should be similar to the Controller file in this repository
4. **CREATE API CONTROLLER ROUTES**
   1. Open the *server* folder in Visual Studio Code
   2. Open the file with the path *server/start/routes.ts*
   3. Delete the default route
   4. Create a new route group with the prefix *api*
   5. Create a new nested route group within the *api* group with the prefix *item*
   6. Create a route corresponding to each method written in the ItemsController
   7. The end result should be similar to the Routes file in this repository
5. **INITIALIZE PGADMIN DATABASE**
   1. Go to https://www.pgadmin.org/download/ and download PGAdmin
   2. Once downloaded, open PGAdmin and create a password
   3. Log into your PostreSQL server
   4. Create a new database called *onboard-db*
   5. Open the *server* folder in Visual Studio Code
   6. Open the file with the path *server/.env* *NOTE: If one does not exist, create one and copy the contents of the .env.example file*
   7. Change PG_USER to *postgres*
   8. Change PG_DB_NAME to *onboard-db*
   9. Change PG_PASSWORD to the password you created earlier for your server
6. **CREATE A NEW MIGRATION**
   1. Using the command line terminal, enter into the *server* folder
   2. Enter the command ``` node ace make:migration Item ```
   3. Open the *server* folder in Visual Studio Code
   4. Open the file with the path *server/database/migrations/SOME_NUM_items.ts*
   5. Create a new table column for the string value of name
   6. Create a new table column for the floating point value of cost
   7. The end result should be similar to the Migration file in this repository
   8. Using the command line terminal, enter into the *server* folder
   9. Enter the command ``` node ace migration:run ```
7. **TEST THE BACKEND APPLICATION USING POSTMAN**
   1. Go to https://gold-sunset-148328.postman.co/ and make an account
   2. Download the PostMan Desktop Agent
   3. Enter into a personal workspace
   4. Create a new collection titled *onboarding*
   5. Within the *onboarding* collection, add a new GET request called getAll
      1. The reuest URL should be http://localhost:3333/api/item
   6. Within the *onboarding* collection, add a new GET request called get
      1. The reuest URL should be http://localhost:3333/api/item/:id
      2. A new path variable will appear where you can specify the item id
   7. Within the *onboarding* collection, add a new POST request called create
      1. The reuest URL should be http://localhost:3333/api/item/create
      2. In the body tab, specify the input to *raw* and *JSON*
      3. Here you can now pass JSON data for the item name and cost
   8. Within the *onboarding* collection, add a new POST request called edit
      1. The reuest URL should be http://localhost:3333/api/item/edit
      2. In the body tab, specify the input to *raw* and *JSON*
      3. Here you can now pass JSON data for the item id, name, and cost
   9. Within the *onboarding* collection, add a new POST request called delete
      1. The reuest URL should be http://localhost:3333/api/item/delete
      2. In the body tab, specify the input to *raw* and *JSON*
      3. Here you can now pass JSON data for the item id
   10. Using the command line terminal, enter into the *server* folder
   11. Enter the command ``` node ace serve --watch ```
   12. Ensure that the database is running in PGAdmin
   13. Run the PostMan Desktop Agent *NOTE: This will not open any windows*
   14. Run each request to see if the expected results are produced

<br />
<br />
<br />

**FRONTEND APPLICATION**
1. **REMOVE THE TEMPLATE APPLICATION**
   1. Open the *client* folder in Visual Studio Code
   2. Delete the folder with the path *client/pages/api*
   3. Delete the contents inside the initial *div* component in the file *client/pages/index.tsx*
      1. Also delete the import for Head and Image
2. **CREATE THE WEBSITE INTERFACE**
   1. Open the *client* folder in Visual Studio Code
   2. Open the file with the path *client/pages/index.tsx*
   3. Create a frontend application with elements meant to display items, create items, and delete items
   4. Since your application is likely to be unique to you, the only resource we can offer here is Google (https://www.google.com/) and the repositorie's client application
      1. *NOTE: This application does come with some css stylesheets that can be found in the folder client/styles*
      2. While styling is not the most important thing at the moment, feel free to play around with the look of the site
3. **TEST THE WEBSITE INTERFACE**
   1. Using the command line terminal, enter into the *client* folder
   2. Enter the command ``` npm run dev ```
      1. To terminate the test, simply hit ``` ctrl+c ``` in the command line terminal and enter ``` y ```
   3. While the test is running, use the browser to enter the URL http://localhost:3000/ to see your website
   4. From here, simply tweak the site until you get the desired look and feel

<br />
<br />
<br />

**FRONTEND-BACKEND CONNECTION**
1. Open the *client* folder in Visual Studio Code
2. Create a new folder with the path and name *client/pages/api*
3. Create a new folder with the path and name *client/pages/api/item*
4. Create a new file with the path *client/pages/api/item/index.ts*
   1. Within this file, write an export that uses axios to access the *getAll* controller route
   2. The URL should be http://127.0.0.1:3333/api/item
   3. The end result should be similar to the Index API file in this repository
5. Create a new file with the path *client/pages/api/item/delete.ts*
   1. Within this file, write an export that uses axios to access the *create* controller route
   2. The URL should be http://127.0.0.1:3333/api/item/delete
   3. The end result should be similar to the Delete API file in this repository
6. Create a new file with the path *client/pages/api/item/create.ts*
   1. Within this file, write an export that uses axios to access the *delete* controller route
   2. The URL should be http://127.0.0.1:3333/api/item/create
   3. The end result should be similar to the Create API file in this repository
7. This step highly depends on your implementation of your frontend application, but you will now need to write functions to call these API routes
   1. Use online resources and this repository as a guide
8. Finally, we need to test the application
   1. Using the command line terminal, enter into the *client* folder
   2. Enter the command ``` npm run dev ```
   3. While the test is running, use the browser to enter the URL http://localhost:3000/ to see your website
   4. Using a different command line terminal, enter into the *server* folder
   5. Enter the command ``` node ace serve --watch ```
   6. You should now be able to test and finalize the site