# Git and GitHub

## What are Git and GitHub?
Git is the version control system that helps manage changes in source code, while GitHub is a platform built around Git that provides additional features and tools to make easy collaboration and project management. There are also other Git hosting services such as BitBucket, AWS CodeCommit, and Azure Repos.

## What is the Git repository? What are the local and remote repositories in Git?
A Git repository is a project whose files are tracked by the Git version control system.
- **Local repository**: A copy of the Git repository that is on your local machine. When you clone a repository or create a new one, you are working with a local repository. Local repositories have hidden the `.git` directory, which contains all the Git-related information such as history, branches, and configurations.
- **Remote repository**: A repository hosted on a server. It serves as a central point where multiple developers can collaborate on a project. Common remote hosting services include GitHub, GitLab, and Bitbucket. Developers can push their changes to the remote repository or pull changes made by others.

## Describe the steps to push your new changes
1. Create a new branch for your changes in your local repository.
2. Make your changes in that branch.
3. Use `git add` to add changes to the staging area.
4. Create a commit by using `git commit`.
5. Open the pull request to merge it into the main branch.
6. After the code is reviewed and approved, merge your branch into the main.

## What does `git status` do?
It is used to show the current status of your working directory and staging area. It provides information about the branch, changes to be committed, changes not staged, and untracked files.

## What does `git add` do?
It is used to add your changed files to the staging area.

## What does `git commit` do?
It is used to create commits in Git. A commit is a snapshot of your changes.

## What do `git push` and `git pull` do?
- `git push`: Used to update the remote repository with your changes. We push commit-level changes only.
- `git pull`: Used to get the latest changes from the remote repository.

## What is the difference between `git pull` and `git fetch`?
- `git fetch`: Used to get the latest changes from the remote repository without merging them into your local repository changes.
- `git pull`: Used to get the latest changes from the remote repository and immediately merge them. It is a combination of two commands: `git fetch` > `git merge`.

## How to check what files you have changed?
By using the `git status` command.

## How to see what exactly you have changed in a certain file?
By using the `git diff` command.

## Why do we do `git pull` and then `git push`?
To make sure we have the latest version of our project. Git does not allow push if your local repository is not up to date.

## How do you resolve Git conflicts?
Git conflicts appear when changes from different engineers are in the same file and Git cannot auto-resolve them. When Git cannot resolve conflict automatically, it will write both changes into the file that causing the conflict and ask you to manually fix it.
To resolve conflicts:
1. Find and open files with conflicts. Git marks them with `<<<<<`, `=====`, and `>>>>>`.
2. Edit the conflicting sections in the file manually by keeping the changes you want and removing Git marks.
3. Mark these files as resolved by using the `git add` command.
4. Commit changes to complete the merge.

## What is a branch in the Git repository?
A branch represents an independent line of development within a Git repository. When you create a branch, you essentially create a new timeline where you can make changes without affecting the main or other branches. Branches in Git are useful for organizing and isolating development efforts.

## What kind of different branching strategies do you know?
- **Centralized Workflow**: The default development branch is `main` and all changes are committed into this branch. This workflow does not require any other branches besides the main.
- **Feature Branching Workflow**: The core idea behind the Feature Branch Workflow is that all feature development should take place in a dedicated branch instead of the main branch.
- **Gitflow Workflow**: The Gitflow Workflow defines a strict branching model designed around the project release. This provides a robust framework for managing larger projects. It assigns very specific roles to different branches and defines how and when they should interact. In addition to feature branches, it uses individual branches for preparing, maintaining, and recording releases.
- **Forking Workflow**: The Forking Workflow is fundamentally different than other popular Git workflows. Instead of using a single server-side repository to act as the “central” codebase, it gives every developer their server-side repository. This means that each contributor has not one, but two Git repositories: a private local one and a public server-side one. The Forking Workflow is most often seen in public open-source projects.

Check [Atlassian Git tutorials](https://www.atlassian.com/git/tutorials) for more details.

## What does `.gitignore` file do?
It is used in a Git repository to specify intentionally untracked files and directories that Git should ignore. These files are typically ones that don’t need to be version-controlled, such as temporary files, build artifacts, or user-specific configuration files.