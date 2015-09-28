# client
What could you do with the money you’ve wasted on over charged textbooks? What if you could keep that money in your pocket by exchanging textbooks for what they’re worth, instead of buying them at huge markups and selling them back for 10% of what you paid?

Inspired by Calvin’s popular Book Connection site from the 2000 era, the modern Calvin BookShelf is a website where students can take back control of their textbook purchasing from the textbook industry. At Calvin BookShelf, Calvin students can post their used textbooks for sale, available for fellow Calvin students to search for by title or by Calvin course. This enables students to connect directly with each other, avoiding the used book markups charged at the bookstore and shipping expenses charged at online booksellers. Calvin BookShelf offers the convenience and savings of buying directly from fellow classmates in the Calvin community.

# How to use GitHub as a Team

Assuming that you've already taken CS214, you should already be familiar with
how to use both `git` and [GitHub](https://github.com). That being said, CS214
taught us how to use Git repositories for personal projects, which is not what
they're usually used for.

Version Controll Software like `git` gets a lot more complicated when multiple
people are submitting contributions to the same repository. The rest of this 
README is dedicated to explaining how to effectively use `git` for a collaborative 
project.

## Quick Summary

**Do this once to set up your dev environment:**

1. Fork the team repository.

2. Clone your forked repository onto your local machine:
    ```sh
    $ git clone https://github.com/<your_username>/client.git
    ```

3. Set your remote upstream to the team repository's URL:
    ```sh
    $ cd client
    $ git remote add upstream https://github.com/cs262teamd/client.git
    ```

**Do this every time you submit something:**

1. Make sure that your `origin` is up to date with `upstream master`:
    ```sh
    $ git checkout master
    $ git pull --ff-only upstream master
    $ git push
    ```

2. Create a new branch for your changes:
    ```sh
    $ git checkout -b <your_username>/<change_you_will_make>
    ```

3. Make your changes, commit, stage, etc.

4. Rebase to avoid merge conflicts (check the "Rebasing" section if it doesn't go smoothly):
    ```sh
    $ git rebase -i upstream/master
    ```

5. Push up to GitHub:
    ```sh
    $ git push --set-upstream origin <the_branch_name>
    ```

6. Create a Pull-Request by going to the team repo's GitHub page and hitting the "Create Pull-Request" button.

7. Review your Pull-Request, then hit the submit button.

**IMPORTANT NOTE:** 
*Please* make sure that your changes don't break anything before submitting the Pull-Request.
The reviewer will be able to catch some problems, but I can assure you that she/he is not perfect and we're not using any CI tools to check for your mistakes.


## Setting Up

#### Forking

It's recommended that you first fork the repository by going to it's 
[GitHub page](https://github.com/cs262teamd/client.git), then clicking the 
"Fork" button on the top right. 


#### Cloning

Clone the your fork into whatever directory you want (personally, I use a
directory called `~/git/`, but it doesn't matter). When using `git clone`, a
directory named `client` will be automatically created in your current 
working directory.

```bash
$ git clone https://github.com/<your_GitHub_username>/client.git
$ cd client
```

#### Add your remote upstream

You'll need to specify the location of `upstream` for later use.

```bash
$ git remote add upstream https://github.com/cs262teamd/client.git
```



## The Submission Workflow

To submit contributions to the team repository, you should do this process
**every single time** you make a **small** change to **absolutely anything**. 
It makes it waaaay easier on the code reviewer.

#### Branching

First, make sure that `origin` is up to date. You'll need to switch to the 
`master` branch (if you're not there already), pull from the `master` branch of
the `upstream` repo, and then push the changes found there back to `origin`.

```bash
$ git checkout master
$ git pull --ff-only upstream master
$ git push
```
Note: `git push` will push to `origin` by default. 

Now create a new branch specifically for the change you are making:

```bash
$ git checkout -b <branch_name>
```

Many repositories will require a certain branch naming convention. I recommend 
that we use `<user_name>/<change_you_made>` because it makes logs easy to read.

Now that you've created the branch using `git checkout -b`, you can check what 
branch you are on at any time using `git branch`.


#### Making your changes
Do whatever it is that you're doing, just make sure that you 
**rarely submit a ton of content** at once. Every time that someone sends changes 
to the main repo, the changes will have to be reviewed before they are merged. 
This can become a **chore for the reviewer** if people don't keep their submissions 
**small and frequent**. Keeping submissions small is also a good way to avoid 
merge conflicts, which is good because **merge conflicts are awful**.

#### Rebasing

Make sure that your change doesn't cause any conflicts by doing a quick rebase.
If you forget to do this step, it can be a real **pain in the ass** when it comes 
time to merge. 

```bash
$ git fetch upstream
$ git rebase -i upstream/master
```

If a text editor shows up, **save and exit without making any changes**. For example, 
if `vim` shows up enter `:wq`, and if `nano` shows up enter `cntl+x` then `y`.

Usually the rebase process will end here and output nothing, however it's
important that you do it to **avoid merge conflicts**.

if there are any rebase conflicts, find them with `git diff` and fix them with:

```bash
$ git add <file>
$ git rebase --continue
``` 
Note: If it looks like your rebase is going wrong, don't panic - just enter
`git rebase --abort` and ask for help. 

#### Pushing to the Upstream Repo

Once you've: 

1. Made sure that your HEAD and `origin` are up to date with `upstream`
2. Made changes on a *new* branch with a clear label
3. And made sure there are no pesky *merge conflicts*

You should be ready to push your changes up to GitHub.
```bash
$ git push -u origin <the_branch_name>
```

Don't bother pushing them to `origin` -- they'll be added in the future
if your changes pass the code review and end up getting merged.


#### Creating the Pull-Request

This part is easy - just head over to the team repo's 
[GitHub page](https://github.com/cs262teamd/client) and the "Create
Pull-Request" button should appear.

You'll then want to look over the changes you made (using GitHub's neat
GUI), and hit Submit.

Don't forget to add a comment stating what you've changed and/or the pointing
out the issues that you've fixed.


## Issues are a Wonderful Thing

Okay, *issues* aren't a good thing... but GitHub issues are. Learn to use them
effectively -- they're an easy and useful way to keep track of things that need 
to be done. 

To see the list of issues, just go to the right side of the repo's 
GitHub page and hit the "Issues" tab. From there, you can create them, comment
on them, and close them as well. You can also assign particular issues to other
contributors. When referencing an issue in any GitHub textbox, use a hashtag 
followed by the issue number.
