require "html-proofer"  # Require gem for using within tasks

task :default do
    puts "Running CI tasks..."
  
    # Runs the jekyll build command for production
    # TravisCI will now have a site directory with our
    # statically generated files.
    sh("JEKYLL_ENV=production bundle exec jekyll build")

    # Add HTMLProofer.check_directory("./_site").run in order to start checking
    # for invalid HTML
    HTMLProofer.check_directory("./_site", {
      empty_alt_ignore: true,
      check_html: true,
      check_favicon: true,
      check_opengraph: true,
      only_4xx: true,  # While checking other things like certificate errors might be useful. It seems very unstable
      url_ignore: [/teambathracingelectric.com/]
    }).run 
    puts "Jekyll successfully built"
  end

task :serve do
  sh("bundle exec jekyll serve")
end