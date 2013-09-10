module RedmineCommitLinkOverwrite
  module Hooks
    class ViewLayoutsBaseHtmlHeadHook < Redmine::Hook::ViewListener
      def view_layouts_base_html_head(context={})
        if context[:controller] && (  context[:controller].is_a?(IssuesController) || 
                                      context[:controller].is_a?(WikiController) ||
                                      context[:controller].is_a?(DocumentsController) ||
                                      context[:controller].is_a?(FilesController) || 
                                      context[:controller].is_a?(BoardsController))
          return javascript_include_tag('overwrite.js', :plugin => 'redmine_commit_link_overwrite')
        else
          return ''
        end
      end
    end
  end
end
