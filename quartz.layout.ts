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
    Component.ContentMeta(),
  ],
  left: [
    Component.DisplayPicture(),
    Component.PageTitle(),
    Component.Search(),
    Component.Explorer({
      title: "Stuff I've done",
      folderClickBehavior: "link", // Navigate to folder's main page
      folderDefaultState: "open", // Ensure all sections are expanded by default
      useSavedState: false, // Disable saved state to always start with the default state
      // filterFn: (node) => {
      //   const include = new Set(["community-management", "content-creation", "data-analysis"])
      //   return include.has(node.name.toLowerCase())
      // },
    }),
  ],
  right: [],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.DisplayPicture(),
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Explorer({
      title: "Stuff I've done",
      folderClickBehavior: "link", // Navigate to folder's main page
      folderDefaultState: "open", // Ensure all sections are expanded by default
      useSavedState: false, // Disable saved state to always start with the default state
      // filterFn: (node) => {
      //   const include = new Set(["community-management", "content-creation", "data-analysis"])
      //   return include.has(node.name.toLowerCase())
      // },
    }),
  ],
  right: [],
}
