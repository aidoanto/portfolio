import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Aidan Molins (Portfolio)",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // Using modern, clean fonts similar to shadcn/ui
        header: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        body: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        code: "JetBrains Mono, monospace",
      },
      colors: {
        // Modern dark theme inspired by shadcn/ui
        lightMode: {
          light: "#201b47",     // Page background
          lightgray: "#2d2756",  // Borders
          gray: "#443c7a",       // Graph links, heavier borders
          darkgray: "#e4e4e4",   // Body text
          dark: "#ffffff",       // Header text and icons
          secondary: "#d4a190",  // Brighter version for better contrast
          tertiary: "#e5b8aa",   // Adjusted hover state to match
          highlight: "rgba(92, 65, 52, 0.7)", // Internal link background, highlighted text, highlighted code
          textHighlight: "rgba(92, 65, 52, 0.85)", // Markdown highlighted text background
        },
        // Use same colors for dark mode
        darkMode: {
          light: "#201b47",     // Page background (unchanged)
          lightgray: "#2d2756",  // Borders (unchanged)
          gray: "#443c7a",       // Graph links, heavier borders (unchanged)
          darkgray: "#e4e4e4",   // Body text (unchanged)
          dark: "#ffffff",       // Header text and icons (unchanged)
          secondary: "#d4a193",  // Link color, current graph node (MODIFIED - brighter/more contrast)
          tertiary: "#e5b5a7",   // Hover states and visited graph nodes (MODIFIED - brighter)
          highlight: "rgba(212, 161, 147, 0.2)", // Internal link background (MODIFIED - more transparent)
          textHighlight: "rgba(212, 161, 147, 0.3)", // Markdown highlighted text (MODIFIED - adjusted to match)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      // Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
