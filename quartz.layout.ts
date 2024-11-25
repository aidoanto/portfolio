import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/aidoanto",
      "Email": "aidoanto@gmail.com",
      "LinkedIn": "https://www.linkedin.com/in/aidan-molins/",
    },
  }),
}

// Update the Explorer component to reflect the new structure
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    // Component.ContentMeta(),
  ],
  left: [
    Component.DisplayPicture(),
    Component.PageTitle(),
    Component.Search(),
    Component.Explorer({
      title: "Stuff I've done",
      folderClickBehavior: "link",
      folderDefaultState: "open",
      useSavedState: false,
      sortFn: (a, b) => {
        const nameOrderMap: Record<string, number> = {
          "index.md": 100,
          "community-management": 200,
          "community-management/index.md": 201,
          "community-management/respect-helpers-give-them-tools": 202,
          "community-management/learn-from-audience-misconceptions": 203,
          "community-management/keep-your-communities-together": 204,
          "community-management/brands-compete-on-user-experiences": 205,
          "community-management/another-guy-making-chatbots": 206,
          "community-management/result-chart-line-go-up": 207,
          "community-management/why-discord": 208,
          "community-management/further-questions-for-discussion": 209,
          "community-management/footnotes": 210,
          "community-management/meet-the-team": 211,
          "content-creation": 300,
          "content-misc": 301,
          "content-creation/index.md": 302,
          "data-analysis": 400,
          "data-analysis/index.md": 401,
          "my-cv": 500,
        };

        let orderA = nameOrderMap[a.file?.slug || a.name] ?? 999999;
        let orderB = nameOrderMap[b.file?.slug || b.name] ?? 999999;

        return orderA - orderB;
      },
    })
  ],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle()], // deleted , Component.ContentMeta()
  left: [
    Component.DisplayPicture(),
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Explorer({
    })
  ],
  right: [],
}
