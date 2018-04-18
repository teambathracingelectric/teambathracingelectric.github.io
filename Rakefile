task :default => ["test", "build"]

##############
# Jekyll tasks
##############

# Usage: rake serve, rake serve:prod
task :serve => ["serve:dev"]
namespace :serve do

  desc "Serve development Jekyll site locally"
  task :dev do
    puts "Starting up development Jekyll site server..."
    sh("JEKYLL_ENV=development bundle exec jekyll serve --config _config.yml,_config.dev.yml") # --incremental"
  end

  desc "Serve production Jekyll site locally"
  task :prod do
    puts "Starting up production Jekyll site server..."
    sh("JEKYLL_ENV=production bundle exec jekyll serve --no-watch")
  end
end

# Usage: rake build, rake build:dev, rake build:drafts
task :build => ["build:prod"]
namespace :build do

  desc "Regenerate files for production"
  task :prod do
    puts "* Regenerating files for production..."
    sh("JEKYLL_ENV=production bundle exec jekyll build")
  end

  desc "Regenerate files for development"
  task :dev do
    puts "* Regenerating files for development..."
    sh("bundle exec jekyll build --config _config.yml,_config.dev.yml --profile")
  end

  desc "Regenerate files and drafts for development"
  task :drafts do
    puts "* Regenerating files and drafts for development..."
    sh("bundle exec jekyll build --config _config.yml,_config.dev.yml --profile --drafts")
  end
end

####################
# Notification tasks
####################

# Usage: rake notify
task :notify => ["notify:pingomatic", "notify:google", "notify:bing"]
desc "Notify various services that the site has been updated"
namespace :notify do

  desc "Notify Ping-O-Matic"
  task :pingomatic do
    begin
      require 'xmlrpc/client'
      puts "* Notifying Ping-O-Matic that the site has updated"
      XMLRPC::Client.new('rpc.pingomatic.com', '/').call('weblogUpdates.extendedPing', 'habd.as' , 'http://habd.as', 'http://habd.as/feed.xml')
    rescue LoadError
      puts "! Could not ping ping-o-matic, because XMLRPC::Client could not be found."
    end
  end

  desc "Notify Google of updated sitemap"
  task :google do
    begin
      require 'net/http'
      require 'uri'
      puts "* Notifying Google that the site has updated"
      Net::HTTP.get('www.google.com', '/webmasters/tools/ping?sitemap=' + URI.escape('http://habd.as/sitemap.xml'))
    rescue LoadError
      puts "! Could not ping Google about our sitemap, because Net::HTTP or URI could not be found."
    end
  end

  desc "Notify Bing of updated sitemap"
  task :bing do
    begin
      require 'net/http'
      require 'uri'
      puts '* Notifying Bing that the site has updated'
      Net::HTTP.get('www.bing.com', '/webmaster/ping.aspx?siteMap=' + URI.escape('http://habd.as/sitemap.xml'))
    rescue LoadError
      puts "! Could not ping Bing about our sitemap, because Net::HTTP or URI could not be found."
    end
  end
end

###############
# Testing tasks
###############

task :test do
  require 'html-proofer'
  sh "bundle exec jekyll build"
  HTMLProofer.check_directory("./_site", {
      empty_alt_ignore: true,
      check_html: true,
      check_favicon: true,
      check_opengraph: true,
      # only_4xx: true,  # While checking other things like certificate errors might be useful. It seems very unstable
      http_status_ignore: [0],  # 0 represents extra errors like certificate errors and so on but some of our sponsor sites are a bit dodgy so we have to ignore it
      url_ignore: [/teambathracingelectric.com/, /linkedin.com/]
    }).run 
end

# ##################
# # Deployment tasks
# ##################

# # Usage: rake s3_website
# desc "push the contents of ./_site to S3"
# task :s3_website do
#   puts "* rsyncing the contents of ./_site to the server"
#   sh("s3_website push" # use --force with S3 config updates)
# end

# # Usage: rake deploy
# task :deploy => ["deploy:prod"]
# namespace :deploy do
#   desc "Regenerate and sync production files, and notify services of the update"
#   task :prod => ["build", "s3_website", "notify"] do
#   end
# end