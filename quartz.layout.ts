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
        const orderMap: Record<string, number> = {
          "index.md": 1,
          "respect helpers, give them tools.md": 2,
          "keep your communities together.md": 3,
          "learn from audience misconceptions.md": 4,
          "brands compete on user experiences.md": 5,
          "yep, another guy making chatbots.md": 6,
          "result- chart line go up.md": 7,
          "further questions for discussion.md": 8,
          "why discord.md": 9,
          "footnotes.md": 10,
          "meet the team.md": 11,
        };
    
        const slugA = a.file?.slug || a.name;
        const slugB = b.file?.slug || b.name;
    
        const orderA = orderMap[slugA] || 0;
        const orderB = orderMap[slugB] || 0;
    
        return orderA - orderB;
      },
      mapFn: (node) => {
        const displayNameMap: Record<string, string> = {
          "index.md": "🏠 What I Learned Building the RØDE Community",
          "respect helpers, give them tools.md": "💜 Community Strategy (Respect helpers, give them tools)",
          "keep your communities together.md": "🗺️ Creating a Meaningful Community UX (with Discord)",
          "learn from audience misconceptions.md": "🎓 Community Content Strategy (Learn from audience misconceptions)",
          "brands compete on user experiences.md": "🪄 Service Design (Brands compete on user experiences)",
          "yep, another guy making chatbots 😎.md": "😎 Using Community Knowledge (Yep, another guy making chatbots)",
          "result- chart line go up!.md": "📈 Proving It (Result- chart line go up!)",
          "further questions for discussion.md": "❔ Further questions for discussion",
          "why discord.md": "🌐 Why Discord?",
          "footnotes.md": "📜 Footnotes",
          "meet the team.md": "👋 Meet the team- one other guy",
        };
    
        if (node.file) {
          const slug = node.file.slug;
          node.displayName = displayNameMap[slug] || node.displayName;
        }
      },
      // Make sure map runs before sort
      order: ["filter", "map", "sort"]
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
      title: "Stuff I've done",
      folderClickBehavior: "link",
      folderDefaultState: "open",
      useSavedState: false,
      filterFn: (node) => true,
      // Custom map function to duplicate index pages
      sortFn: (a, b) => {
        const orderMap: Record<string, number> = {
          "index.md": 1,
          "respect helpers, give them tools.md": 2,
          "keep your communities together.md": 3,
          "learn from audience misconceptions.md": 4,
          "brands compete on user experiences.md": 5,
          "yep, another guy making chatbots 😎.md": 6,
          "result- chart line go up!.md": 7,
          "further questions for discussion.md": 8,
          "why discord.md": 9,
          "footnotes.md": 10,
          "meet the team.md": 11,
        };
    
        const slugA = a.file?.slug || a.name;
        const slugB = b.file?.slug || b.name;
    
        const orderA = orderMap[slugA] || 0;
        const orderB = orderMap[slugB] || 0;
    
        return orderA - orderB;
      },
      mapFn: (node) => {
        const displayNameMap: Record<string, string> = {
          "index.md": "🏠 What I Learned Building the RØDE Community",
          "respect helpers, give them tools.md": "💜 Community Strategy (Respect helpers, give them tools)",
          "keep your communities together.md": "🗺️ Creating a Meaningful Community UX (with Discord)",
          "learn from audience misconceptions.md": "🎓 Community Content Strategy (Learn from audience misconceptions)",
          "brands compete on user experiences.md": "🪄 Service Design (Brands compete on user experiences)",
          "yep, another guy making chatbots 😎.md": "😎 Using Community Knowledge (Yep, another guy making chatbots)",
          "result- chart line go up!.md": "📈 Proving It (Result- chart line go up!)",
          "further questions for discussion.md": "❔ Further questions for discussion",
          "why discord.md": "🌐 Why Discord?",
          "footnotes.md": "📜 Footnotes",
          "meet the team.md": "👋 Meet the team- one other guy",
        };
    
        if (node.file) {
          const slug = node.file.slug;
          node.displayName = displayNameMap[slug] || node.displayName;
        }
      },
      // Make sure map runs before sort
      order: ["filter", "map", "sort"]
    })
  ],
  right: [],
}
