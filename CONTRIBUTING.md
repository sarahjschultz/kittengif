# Thanks!

We appreciate your desire to help keep kittenGIF rolling!

We ask that contributions be made as pull requests via GitHub.

We ask that proposed contributions be discussed in the GitHub issues,
and that any conclusions from side/back-channel conversation (e.g.
slack chat) be distilled in a new or existing issue. 📝

# When Submitting a Pull Request

## Before You Start!

- If you have an existing fork, please make sure it's up to date.
  If not, make sure you fork *before* cloning,
  otherwise you'll need to spend some time juggling remotes.
  Look at the section "Keep your fork synced" in GitHub's
  [Fork A Repo](https://help.github.com/articles/fork-a-repo) article.

- Create a local topic branch before you start working. This branch is going to
  be named for what you plan to change. `fix-typo-in-slides`, `move-resources`,
  and `mountain-lion-support` are all good names for topic branches. If you've
  never created a local branch before, you can use `git checkout -b
  new-branch-name`.

## Before Submitting

- Push to a branch on GitHub. Just like you developed in a local branch, you
  should push to a branch of your repo on GitHub as well. The `master` branch is
  best used as a clean copy of the upstream docs repo in case you need to make
  some unrelated changes. To push to a branch,
  if your branch is named "fix-typo-in-slides",
  use `git push origin fix-typo-in-slides`.

## Submitting a Pull Request

- Read the GitHub Guide on [Forking](https://guides.github.com/activities/forking/), especially the part about
  [Pull Requests](https://guides.github.com/activities/forking/#making-a-pull-request).

- Remember, pull requests are submitted *from* your repo, but show up on the
  *upstream* repo.

- Please make sure to fill out the Pull Request template, and link to any relevant issues or enhancements that you are contributing to. This helps maintainers TREMENDOUSLY, in keeping track of what is happening :)

## What Happens Next?

- Every pull request will receive a response from the team.
- Not every pull request will be merged as is.
- Not every pull request will be merged at all.
- If a pull request falls significantly behind master, we may ask that you close
  it, rebase your changes off of master, and submit a new pull request.
- Feel free to "ping" the team by adding a short comment to your pull request
  if it's been more than a week with no reply

## After your merge has been accepted

- go back to your fork and keep it up to date, e.g.

        git checkout master
        git pull upstream master
        git push origin master

- you can also delete your topic branch if you like

        git branch -dr fix-typo-in-slides
