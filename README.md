# Team Bath Racing Electric Website

This repository contains the source code for the [TBRe website](https://teambathracingelectric.com). The site is built using [Jekyll](https://jekyllrb.com), uses a [Bootstrap 3](https://getbootstrap.com/docs/3.3/)-based theme called [Agency](https://github.com/y7kim/agency-jekyll-theme), is deployed via [Git](https://git-scm.com/) and hosted on [GitHub Pages](https://pages.github.com/). It is visited via our custom domain, teambathracingelectric.com, registered at [Namecheap](https://www.namecheap.com/) with CDN and SSL provided by [CloudFlare](https://www.cloudflare.com/).

This readme constitutes the entire documentation for the website and will hopefully provide all the information required to run and maintain it going forward.

The documentation is split into three sections for three separate audiences.

## How to edit the site quickly with minimal setup

Only for changes to team members, sponsors or header image and tagline. If you plan on making frequent or more involved changes to the site, skip over this section.

### Requirements

- A GitHub account
- Write access to this repository

### Steps

1. Open the repository on Github
1. Navigate to the ```_data``` folder
1. Open the relevant YAML file (YAML files are used to store data)
    - ```sponsors.yml``` for sponsor data
    - ```template.yml``` for theme data
    - YAML files in the ```orgs``` folder for team member data
1. Click the edit button at the top right
1. Make changes
1. Commit changes via the form at the bottom of the page. Committing directly to master branch will instantly update the website, so be careful.

## How it all actually works

### Jekyll

#### Site structure overview

### Bootstrap

- Git installed locally
- A text editor (I suggest [Visual Studio Code](https://code.visualstudio.com/) or similar)
