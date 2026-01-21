// Figma File Renamer & Structure Creator Plugin

interface PluginMessage {
  type: string;
  clientName?: string;
  productName?: string;
  version?: string;
  tags?: string;
  description?: string;
  projectType?: string;
  fileName?: string;
  customPages?: string[];
  importedTemplate?: ImportedTemplate;
}

interface PageTemplate {
  name: string;
  description: string;
  bestPractices: string[];
  isDivider?: boolean;
}

interface ImportedTemplate {
  name: string;
  pages: PageTemplate[];
}

// Project structure templates with detailed information
const PROJECT_TEMPLATES: Record<string, PageTemplate[]> = {
  "web-app": [
    {
      name: "🎨 Cover",
      description: "Project overview and key information",
      bestPractices: [
        "• Include project name, client, and date",
        "• Add project goals and objectives",
        "• List key stakeholders and team members",
        "• Include version history or changelog",
      ],
    },
    {
      name: "📐 Design System",
      description: "Foundation styles and design tokens",
      bestPractices: [
        "• Define color palette with accessibility ratios",
        "• Document typography scale and hierarchy",
        "• Create spacing and grid systems",
        "• Include elevation/shadow scales",
      ],
    },
    {
      name: "🧩 Components",
      description: "Reusable UI component library",
      bestPractices: [
        "• Create variants for all states (hover, active, disabled)",
        "• Use Auto Layout for responsive components",
        "• Name components clearly and consistently",
        "• Document component properties and usage",
      ],
    },
    {
      name: "🔄 User Flows",
      description: "User journeys and interaction flows",
      bestPractices: [
        "• Map complete user journeys from start to finish",
        "• Show decision points and alternate paths",
        "• Include error states and edge cases",
        "• Use consistent flow notation and arrows",
      ],
    },
    {
      name: "💻 Dev Handoff",
      description: "Developer-ready specifications",
      bestPractices: [
        "• Include redlines with exact measurements",
        "• Export assets in required formats (@1x, @2x, @3x)",
        "• Document interactive states and animations",
        "• Add notes for complex interactions",
      ],
    },
  ],
  "mobile-app": [
    {
      name: "🎨 Cover",
      description: "Project overview and key information",
      bestPractices: [
        "• Include app name, platform (iOS/Android), and version",
        "• Define target devices and OS versions",
        "• List project goals and success metrics",
        "• Add links to related documentation",
      ],
    },
    {
      name: "🎨 Styleguide",
      description: "Visual design system and standards",
      bestPractices: [
        "• Follow platform guidelines (iOS HIG / Material Design)",
        "• Define color schemes including dark mode",
        "• Create typography scale for mobile readability",
        "• Document touch target sizes (min 44x44pt)",
      ],
    },
    {
      name: "📱 Screens",
      description: "Final high-fidelity screen designs",
      bestPractices: [
        "• Organize screens by user flow or feature",
        "• Include all states (empty, loading, error, success)",
        "• Design for multiple screen sizes",
        "• Add annotations for interactions",
      ],
    },
    {
      name: "⬜ Wireframes",
      description: "Low-fidelity layouts and structure",
      bestPractices: [
        "• Focus on layout and information hierarchy",
        "• Keep it simple - avoid detailed styling",
        "• Test multiple layout approaches",
        "• Include navigation structure",
      ],
    },
    {
      name: "🔗 Prototypes",
      description: "Interactive prototypes for testing",
      bestPractices: [
        "• Link screens to create realistic flows",
        "• Add smart animations for key transitions",
        "• Test on actual devices when possible",
        "• Include gestures (swipe, tap, scroll)",
      ],
    },
    {
      name: "🖼️ Assets",
      description: "Exportable icons, images, and graphics",
      bestPractices: [
        "• Export in platform-specific formats",
        "• Include all required density scales",
        "• Use SVG for scalable icons",
        "• Optimize image file sizes",
      ],
    },
  ],
  "design-system": [
    {
      name: "🎨 Cover",
      description: "Design system overview and documentation",
      bestPractices: [
        "• Include design system name and version",
        "• Define design principles and philosophy",
        "• List contribution guidelines",
        "• Add update changelog",
      ],
    },
    {
      name: "🎯 Foundations",
      description: "Core design tokens and primitives",
      bestPractices: [
        "• Define color tokens (primary, secondary, semantic)",
        "• Create modular spacing scale (4px, 8px, 16px...)",
        "• Document typography tokens and scales",
        "• Include border radius, shadows, and effects",
      ],
    },
    {
      name: "🧩 Components",
      description: "Complete component library",
      bestPractices: [
        "• Build with variants and properties",
        "• Ensure accessibility compliance (WCAG)",
        "• Create atomic components first, then molecules",
        "• Maintain consistent naming conventions",
      ],
    },
    {
      name: "📋 Patterns",
      description: "Common UI patterns and compositions",
      bestPractices: [
        "• Document form patterns and validation",
        "• Include navigation patterns",
        "• Show data display patterns (tables, cards, lists)",
        "• Define modal and overlay patterns",
      ],
    },
    {
      name: "📖 Documentation",
      description: "Usage guidelines and examples",
      bestPractices: [
        "• Provide do/don't examples for each component",
        "• Include code snippets where applicable",
        "• Document accessibility requirements",
        "• Add versioning and migration guides",
      ],
    },
  ],
  website: [
    {
      name: "🎨 Cover",
      description: "Website project overview",
      bestPractices: [
        "• Include website name, URL, and launch date",
        "• Define target audience and user personas",
        "• List key pages and site structure",
        "• Add brand guidelines reference",
      ],
    },
    {
      name: "🏠 Homepage",
      description: "Main landing page design",
      bestPractices: [
        "• Create strong hero section with clear value prop",
        "• Include clear call-to-action above the fold",
        "• Design for fast loading and performance",
        "• Optimize for SEO and social sharing",
      ],
    },
    {
      name: "📄 Inner Pages",
      description: "Secondary page templates",
      bestPractices: [
        "• Maintain consistent header and footer",
        "• Create reusable page templates",
        "• Design about, services, contact pages",
        "• Include breadcrumb navigation",
      ],
    },
    {
      name: "🧩 Components",
      description: "Reusable web components",
      bestPractices: [
        "• Build responsive components (mobile-first)",
        "• Include navigation, forms, cards, CTAs",
        "• Design hover and focus states",
        "• Ensure keyboard accessibility",
      ],
    },
    {
      name: "📱 Responsive",
      description: "Mobile and tablet breakpoints",
      bestPractices: [
        "• Design for mobile (320px), tablet (768px), desktop (1440px)",
        "• Use flexible grids and fluid typography",
        "• Test touch interactions on mobile",
        "• Optimize images for each breakpoint",
      ],
    },
  ],
  branding: [
    {
      name: "🎨 Cover",
      description: "Brand identity project overview",
      bestPractices: [
        "• Include brand name and mission statement",
        "• Define brand personality and values",
        "• List deliverables and timeline",
        "• Add client information and stakeholders",
      ],
    },
    {
      name: "🏷️ Logo",
      description: "Logo designs and variations",
      bestPractices: [
        "• Create primary, secondary, and icon versions",
        "• Design for light and dark backgrounds",
        "• Define clear space and minimum sizes",
        "• Include incorrect usage examples",
      ],
    },
    {
      name: "🎨 Colors",
      description: "Brand color palette",
      bestPractices: [
        "• Define primary, secondary, and accent colors",
        "• Include HEX, RGB, CMYK, and Pantone values",
        "• Create color combinations and usage rules",
        "• Test for accessibility (contrast ratios)",
      ],
    },
    {
      name: "✍️ Typography",
      description: "Brand typography system",
      bestPractices: [
        "• Select primary and secondary typefaces",
        "• Define heading and body text styles",
        "• Include web-safe alternatives",
        "• Create typographic hierarchy examples",
      ],
    },
    {
      name: "📦 Applications",
      description: "Brand applied to real-world materials",
      bestPractices: [
        "• Design business cards, letterhead, envelopes",
        "• Create social media templates",
        "• Show brand on merchandise and signage",
        "• Include packaging mockups if applicable",
      ],
    },
  ],
};

// Show the UI with a larger size to accommodate tabs without scrolling
figma.showUI(__html__, { width: 460, height: 720 });

// Send existing plugin data to UI for pre-population
const existingClientName = figma.root.getPluginData("clientName") || "";
const existingProductName = figma.root.getPluginData("productName") || "";
const existingVersion = figma.root.getPluginData("version") || "";
const existingTags = figma.root.getPluginData("tags") || "";
const existingDescription = figma.root.getPluginData("description") || "";
const importedTemplateRaw = figma.root.getPluginData("importedTemplate") || "";

let importedTemplate: ImportedTemplate | null = null;
if (importedTemplateRaw) {
  try {
    importedTemplate = JSON.parse(importedTemplateRaw) as ImportedTemplate;
  } catch (error) {
    console.warn("Failed to parse imported template:", error);
  }
}

const existingData = {
  clientName: existingClientName,
  productName: existingProductName,
  version: existingVersion,
  tags: existingTags,
  description: existingDescription,
  importedTemplateName: importedTemplate?.name ?? "",
  importedTemplatePages: importedTemplate?.pages?.length ?? 0,
  currentFileName: figma.root.name,
};

figma.ui.postMessage({
  type: "load-existing-data",
  data: existingData,
});

// Handle messages from the UI
figma.ui.onmessage = async (msg: PluginMessage) => {
  // ============ SAVE METADATA ============
  if (msg.type === "save-metadata") {
    try {
      // Store metadata as plugin data
      figma.root.setPluginData("clientName", msg.clientName || "");
      figma.root.setPluginData("productName", msg.productName || "");
      figma.root.setPluginData("version", msg.version || "");
      figma.root.setPluginData("tags", msg.tags || "");
      if (msg.description) {
        figma.root.setPluginData("description", msg.description);
      }
      figma.root.setPluginData("lastUpdated", new Date().toISOString());

      figma.notify("✅ Name copied & metadata saved", { timeout: 2000 });
    } catch (error) {
      figma.notify("❌ Error: " + (error as Error).message, {
        error: true,
        timeout: 3000,
      });
    }
  }

  // ============ SAVE IMPORTED TEMPLATE ============
  if (msg.type === "save-imported-template") {
    try {
      const payload = msg.importedTemplate as ImportedTemplate | undefined;

      if (
        !payload ||
        !payload.name ||
        !payload.pages ||
        !Array.isArray(payload.pages) ||
        payload.pages.length === 0
      ) {
        figma.notify("❌ Invalid template. Provide a name and at least one page.", {
          error: true,
        });
        return;
      }

      const normalizedPages = payload.pages.map((page) => ({
        name: page.name || "Untitled",
        description: page.description || "Custom page",
        bestPractices: Array.isArray(page.bestPractices)
          ? page.bestPractices
          : [],
        isDivider: page.isDivider === true,
      }));

      const normalizedTemplate: ImportedTemplate = {
        name: payload.name,
        pages: normalizedPages,
      };

      importedTemplate = normalizedTemplate;
      figma.root.setPluginData(
        "importedTemplate",
        JSON.stringify(normalizedTemplate),
      );

      figma.notify(`✅ Imported template "${payload.name}" saved`, {
        timeout: 3000,
      });

      figma.ui.postMessage({
        type: "imported-template-saved",
        data: normalizedTemplate,
      });
    } catch (error) {
      figma.notify("❌ Error saving template: " + (error as Error).message, {
        error: true,
        timeout: 4000,
      });
    }
  }

  // ============ CREATE STRUCTURE ============
  if (msg.type === "create-structure") {
    try {
      const projectType = msg.projectType;
      const isCustomStructure = projectType === "custom";

      // Validate projectType exists
      if (!projectType) {
        figma.notify("❌ Project type is required", { error: true });
        figma.closePlugin();
        return;
      }

      let pageTemplates: PageTemplate[];

      if (projectType === "imported") {
        if (!importedTemplate || !importedTemplate.pages.length) {
          figma.notify("❌ No imported template saved", { error: true });
          figma.closePlugin();
          return;
        }

        pageTemplates = importedTemplate.pages;
      } else if (projectType === "custom") {
        if (!msg.customPages || msg.customPages.length === 0) {
          figma.notify("❌ Please enter at least one page name", {
            error: true,
          });
          figma.closePlugin();
          return;
        }

        console.log("Custom pages received:", msg.customPages);

        // Create custom page templates
        const isDividerMarker = (pageName: string) =>
          pageName === "---" || pageName === "—" || pageName === "--";

        pageTemplates = msg.customPages.map((pageName) => {
          if (isDividerMarker(pageName)) {
            return {
              name: "---",
              description: "Divider page",
              bestPractices: [],
              isDivider: true,
            };
          }

          return {
            name: pageName,
            description: "Custom page",
            bestPractices: [
              "• Organize content logically",
              "• Use consistent naming conventions",
              "• Group related elements together",
              "• Document your design decisions",
            ],
          };
        });

        console.log("Page templates created:", pageTemplates.length);
      } else {
        // Handle predefined templates
        if (!PROJECT_TEMPLATES[projectType]) {
          figma.notify("❌ Invalid project type", { error: true });
          figma.closePlugin();
          return;
        }

        pageTemplates = PROJECT_TEMPLATES[projectType];
      }

      // Delete all existing pages first
      const existingPages = figma.root.children.slice();

      // Get existing project data from plugin data
      const savedClientName = figma.root.getPluginData("clientName") || "";
      const savedProductName = figma.root.getPluginData("productName") || "";
      const savedVersion = figma.root.getPluginData("version") || "";
      const savedTags = figma.root.getPluginData("tags") || "";
      const savedDescription = figma.root.getPluginData("description") || "";
      const isCoverPage = (pageName: string) => pageName.includes("Cover");

      // Create new pages with content
      const newPages: PageNode[] = [];
      for (let i = 0; i < pageTemplates.length; i++) {
        const template = pageTemplates[i];
        console.log(
          `Creating page ${i + 1}/${pageTemplates.length}: ${template.name}`,
        );

        try {
          const page = figma.createPage();
          page.name = template.name;

          if (template.isDivider) {
            // Divider pages act as visual separators in the page list
            newPages.push(page);
            continue;
          }

          // For custom structures we only create empty pages (no guideline frames)
          if (isCustomStructure) {
            newPages.push(page);
            continue;
          }

          // Create a section frame with guidelines
          const guideFrame = figma.createFrame();
          guideFrame.name = "📋 Guidelines";
          guideFrame.resize(600, 400);
          guideFrame.x = 100;
          guideFrame.y = 100;

          // Light background for the frame
          guideFrame.fills = [
            {
              type: "SOLID",
              color: { r: 0.98, g: 0.98, b: 1 },
            },
          ];

          // Add padding with auto layout
          guideFrame.layoutMode = "VERTICAL";
          guideFrame.paddingLeft = 40;
          guideFrame.paddingRight = 40;
          guideFrame.paddingTop = 40;
          guideFrame.paddingBottom = 40;
          guideFrame.itemSpacing = 20;

          // Title
          const title = figma.createText();
          await figma.loadFontAsync({ family: "Inter", style: "Bold" });
          title.fontName = { family: "Inter", style: "Bold" };
          title.fontSize = 32;
          title.characters = template.name;
          title.fills = [
            { type: "SOLID", color: { r: 0.11, g: 0.11, b: 0.11 } },
          ];
          guideFrame.appendChild(title);

          // Description
          const description = figma.createText();
          await figma.loadFontAsync({ family: "Inter", style: "Regular" });
          description.fontName = { family: "Inter", style: "Regular" };
          description.fontSize = 16;
          description.characters = template.description;
          description.fills = [
            { type: "SOLID", color: { r: 0.4, g: 0.4, b: 0.4 } },
          ];
          guideFrame.appendChild(description);

          // Best Practices Header
          const bestPracticesHeader = figma.createText();
          await figma.loadFontAsync({ family: "Inter", style: "Medium" });
          bestPracticesHeader.fontName = { family: "Inter", style: "Medium" };
          bestPracticesHeader.fontSize = 18;
          bestPracticesHeader.characters = "Best Practices";
          bestPracticesHeader.fills = [
            { type: "SOLID", color: { r: 0.11, g: 0.11, b: 0.11 } },
          ];
          guideFrame.appendChild(bestPracticesHeader);

          // Best Practices List
          const practicesList = figma.createText();
          practicesList.fontName = { family: "Inter", style: "Regular" };
          practicesList.fontSize = 14;
          practicesList.lineHeight = { value: 150, unit: "PERCENT" };
          practicesList.characters = template.bestPractices.join("\n");
          practicesList.fills = [
            { type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } },
          ];
          guideFrame.appendChild(practicesList);

          page.appendChild(guideFrame);

          // ============ COVER PAGE SPECIAL CONTENT ============
          if (isCoverPage(template.name) && savedProductName) {
            // Create project info frame on the right
            const projectFrame = figma.createFrame();
            projectFrame.name = "📄 Project Information";
            projectFrame.resize(700, 400);
            projectFrame.x = 750;
            projectFrame.y = 100;

            // Gradient background
            projectFrame.fills = [
              {
                type: "SOLID",
                color: { r: 0.09, g: 0.63, b: 0.98 },
              },
            ];

            projectFrame.layoutMode = "VERTICAL";
            projectFrame.paddingLeft = 50;
            projectFrame.paddingRight = 50;
            projectFrame.paddingTop = 50;
            projectFrame.paddingBottom = 50;
            projectFrame.itemSpacing = 24;

            // Client Name if exists
            if (savedClientName) {
              const clientText = figma.createText();
              await figma.loadFontAsync({ family: "Inter", style: "Medium" });
              clientText.fontName = { family: "Inter", style: "Medium" };
              clientText.fontSize = 20;
              clientText.characters = `Client: ${savedClientName}`;
              clientText.fills = [
                { type: "SOLID", color: { r: 0.8, g: 0.9, b: 1 } },
              ];
              projectFrame.appendChild(clientText);
            }

            // Project Name
            const projectName = figma.createText();
            await figma.loadFontAsync({ family: "Inter", style: "Bold" });
            projectName.fontName = { family: "Inter", style: "Bold" };
            projectName.fontSize = 48;
            projectName.characters = savedProductName;
            projectName.fills = [
              { type: "SOLID", color: { r: 1, g: 1, b: 1 } },
            ];
            projectFrame.appendChild(projectName);

            // Version if exists
            if (savedVersion) {
              const versionText = figma.createText();
              await figma.loadFontAsync({ family: "Inter", style: "Medium" });
              versionText.fontName = { family: "Inter", style: "Medium" };
              versionText.fontSize = 24;
              versionText.characters = `Version ${savedVersion}`;
              versionText.fills = [
                { type: "SOLID", color: { r: 0.85, g: 0.95, b: 1 } },
              ];
              projectFrame.appendChild(versionText);
            }

            // Tags if exist
            if (savedTags) {
              const tagsText = figma.createText();
              await figma.loadFontAsync({ family: "Inter", style: "Medium" });
              tagsText.fontName = { family: "Inter", style: "Medium" };
              tagsText.fontSize = 18;
              tagsText.characters = `Tags: ${savedTags}`;
              tagsText.fills = [
                { type: "SOLID", color: { r: 0.9, g: 0.95, b: 1 } },
              ];
              projectFrame.appendChild(tagsText);
            }

            // Description if exists
            if (savedDescription) {
              const descText = figma.createText();
              await figma.loadFontAsync({ family: "Inter", style: "Regular" });
              descText.fontName = { family: "Inter", style: "Regular" };
              descText.fontSize = 16;
              descText.lineHeight = { value: 150, unit: "PERCENT" };
              descText.characters = savedDescription;
              descText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
              projectFrame.appendChild(descText);
            }

            // Date created
            const dateText = figma.createText();
            dateText.fontName = { family: "Inter", style: "Regular" };
            dateText.fontSize = 14;
            dateText.characters = `Created: ${new Date().toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            )}`;
            dateText.fills = [
              { type: "SOLID", color: { r: 0.8, g: 0.9, b: 1 } },
            ];
            projectFrame.appendChild(dateText);

            page.appendChild(projectFrame);
          }

          newPages.push(page);
        } catch (pageError) {
          const pageErrorMessage =
            pageError instanceof Error ? pageError.message : String(pageError);
          console.error(`Error creating page "${template.name}":`, pageError);
          throw new Error(
            `Failed to create page "${template.name}": ${pageErrorMessage}`,
          );
        }
      }

      // Now delete old pages
      for (const page of existingPages) {
        page.remove();
      }

      // Set the first new page as current
      if (newPages.length > 0) {
        figma.currentPage = newPages[0];

        const firstPageWithContent = newPages.find(
          (page) => page.children.length > 0,
        );
        if (firstPageWithContent && firstPageWithContent.children.length > 0) {
          figma.viewport.scrollAndZoomIntoView([
            firstPageWithContent.children[0],
          ]);
        }
      }

      // Store project type in plugin data
      figma.root.setPluginData("projectType", projectType);
      figma.root.setPluginData("structureCreated", new Date().toISOString());

      // Show success notification
      const includesGuidelines = projectType !== "custom";
      const successMessage = includesGuidelines
        ? `✅ Created ${pageTemplates.length} pages with guidelines`
        : `✅ Created ${pageTemplates.length} pages`;

      figma.notify(successMessage, {
        timeout: 3000,
      });

      // Close the plugin
      figma.closePlugin();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      console.error("Structure creation error:", error);
      figma.notify("❌ Error creating structure: " + errorMessage, {
        error: true,
        timeout: 5000,
      });
      figma.closePlugin();
    }
  }

  // ============ CANCEL ============
  if (msg.type === "cancel") {
    figma.closePlugin();
  }
};
