module RedmineCommitLinkOverwrite
  class ViewLayoutsBaseHtmlHeadHook < Redmine::Hook::ViewListener
    def view_layouts_base_html_head(context={})
      if context[:controller] && context[:controller].is_a?(IssuesController)
        return javascript_include_tag('overwrite.js', :plugin => 'redmine_commit_link_overwrite')
      else
        return ''
      end
    end
  end
end
