# SEA INFO-6150 Final Project

Link to final project assignment: https://github.com/aprilbingham-neu/seainfo6150/blob/master/assignments/final-project.md

<hr>

# Github instructions

## Project repo
https://github.com/SEAINFO6150/seainfo6150-final-project-team-2

## Forking and cloning repo and adding upstream
1. Go to the team git repo for your team from above
2. Click “Fork” to create your copy of the repo
3. Click “Clone or download” to get a link to copy your fork on your computer
4. Click “Use HTTPS”
5. Copy link
6. Open command line/terminal window and use these commands in a directory where you have admin permissions
```
git clone [copied link]
cd seainfo6150-final-project-team-2
git remote add upstream https://github.com/SEAINFO6150/seainfo6150-final-project-team-2
```

## Pulling latest changes from team repo
```
git pull upstream master
```

## Saving, committing and pushing your changes to your fork
1. Make changes in your fork
2. Open command line and use these commands inside your final project directory
```
git add .
git commit -m “[commit name]”
git push origin master
```
**You should make a habit of pulling from the team repo often in order to get the latest changes from your teammates. Failure to pull increases the chances of creating merge conflicts and code collisions.**

## Pushing your changes directly to team repo
1. Open command line and use this command inside your final project directory
```
git push upstream master
```

## Creating a pull request
Creating pull requests assures your team that code isn't being overwritten accidentally and keeps everyone aware of the code that is changing. Teammates should review, approve and merge each others' code.
1. Go to the team git repo for your team from above
2. Click "New pull request"
3. Click "compare across forks" in the top paragraph.
4. Leave base repository as-is, and choose your fork in the "head repository" dropdown. Leave both branch dropdowns as "master" unless you have created a branch for your work. 
5. Verify that the code is able to merge (there are no merge conflicts). If so, click "create pull request". 

## Resolving merge conflicts
If the code is not able to merge, it's most likely because there is a merge conflict -- you need to
1. Pull from the team repo to get the latest code 
2. Find out what code is in conflict
3. Resolve the conflict by reconciling the differences
4. Save, commit and push the changes to your fork
5. Try your pull request again
<hr>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
Runs the install scripts to gather and install all dependent modules into node_modules. **You must do this once before you run the app for the first time.**

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
