Team Bath Racing Electric Website
====================

Welcome to the repository of the new Team Bath Racing Electric 2017 website!

# Build System

This was built using Windows, and the blogging framework, Jekyll (http://jekyll-windows.juthilo.com/).

There is a GitHub repository at (https://github.com/SurferL/TBRe-website).
If you don't know what this means, please let me know and I'll explain and add you to the repository.

=========

# Usage and how to change stuff

###Header Image

The Header Image of the car render is located in '/img/header-car-render.jpg' and is specifically
of size 1900x1250px (sorry, couldn't have the website change the size automatically, need more time).

If you want to change this image, upload a new image, and change line 284 in '_includes/css/agency.css'

###About Us

All located in '_includes/about.html'. Edit accordingly.

###News and Blog Posts

Portfolio projects are in '/_posts'.
Images are in '/img/portfolio'.

###Team

Team structure with members and information is located within the folder '/_data/orgs/...'
Please follow the same structure of each member, as that's how information is added to each member on the website.

Images for the members are in '/img/team/...'
If a user does not have an image uploaded, a default image is used.

To edit how the popup looks like when the members image is clicked on, you can edit '_includes/modals.html'
and look for the team member modal.

###Timeline

Images for the timeline are located in '/img/timeline/...'
To edit information within the timeline, edit '/_includes/timeline.html'... Sadly it has not been automated yet and looks quite messy.

###Sponsors

Images for the sponsors are located in '/img/sponsors/...'
To edit information, or add additional sponsors, edit '_data/sponsors.yml' and add the new sponsors, following exactly the same
format which is used for the current sponsors. When compiled, the website should automatically build the modal page, as well as
add all the images to the main page, and in the order required. If not, just re-order the sponsors in '_data/sponsors.yml'.

###Other information

The main configuration of the website is located in '_config.yml' in the main directory.

=========

For more details concerning Jekyll, read [the Jekyll documentation](http://jekyllrb.com/).
Based on the Agency Jekyll theme (http://startbootstrap.com/templates/agency/), which is a one page theme!
