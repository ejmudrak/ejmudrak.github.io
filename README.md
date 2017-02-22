# savvySamaritans
Transylvania University CS Senior Project 2017

* * * * * GIT COMMANDS * * * * *

NEVER MERGE INTO MASTER BY YOURSELF
NEVER MERGE INTO DEVELOP DURING A CODE FREEZE

to pull
	git fetch
	# if fetch tells you you are up to date, do not pull
	git pull
	# resolve any merge conflicts

to push
	git status # shows files that have been changed
	git add {files that need to be added}
	git commit -m "{commit message}" # commit message is required
	# pull first
	git push

to handle a merge conflict
	<<<<<<< HEAD {what is being merged into}
	{your code}
	=======
	{different code}
	>>>>>>> {merging from}

	# find a functional way to combine the two bits of conflicting code (taking one entirely over the other is fine, but be sure not to write over top of someone else's code if it is needed)
	# delete '<<<<<<< HEAD' '=======' '>>>>>>> {merging from}'

	# commit and push

to show all branches
	git branch -a

to create a new branch
	git branch {new branch name}

to change branches
	git checkout {newBranch} # DO NOT do any kind of dev on master!!

to delete a branch
	git branch -D {branch}

to merge branches
	git checkout {branchA}
	# pull
	git checkout {branchB}
	# pull
	git merge {branchA}
	# resolve conflicts

to merge {myBranch} into develop
	# obtain a CODE FREEZE
	# merge develop into {myBranch}
	# merge {myBranch} into develop

to merge into master
	dont. master is our working copy of the project. we will decide to merge into master as a group

## React ES6 Getting Started

### Quick Start

```ShellSession
npm install
npm start
# Go to http://localhost:8000
```

### Project description

This project aims to provide the **bare minimum** to get started with React in ES6.
If you've been frustrated by the massive size of other starter projects, this may
be nicer for you. Just look at that package.json. It's tiny! Small webpack config?
You got it!

This project provides:

 * React
 * Webpack
 * ES6 (via Babel)
 * JSX (via Babel)
 * Browser auto-refresh on code change

This project **does not** have:

 * Hot module reloading
 * Production deployment
 * Gulp/Grunt
 * Unit tests
 * CSS pre-processor
 * CSS modules
 * Lint
 * And much more!!
	


    // "url-loader": "^0.5.7"
    // "file-loader": "^0.10.0",
