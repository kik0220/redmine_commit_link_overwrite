require 'redmine'

require_dependency 'hooks/view_layouts_base_html_head_hook'

Redmine::Plugin.register :redmine_commit_link_overwrite do
  name 'Redmine Commit Link Overwrite plugin'
  author 'kik0220'
  description 'Commit Link Overwrite'
  version '0.0.1'
  url ''
  author_url ''
end
