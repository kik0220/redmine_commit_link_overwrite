(function() {
  function find_contents() {
    var contents = []
      , root = document.getElementById('history');

    if (root) {
      var notes = root.getElementsByClassName('wiki');
      for (var i = 0; i < notes.length; ++i) {
        var comments = notes[i].getElementsByTagName('p');
        for (var j = 0; j < comments.length; ++j) {
          contents.push(comments[j]);
        }
      }
    }

    return contents;
  }

  function find_commit_log(content) {
    return {
      beg: beg,
      end: end,
      project: identifier[0],
      repository: identifier[1],
      revision: content.slice(pos+key.length)
    };
  }

  function convert_content(content, current_project) {
    // Search for the following patterns:
    //
    // <repository>|commit:<revision>
    // <project>:<repository>|commit:<revision>
    //

    var key = '|commit:'
      , src = content.innerHTML
      , pos = src.indexOf(key);

    if (pos == -1) {
      return;
    }

    var beg = src.lastIndexOf(' ', pos)
      , end = src.indexOf(' ', pos);
    if (beg == -1 || end == -1) {
      return;
    }

    var identifier = src.slice(++beg, pos).split(':')
      , repository = identifier.pop()
      , project = identifier.pop() || current_project
      , revision = src.slice(pos+key.length, end)
      , url = '/projects/'+project+'/repository/'+repository+'/revisions/'+revision
      , disp = project+':'+repository+'|'+revision.substr(0,8)
      , link = '<a href="'+url+'" class="changeset">'+disp+'</a>';
    content.innerHTML = src.slice(0, beg)+link+src.slice(end);
  }

  function main() {
    var contents = find_contents()
      , project = document.getElementById('main-menu')
                   .getElementsByClassName('overview')[0]
                   .getAttribute('href').split('/').pop();

    for (var i = 0; i < contents.length; ++i) {
      convert_content(contents[i], project);
    }
  }

  document.addEventListener ?
    window.addEventListener('load', main) :
    window.attachEvent('onload', main);
})();
