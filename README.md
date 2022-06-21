**PROJECT INITIALIZATION**
1. Create a new folder called *onboard-program*
2. Open the command line terminal within this folder
3. To initialize the GitHub repository, do the following:
    a. Enter the command ``` git init ```
    b. Enter the command ``` git remote add origin YOUR_REPO_URL.git ``` where *YOUR_REPO_URL* is the url to your specified GitHub repository
    c. Enter the command ``` git branch -M main ```
4. To create the frontend application, do the following:
    a. Enter the command ``` npx create-next-app@latest --typescript ```
    b. When prompted, enter the application name as *client*
    c. Use all default options to complete the installation
5. To create the backend application, do the following:
    a. Enter the command ``` npm init adonis-ts-app@latest server ```
    b. When prompted, select the *api* installation path
    c. Use all default options to complete the installation
6. Finally, create your initial project commit by doing the following:
    a. Enter the command ``` git add -A ```
    b. Enter the command ``` git commit -m "Initial Commit" ```
    c. Enter the command ``` git push -u origin main ```