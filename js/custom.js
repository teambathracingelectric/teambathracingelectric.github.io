// Rather than having a separate modal for every team member, use one modal and populate the fields based on which
// team member is clicked. Jekyll writes team member data to data-* attributes in team.html.
// This breaks HARD if any data fields have single quotes in (replace with apostrophes)
$('#teamModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal

    // Extract info from data-* attributes
    var name = button.data('member').name
    var title = button.data('member').title
    var pic = button.data('member').pic
    var factArray = button.data('member').facts
    var socialArray = button.data('member').social
    
    // Simple population for first 3 fields
    var modal = $(this)
    modal.find('h2').text(name)
    modal.find('p i').text(title)
    modal.find('img').attr('src', 'img/team/'+pic+'.jpg')

    // Facts and social networks require looping over arrays
    // Build string first and modify DOM at the end for better performance
    var factTable = modal.find('table')
    var factHTML = []
    $.each(factArray, function(index, fact) {
        factHTML.push('<tr><th>'+fact.name+'</th><td>'+fact.info+'</td></tr>')        
    })
    factTable.empty().append(factHTML)

    var socialBtns = modal.find('ul.social-buttons')
    // socialBtns.append('test')
    var socialHTML = []
    var faPrefix
    $.each(socialArray, function(index, network) {
        if (network.title === 'envelope') {
            faPrefix = 'fas'
        } else {
            faPrefix = 'fab'
        }
        socialHTML.push('<li><a target="_top" href="'
        + network.url
        + '" class="'
        + network.title
        + '-a"><i class="'
        + faPrefix
        + ' fa-'
        + network.title
        + '"></i></a></li>')
    })
    socialBtns.empty().append(socialHTML)
})

// Instagram embed
function insta_embed() {
    var imgCall = $.getJSON("https://api.instagram.com/v1/users/self/media/recent/", {
        access_token: "4831343247.1bf29f8.4a4d8065f29c4e409976c8dd45089486",
        count: 1
    }),
    embedCall = imgCall.then(function(response) {
        var img_link = response.data[0].link
        var request_link = "https://api.instagram.com/oembed?url=" + img_link
        return $.getJSON(request_link, {
            hidecaption: true,
            omitscript: true
        })
    })
    embedCall.done(function(response) {
        $('#insta-container').replaceWith(response.html)
    })
    
    $.when(embedCall).always(function() {
        $.getScript("//www.instagram.com/embed.js")
    })
}
insta_embed()
