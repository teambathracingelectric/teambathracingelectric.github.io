WebFont.load({
  google: {
    families: [
      "Montserrat:400,700",
      "Lato:400,700,400italic,700italic",
      "Droid+Serif:400,700,400italic,700italic",
      "Roboto+Slab:400,100,300,700"
    ]
  }
});

// Rather than having a separate modal for every team member, use one modal and populate the fields based on which
// team member is clicked. Jekyll writes team member data to data-* attributes in team.html.
// This breaks HARD if any data fields have single quotes in (replace with apostrophes)
$("#teamModal").on("show.bs.modal", function(event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var lang = $("html").attr("lang");

  // Extract info from data-* attributes
  var member = button.data("member");
  var name = member.name;
  if ($.type(member.role) === "string") {
    var title = member.role;
  } else if (lang in member.role) {
    var title = member.role[lang];
  } else {
    var title = member.role["en-GB"];
  }
  var factArray = member.facts;
  var socialArray = member.social;

  // Simple population for first 3 fields
  var modal = $(this);
  modal.find("#team-modal-name").text(name);
  modal.find("#team-modal-role i").text(title);
  modal.find("img").attr("src", button.find("img").attr("src"));

  // Facts and social networks require looping over arrays
  // Build string first and modify DOM at the end for better performance
  var factList = modal.find("dl");
  var factHTML = [];
  $.each(factArray, function(index, fact) {
    factHTML.push("<dt>" + fact.name + "</dt><dd>");
    if (fact.name === "Previous Work Experience") {
      factHTML.push('<ul class="list-unstyled">');
      $.each(fact.info, function(index, entry) {
        factHTML.push("<li>" + entry + "</li>");
      });
      factHTML.push("</ul>");
    } else {
      factHTML.push(fact.info);
    }
    factHTML.push("</dd>");
  });
  factList.empty().append(factHTML.join(""));

  var socialBtns = modal.find("ul.social-buttons");
  var socialHTML = [];
  var faPrefix;
  $.each(socialArray, function(index, network) {
    if (network.title === "envelope") {
      faPrefix = "fas";
    } else {
      faPrefix = "fab";
    }
    socialHTML.push(
      '<li><a target="_top" href="' +
        network.url +
        '" class="' +
        network.title +
        '-a"><i class="' +
        faPrefix +
        " fa-" +
        network.title +
        '"></i></a></li>'
    );
  });
  // Little hint about the buttons
  socialHTML.push(
    '<li class="text-muted hidden-xs"><i class="fas fa-caret-left"></i> Get in touch!</li>'
  );
  socialBtns.empty().append(socialHTML);
});

// Scroll sponsor modal to the sponsor that was clicked on
$("#sponsors-modal").on("shown.bs.modal", function(event) {
  var trigger = $(event.relatedTarget);
  var anchor = trigger.data("sponsor");
  var scrollDist =
    $("#" + anchor).offset().top - $("#sponsors-modal").offset().top - 20;
  $("#sponsors-modal").animate({ scrollTop: scrollDist });
  event.preventDefault();
});

// Instagram embed
function insta_embed() {
  var imgCall = $.getJSON(
      "https://api.instagram.com/v1/users/self/media/recent/",
      {
        access_token: "4831343247.1bf29f8.4a4d8065f29c4e409976c8dd45089486",
        count: 1
      }
    ),
    embedCall = imgCall.then(function(response) {
      var img_link = response.data[0].link;
      var request_link = "https://api.instagram.com/oembed?url=" + img_link;
      return $.getJSON(request_link, {
        hidecaption: true,
        omitscript: true
      });
    });
  embedCall.done(function(response) {
    $("#insta-container").replaceWith(response.html);
  });

  $.when(embedCall).always(function() {
    $.getScript("//www.instagram.com/embed.js");
  });
}
insta_embed();

// Match height of team member panels in Bootstrap grid to fix wrapping issues
// Height diffs are caused by names wrapping and small diffs in img heights
// More robust than manually using clearfix
$(function() {
  $(".sub-group>.team-member").matchHeight({ byRow: false });
});
