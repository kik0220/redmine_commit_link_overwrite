require 'redmine'

require_dependency 'hooks/redmine_commit_link_overwrite'

Redmine::Plugin.register :redmine_commit_link_overwrite do
  name 'Redmine Commit Link Overwrite plugin'
  author 'kik0220'
  description 'Commit Link Overwrite'
  version '0.0.3'
  url 'https://github.com/kik0220/redmine_commit_link_overwrite'
  author_url 'https://github.com/kik0220'
end
