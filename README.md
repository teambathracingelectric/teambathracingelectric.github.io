# Team Bath Racing Electric Website

This repository contains the source code for the [TBRe website](https://teambathracingelectric.com). The site is built using [Jekyll](https://jekyllrb.com), uses a [Bootstrap 3](https://getbootstrap.com/docs/3.3/)-based theme called [Agency](https://github.com/y7kim/agency-jekyll-theme), is deployed via [Git](https://git-scm.com/) and hosted on [GitHub Pages](https://pages.github.com/) within our team [GitHub Organisation](https://github.com/teambathracingelectric). It is reached via our custom domain, teambathracingelectric.com, registered at [Namecheap](https://www.namecheap.com/) with CDN and SSL provided by [CloudFlare](https://www.cloudflare.com/).

Providing instruction on the use of every tool needed is beyond the scope of this readme but links to documentation are provided for reference where appropriate.

## Getting Started

This section explains how to set up the necessary environment to get a local copy of the site that can be edited. The best way to set things up will depend on what sort of computer you're using:

- Windows PC
    - Install or ask BUCS for [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) (Windows Subsystem for Linux) to be activated on the PC
    - Open cmd and type `bash`
    - Install required tools with `apt`
- MacOS
    - Use regular terminal
    - Install required tools with [Homebrew](https://brew.sh/)

Before going any further, you will be required to be familiar with the basics of Git and Jekyll. Links to documentation can be found above

### Repository access

The website source code lives in a [repository (repo)](https://github.com/teambathracingelectric/teambathracingelectric.github.io) on GitHub. This particular repo belongs to the [Organisation](https://github.com/teambathracingelectric) set up for the team. Anyone in the organisation can view the repo, but only members of the Website team have write access. Membership of each is invite-only, so create a GitHub account and provide your username to someone who can invite you. So:

1. Make a Github account
1. Request an invite to the Website team

(NB: Changes can be made to the source code directly on GitHub without going through any further steps but you can't check your edits before deploying them so this is only really viable for small tweaks and changes that you are 100% sure won't break anything)

### Cloning the repo

To work on the repo properly, you need to clone it. This means use Git to download a carbon copy of the source code which you can then commit changes to and reupload (or push) when you're done.

First you'll need Git. By default this is a command line tool and can be downloaded [here](https://git-scm.com/) or by asking BUCS. A more beginner friendly GUI alternative is the [GitHub Desktop app](https://desktop.github.com/). Then clone the repo using commands such as:

```
$ cd ~
$ mkdir GitHub
$ cd GitHub
$ git clone https://github.com/teambathracingelectric/teambathracingelectric.github.io.git
```
This makes a new folder in your home directory and clones the repo into it. If you're using WSL, you'll want to `cd` to your Windows home directory instead (`/mnt/c/Users/[username]`) To check if it worked:
```
$ cd teambathracingelectric.github.io
$ ls
```

## Editing the site

The easiest way to work on the site is to use a programming text editor with project support like [VS Code](https://code.visualstudio.com/). Open the repo folder in the editor and you should get the whole website structure show in the sidebar. Listed below is what each part of the website source is for:

<img src ="https://i.imgur.com/cR3iwiZ.png" height="500">
<img src="https://i.imgur.com/yUqEz1f.png" height="500">

1. Assets - Static assets in this folder go through the Jekyll assets pipeline for minification, compression and other processing.
1. Data - YAML files storing the data used by the site, such as team, sponsors and translations
1. Includes - HTML files for each website section.
1. Layouts - `default.html` is where the html sections are all put together, `compress.html` is a filter to compress the site html
1. Plugins - Deprecated. Use gem-based plugins.
1. Posts - Not used. Only useful if we want to add blogging to the site
1. Site - The folder the site gets built to
1. jekyll-cache - Used by Jekyll Assets for caching processed assets
1. img - For site images that currently aren't going through the asset pipeline
1. Mail - Not used. Old email plugin
1. _config.yml - All the site configuration is kept in here. _config.dev.yml is for development only configuration
1. Git files - .gitattributes hold some configuration info for git, .gitignore holds a list of files git should ignore
1. .travis.yml - Configuration for Travis CI, a cloud tool that builds the site and deploys it
1. CNAME - Used by GitHub for the custom domain redirect
1. The little icon that shows up on the tab
1. Not used. Useful if we want an RSS feed
1. Gemfile - Project dependencies and versions
1. index.html - The root page. Just brings in the html from default.html
1. License file for copyright and stuff
1. Rakefile - Provides some useful scripts for building and testing
1. readme.md - This very file.

Changes to the site can typically be done in one of three ways:
1. Changes to data - Adding team members, sponsors, changing text content. Edit the YAML files in the Data folder (or _config.yml)
1. Changes to the html/css/js - For adding new features, changing structure etc. Edit the HTML files in Includes.
1. Changes to how Jekyll builds the site - For changing how data is laid out on the page. Edit Jekyll tags (or liquid tags) in the HTML files

NB: This site uses the Bootstrap 3 framework. Using BS3 elements and tools when making changes to the site will both save time and keep the site looking nicer.

### Previewing changes
After making the desired changes to the site, you should check to make sure it works as expected before pushing it to the website. This is when you will need to make sure the required tools are installed:

WSL:
```
$ sudo apt install ruby
```
macOS:
```
$ brew install ruby
```
And then in the site directory:
```
$ gem install bundler
$ bundle install
```

With the tools now installed you can use `rake serve` to run a live testing server showing a local version of the site. If the changes are as desired you can now push them to the site

## Pushing changes back to the site
The site repo has several git branches. It is recommended to use them properly to keep things organised. Work on the site using the `dev` branch or alternatively create a feature branch if working on a particular feature and merge into dev when complete. When you are ready to deploy your changes, merge `dev` into the `source` branch. Try to keep the `source` branch production ready at all times (i.e. only merge commits that you know don't break anything) otherwise you risk pushing bad code to the actual website. Use the `git push` command to push the source branch back to GitHub. This gets picked up by Travis, which builds the site and deploys this to the remote `master` branch which is where our domain actually points to.

So the general workflow:
1. Checkout the dev branch or a feature branch you've created.
1. Make a change to the site
1. Check the change on the local server, started with `rake serve`
1. When you've changed what you want to change, make a commit.
1. When you're ready to make the changes live, checkout the `source` branch and merge the `dev` branch into it.
1. `git push` to push `source` to the GitHub repo

NB: VS Code provides a useful UI for many of the Git functions used above. Ctrl+Shift+G opens the Source Control Panel and the icons at the bottom left of the window represent the active branch and remote repo status.

### Testing
There are two relevant things to note. First, you can use `rake test` to run some basic tests on the site code, including checking html validity and whether any external links are broken. Second, Travis runs this test when it builds the site and if any tests fail, it will refuse to deploy so make sure the tests pass before pushing your changes

## Domain & Hosting
Coming soon.

## Authors

* **Lawrence Chan** - *Theme and build tool selection, initial site creation, team roster and sponsor list*
* **James Raikes** - *Domain transfer, hosting transfer, improved deployment process, mobile and tablet improvements, asset pipeline, site translation, site documentation, social media hub, style improvements*

See also the list of [contributors](https://github.com/teambathracingelectric/teambathracingelectric.github.io/graphs/contributors) who participated in this project.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE.md](LICENSE.md) file for details
