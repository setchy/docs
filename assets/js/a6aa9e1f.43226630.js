"use strict";(self.webpackChunk_electron_react_boilerplate_site=self.webpackChunk_electron_react_boilerplate_site||[]).push([[89],{3269:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),r=a(6010),l=a(2263),i=a(833),o=a(5281),c=a(9058),s=a(5999),m=a(2244);function g(e){var t=e.metadata,a=t.previousPage,r=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(m.Z,{permalink:a,title:n.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),r&&n.createElement(m.Z,{permalink:r,title:n.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var p=a(197),u=a(9460),d=a(390);function b(e){var t=e.items,a=e.component,r=void 0===a?d.Z:a;return n.createElement(n.Fragment,null,t.map((function(e){var t=e.content;return n.createElement(u.n,{key:t.metadata.permalink,content:t},n.createElement(r,null,n.createElement(t,null)))})))}function E(e){var t=e.metadata,a=(0,l.Z)().siteConfig.title,r=t.blogDescription,o=t.blogTitle,c="/"===t.permalink?a:o;return n.createElement(n.Fragment,null,n.createElement(i.d,{title:c,description:r}),n.createElement(p.Z,{tag:"blog_posts_list"}))}function v(e){var t=e.metadata,a=e.items,r=e.sidebar;return n.createElement(c.Z,{sidebar:r},n.createElement(b,{items:a}),n.createElement(g,{metadata:t}))}function f(e){return n.createElement(i.FG,{className:(0,r.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},n.createElement(E,e),n.createElement(v,e))}}}]);