turbo-octo-nemesis
==================

I am learning how to use Node and GitHub - at the same time! The code comes from 'The Node Beginner Book' by Manuel Kiesling.

Here are the steps needed to clone a repository:

- *Prepare GitHub:* Make new repository, I accepted the suggested name 'turbo-octo-nemesis'
- *Prepare local machine:* go the the root of the directory tree, in this case `~/workspace`
- *Clone:* `git clone https://github.com/jimpea/turbo-octo-nemesis.git`. This sets up a copy of the GitHub repository on the local machine, under the directory 'turbo-octo-avenger'.
- *Navigate:* to the new directory `cd turbo-octo-nemesis`
- *Modify:* For instance  `nano README.md` and add a line.
- *Check:* run `git status` to see changes.
- *Commit:* changes to master on local repository ` git commit -a -m "message"
- *Push:* changes from local master back up to the remote on GitHub: `git push https://github.com/jimpea/turbo-octo-nemesis master`

Work with a second machine:

- *Prepare* the machine and clone the repository as above
- *Update:* Update the local repository with any changes made on the second machin `git pull https://github.com/jimpea/turbo-octo-nemesis`
- *Change and Commit:* as above.

Update the remote

- *View remote alises:* `git remote -v`
- *Add alias:* `git remote add <name> <path>`
- *Update remote:* `git push` or `git push <remotename>` - the remote name defults to 'origin'

Check out a new branch

- *Checkout:* `git checkout -b <branchname>`
- *Make Changes:* `nano README.md`
- *Stage:* `git add README.md`
- *Commit:* `git commit -m "added documentation to README.md"`

Merge a local branch

- `git checkout master`
- `git pull origin master`
- `git merge test`
- `git push origin master`

Delete a local branch

- `git branch -d <branch-name>`



 

