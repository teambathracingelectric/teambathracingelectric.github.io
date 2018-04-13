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
      check_opengraph:true,
      http_status_ignore: [999]
    }).run 
    puts "Jekyll successfully built"
  end