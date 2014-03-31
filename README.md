turbo-octo-nemesis
==================

I am learning Git. This repository was cloned to the local machine and committed as 'First Commit'.

This second line added as 'Second Commit'.

Added this third line after cloning into my linux box (above used the Nitrous
box)

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


