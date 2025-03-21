
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'Accordion': typeof import("../node_modules/shadcn-docs-nuxt/components/content/Accordion.vue")['default']
    'AccordionItem': typeof import("../node_modules/shadcn-docs-nuxt/components/content/AccordionItem.vue")['default']
    'Alert': typeof import("../node_modules/shadcn-docs-nuxt/components/content/Alert.vue")['default']
    'Badge': typeof import("../node_modules/shadcn-docs-nuxt/components/content/Badge.vue")['default']
    'ButtonLink': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ButtonLink.vue")['default']
    'Callout': typeof import("../node_modules/shadcn-docs-nuxt/components/content/Callout.vue")['default']
    'Card': typeof import("../node_modules/shadcn-docs-nuxt/components/content/Card.vue")['default']
    'CardGroup': typeof import("../node_modules/shadcn-docs-nuxt/components/content/CardGroup.vue")['default']
    'CodeCopy': typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeCopy.vue")['default']
    'CodeGroup': typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeGroup.vue")['default']
    'CodeTree': typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTree.vue")['default']
    'CodeTreeInner': typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTreeInner.vue")['default']
    'CodeTreeItem': typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTreeItem.vue")['default']
    'CodeTreeRoot': typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTreeRoot.vue")['default']
    'Collapsible': typeof import("../node_modules/shadcn-docs-nuxt/components/content/Collapsible.vue")['default']
    'Field': typeof import("../node_modules/shadcn-docs-nuxt/components/content/Field.vue")['default']
    'FieldGroup': typeof import("../node_modules/shadcn-docs-nuxt/components/content/FieldGroup.vue")['default']
    'FileTree': typeof import("../node_modules/shadcn-docs-nuxt/components/content/FileTree.vue")['default']
    'FileTreeItem': typeof import("../node_modules/shadcn-docs-nuxt/components/content/FileTreeItem.vue")['default']
    'FileTreeRoot': typeof import("../node_modules/shadcn-docs-nuxt/components/content/FileTreeRoot.vue")['default']
    'Hero': typeof import("../node_modules/shadcn-docs-nuxt/components/content/Hero.vue")['default']
    'HeroAlt': typeof import("../node_modules/shadcn-docs-nuxt/components/content/HeroAlt.vue")['default']
    'Kbd': typeof import("../node_modules/shadcn-docs-nuxt/components/content/Kbd.vue")['default']
    'PmInstall': typeof import("../node_modules/shadcn-docs-nuxt/components/content/PmInstall.vue")['default']
    'PmRun': typeof import("../node_modules/shadcn-docs-nuxt/components/content/PmRun.vue")['default']
    'PmX': typeof import("../node_modules/shadcn-docs-nuxt/components/content/PmX.vue")['default']
    'ProseA': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseA.vue")['default']
    'ProseBlockquote': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseBlockquote.vue")['default']
    'ProseCode': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseCode.vue")['default']
    'ProseCodeInline': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseCodeInline.vue")['default']
    'ProseEm': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseEm.vue")['default']
    'ProseH1': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH1.vue")['default']
    'ProseH2': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH2.vue")['default']
    'ProseH3': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH3.vue")['default']
    'ProseH4': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH4.vue")['default']
    'ProseH5': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH5.vue")['default']
    'ProseH6': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH6.vue")['default']
    'ProseHr': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseHr.vue")['default']
    'ProseImg': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseImg.vue")['default']
    'ProseLi': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseLi.vue")['default']
    'ProseOl': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseOl.vue")['default']
    'ProseP': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseP.vue")['default']
    'ProsePre': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProsePre.vue")['default']
    'ProseStrong': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseStrong.vue")['default']
    'ProseTable': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTable.vue")['default']
    'ProseTbody': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTbody.vue")['default']
    'ProseTd': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTd.vue")['default']
    'ProseTh': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTh.vue")['default']
    'ProseThead': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseThead.vue")['default']
    'ProseTr': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTr.vue")['default']
    'ProseUl': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseUl.vue")['default']
    'ReadMore': typeof import("../node_modules/shadcn-docs-nuxt/components/content/ReadMore.vue")['default']
    'Shortcut': typeof import("../node_modules/shadcn-docs-nuxt/components/content/Shortcut.vue")['default']
    'SmartIcon': typeof import("../node_modules/shadcn-docs-nuxt/components/content/SmartIcon.vue")['default']
    'Stack': typeof import("../node_modules/shadcn-docs-nuxt/components/content/Stack.vue")['default']
    'Steps': typeof import("../node_modules/shadcn-docs-nuxt/components/content/Steps.vue")['default']
    'Tabs': typeof import("../node_modules/shadcn-docs-nuxt/components/content/Tabs.vue")['default']
    'TabsInner': typeof import("../node_modules/shadcn-docs-nuxt/components/content/TabsInner.vue")['default']
    'TeamCard': typeof import("../node_modules/shadcn-docs-nuxt/components/content/TeamCard.vue")['default']
    'TeamCardGroup': typeof import("../node_modules/shadcn-docs-nuxt/components/content/TeamCardGroup.vue")['default']
    'DarkModeToggle': typeof import("../node_modules/shadcn-docs-nuxt/components/DarkModeToggle.vue")['default']
    'ThemeCustomizer': typeof import("../node_modules/shadcn-docs-nuxt/components/ThemeCustomizer.vue")['default']
    'ThemePopover': typeof import("../node_modules/shadcn-docs-nuxt/components/ThemePopover.vue")['default']
    'LayoutAside': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Aside.vue")['default']
    'LayoutAsideTree': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/AsideTree.vue")['default']
    'LayoutAsideTreeItem': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/AsideTreeItem.vue")['default']
    'LayoutAsideTreeItemButton': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/AsideTreeItemButton.vue")['default']
    'LayoutBackToTop': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/BackToTop.vue")['default']
    'LayoutBanner': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Banner.vue")['default']
    'LayoutBreadcrumb': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Breadcrumb.vue")['default']
    'LayoutCarbonAds': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/CarbonAds.vue")['default']
    'LayoutDocsFooter': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/DocsFooter.vue")['default']
    'LayoutEditLink': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/EditLink.vue")['default']
    'LayoutFooter': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Footer.vue")['default']
    'LayoutHeader': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header.vue")['default']
    'LayoutHeaderLogo': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/Logo.vue")['default']
    'LayoutHeaderNav': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/Nav.vue")['default']
    'LayoutHeaderNavMobile': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/NavMobile.vue")['default']
    'LayoutHeaderNavMobileItem': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/NavMobileItem.vue")['default']
    'LayoutMobileNav': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/MobileNav.vue")['default']
    'LayoutPrevNext': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/PrevNext.vue")['default']
    'LayoutPrevNextButton': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/PrevNextButton.vue")['default']
    'LayoutSearchButton': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/SearchButton.vue")['default']
    'LayoutSearchDialog': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/SearchDialog.vue")['default']
    'LayoutTitle': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Title.vue")['default']
    'LayoutToc': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Toc.vue")['default']
    'LayoutTocTree': typeof import("../node_modules/shadcn-docs-nuxt/components/layout/TocTree.vue")['default']
    'ContentDoc': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']
    'ContentList': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']
    'ContentNavigation': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']
    'ContentQuery': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']
    'ContentRenderer': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
    'ContentRendererMarkdown': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']
    'ContentSlot': typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']
    'DocumentDrivenEmpty': typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']
    'DocumentDrivenNotFound': typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']
    'Markdown': typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']
    'ProseScript': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
    'ScriptAriaLoadingIndicator': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']
    'ScriptCarbonAds': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']
    'ScriptCrisp': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']
    'ScriptGoogleAdsense': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']
    'ScriptGoogleMaps': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue")['default']
    'ScriptIntercom': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']
    'ScriptLemonSqueezy': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']
    'ScriptLoadingIndicator': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']
    'ScriptStripePricingTable': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']
    'ScriptVimeoPlayer': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']
    'ScriptYouTubePlayer': typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'UiAlert': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/alert/index")['Alert']
    'UiAlertDescription': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/alert/index")['AlertDescription']
    'UiAlertTitle': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/alert/index")['AlertTitle']
    'UiAccordion': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['Accordion']
    'UiAccordionContent': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['AccordionContent']
    'UiAccordionItem': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['AccordionItem']
    'UiAccordionTrigger': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['AccordionTrigger']
    'UiBadge': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/badge/index")['Badge']
    'UiAvatar': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/avatar/index")['Avatar']
    'UiAvatarFallback': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/avatar/index")['AvatarFallback']
    'UiAvatarImage': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/avatar/index")['AvatarImage']
    'UiBreadcrumb': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['Breadcrumb']
    'UiBreadcrumbItem': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbItem']
    'UiBreadcrumbLink': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbLink']
    'UiBreadcrumbList': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbList']
    'UiBreadcrumbPage': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbPage']
    'UiBreadcrumbSeparator': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbSeparator']
    'UiButton': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/button/index")['Button']
    'UiCard': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['Card']
    'UiCardContent': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardContent']
    'UiCardDescription': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardDescription']
    'UiCardFooter': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardFooter']
    'UiCardHeader': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardHeader']
    'UiCardTitle': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardTitle']
    'UiCollapsible': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/collapsible/index")['Collapsible']
    'UiCollapsibleContent': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/collapsible/index")['CollapsibleContent']
    'UiCollapsibleTrigger': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/collapsible/index")['CollapsibleTrigger']
    'UiCommand': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['Command']
    'UiCommandEmpty': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandEmpty']
    'UiCommandGroup': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandGroup']
    'UiCommandInput': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandInput']
    'UiCommandItem': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandItem']
    'UiCommandList': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandList']
    'UiCommandSeparator': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandSeparator']
    'UiLabel': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/label/index")['Label']
    'UiDialog': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['Dialog']
    'UiDialogClose': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogClose']
    'UiDialogContent': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogContent']
    'UiDialogDescription': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogDescription']
    'UiDialogFooter': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogFooter']
    'UiDialogHeader': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogHeader']
    'UiDialogScrollContent': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogScrollContent']
    'UiDialogTitle': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogTitle']
    'UiDialogTrigger': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogTrigger']
    'UiNavigationMenu': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenu']
    'UiNavigationMenuContent': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuContent']
    'UiNavigationMenuItem': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuItem']
    'UiNavigationMenuLink': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuLink']
    'UiNavigationMenuList': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuList']
    'UiNavigationMenuTrigger': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuTrigger']
    'UiPopover': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['Popover']
    'UiPopoverContent': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['PopoverContent']
    'UiPopoverTrigger': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['PopoverTrigger']
    'UiPopoverAnchor': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['PopoverAnchor']
    'UiSeparator': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/separator/index")['Separator']
    'UiScrollArea': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/scroll-area/index")['ScrollArea']
    'UiScrollBar': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/scroll-area/index")['ScrollBar']
    'UiSheet': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['Sheet']
    'UiSheetClose': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetClose']
    'UiSheetContent': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetContent']
    'UiSheetDescription': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetDescription']
    'UiSheetFooter': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetFooter']
    'UiSheetHeader': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetHeader']
    'UiSheetTitle': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetTitle']
    'UiSheetTrigger': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetTrigger']
    'UiTabs': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['Tabs']
    'UiTabsContent': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['TabsContent']
    'UiTabsList': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['TabsList']
    'UiTabsTrigger': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['TabsTrigger']
    'UiToast': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['Toast']
    'UiToastAction': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastAction']
    'UiToastClose': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastClose']
    'UiToastDescription': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastDescription']
    'UiToaster': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['Toaster']
    'UiToastProvider': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastProvider']
    'UiToastTitle': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastTitle']
    'UiToastViewport': typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastViewport']
    'MDC': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
    'MDCRenderer': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
    'MDCSlot': typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'ColorScheme': typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAccordion': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Accordion.vue")['default']>
    'LazyAccordionItem': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/AccordionItem.vue")['default']>
    'LazyAlert': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Alert.vue")['default']>
    'LazyBadge': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Badge.vue")['default']>
    'LazyButtonLink': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ButtonLink.vue")['default']>
    'LazyCallout': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Callout.vue")['default']>
    'LazyCard': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Card.vue")['default']>
    'LazyCardGroup': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/CardGroup.vue")['default']>
    'LazyCodeCopy': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeCopy.vue")['default']>
    'LazyCodeGroup': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeGroup.vue")['default']>
    'LazyCodeTree': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTree.vue")['default']>
    'LazyCodeTreeInner': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTreeInner.vue")['default']>
    'LazyCodeTreeItem': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTreeItem.vue")['default']>
    'LazyCodeTreeRoot': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTreeRoot.vue")['default']>
    'LazyCollapsible': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Collapsible.vue")['default']>
    'LazyField': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Field.vue")['default']>
    'LazyFieldGroup': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/FieldGroup.vue")['default']>
    'LazyFileTree': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/FileTree.vue")['default']>
    'LazyFileTreeItem': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/FileTreeItem.vue")['default']>
    'LazyFileTreeRoot': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/FileTreeRoot.vue")['default']>
    'LazyHero': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Hero.vue")['default']>
    'LazyHeroAlt': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/HeroAlt.vue")['default']>
    'LazyKbd': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Kbd.vue")['default']>
    'LazyPmInstall': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/PmInstall.vue")['default']>
    'LazyPmRun': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/PmRun.vue")['default']>
    'LazyPmX': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/PmX.vue")['default']>
    'LazyProseA': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseA.vue")['default']>
    'LazyProseBlockquote': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseBlockquote.vue")['default']>
    'LazyProseCode': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseCode.vue")['default']>
    'LazyProseCodeInline': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseCodeInline.vue")['default']>
    'LazyProseEm': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseEm.vue")['default']>
    'LazyProseH1': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH1.vue")['default']>
    'LazyProseH2': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH2.vue")['default']>
    'LazyProseH3': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH3.vue")['default']>
    'LazyProseH4': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH4.vue")['default']>
    'LazyProseH5': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH5.vue")['default']>
    'LazyProseH6': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH6.vue")['default']>
    'LazyProseHr': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseHr.vue")['default']>
    'LazyProseImg': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseImg.vue")['default']>
    'LazyProseLi': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseLi.vue")['default']>
    'LazyProseOl': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseOl.vue")['default']>
    'LazyProseP': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseP.vue")['default']>
    'LazyProsePre': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProsePre.vue")['default']>
    'LazyProseStrong': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseStrong.vue")['default']>
    'LazyProseTable': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTable.vue")['default']>
    'LazyProseTbody': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTbody.vue")['default']>
    'LazyProseTd': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTd.vue")['default']>
    'LazyProseTh': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTh.vue")['default']>
    'LazyProseThead': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseThead.vue")['default']>
    'LazyProseTr': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTr.vue")['default']>
    'LazyProseUl': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseUl.vue")['default']>
    'LazyReadMore': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ReadMore.vue")['default']>
    'LazyShortcut': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Shortcut.vue")['default']>
    'LazySmartIcon': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/SmartIcon.vue")['default']>
    'LazyStack': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Stack.vue")['default']>
    'LazySteps': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Steps.vue")['default']>
    'LazyTabs': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Tabs.vue")['default']>
    'LazyTabsInner': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/TabsInner.vue")['default']>
    'LazyTeamCard': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/TeamCard.vue")['default']>
    'LazyTeamCardGroup': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/TeamCardGroup.vue")['default']>
    'LazyDarkModeToggle': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/DarkModeToggle.vue")['default']>
    'LazyThemeCustomizer': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ThemeCustomizer.vue")['default']>
    'LazyThemePopover': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ThemePopover.vue")['default']>
    'LazyLayoutAside': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Aside.vue")['default']>
    'LazyLayoutAsideTree': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/AsideTree.vue")['default']>
    'LazyLayoutAsideTreeItem': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/AsideTreeItem.vue")['default']>
    'LazyLayoutAsideTreeItemButton': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/AsideTreeItemButton.vue")['default']>
    'LazyLayoutBackToTop': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/BackToTop.vue")['default']>
    'LazyLayoutBanner': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Banner.vue")['default']>
    'LazyLayoutBreadcrumb': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Breadcrumb.vue")['default']>
    'LazyLayoutCarbonAds': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/CarbonAds.vue")['default']>
    'LazyLayoutDocsFooter': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/DocsFooter.vue")['default']>
    'LazyLayoutEditLink': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/EditLink.vue")['default']>
    'LazyLayoutFooter': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Footer.vue")['default']>
    'LazyLayoutHeader': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header.vue")['default']>
    'LazyLayoutHeaderLogo': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/Logo.vue")['default']>
    'LazyLayoutHeaderNav': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/Nav.vue")['default']>
    'LazyLayoutHeaderNavMobile': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/NavMobile.vue")['default']>
    'LazyLayoutHeaderNavMobileItem': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/NavMobileItem.vue")['default']>
    'LazyLayoutMobileNav': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/MobileNav.vue")['default']>
    'LazyLayoutPrevNext': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/PrevNext.vue")['default']>
    'LazyLayoutPrevNextButton': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/PrevNextButton.vue")['default']>
    'LazyLayoutSearchButton': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/SearchButton.vue")['default']>
    'LazyLayoutSearchDialog': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/SearchDialog.vue")['default']>
    'LazyLayoutTitle': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Title.vue")['default']>
    'LazyLayoutToc': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Toc.vue")['default']>
    'LazyLayoutTocTree': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/TocTree.vue")['default']>
    'LazyContentDoc': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']>
    'LazyContentList': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']>
    'LazyContentNavigation': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']>
    'LazyContentQuery': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']>
    'LazyContentRenderer': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
    'LazyContentRendererMarkdown': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']>
    'LazyContentSlot': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']>
    'LazyDocumentDrivenEmpty': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']>
    'LazyDocumentDrivenNotFound': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']>
    'LazyMarkdown': LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']>
    'LazyProseScript': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
    'LazyScriptAriaLoadingIndicator': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']>
    'LazyScriptCarbonAds': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']>
    'LazyScriptCrisp': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']>
    'LazyScriptGoogleAdsense': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']>
    'LazyScriptGoogleMaps': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue")['default']>
    'LazyScriptIntercom': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']>
    'LazyScriptLemonSqueezy': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']>
    'LazyScriptLoadingIndicator': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']>
    'LazyScriptStripePricingTable': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']>
    'LazyScriptVimeoPlayer': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']>
    'LazyScriptYouTubePlayer': LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyUiAlert': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/alert/index")['Alert']>
    'LazyUiAlertDescription': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/alert/index")['AlertDescription']>
    'LazyUiAlertTitle': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/alert/index")['AlertTitle']>
    'LazyUiAccordion': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['Accordion']>
    'LazyUiAccordionContent': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['AccordionContent']>
    'LazyUiAccordionItem': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['AccordionItem']>
    'LazyUiAccordionTrigger': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['AccordionTrigger']>
    'LazyUiBadge': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/badge/index")['Badge']>
    'LazyUiAvatar': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/avatar/index")['Avatar']>
    'LazyUiAvatarFallback': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/avatar/index")['AvatarFallback']>
    'LazyUiAvatarImage': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/avatar/index")['AvatarImage']>
    'LazyUiBreadcrumb': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['Breadcrumb']>
    'LazyUiBreadcrumbItem': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbItem']>
    'LazyUiBreadcrumbLink': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbLink']>
    'LazyUiBreadcrumbList': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbList']>
    'LazyUiBreadcrumbPage': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbPage']>
    'LazyUiBreadcrumbSeparator': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbSeparator']>
    'LazyUiButton': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/button/index")['Button']>
    'LazyUiCard': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['Card']>
    'LazyUiCardContent': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardContent']>
    'LazyUiCardDescription': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardDescription']>
    'LazyUiCardFooter': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardFooter']>
    'LazyUiCardHeader': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardHeader']>
    'LazyUiCardTitle': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardTitle']>
    'LazyUiCollapsible': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/collapsible/index")['Collapsible']>
    'LazyUiCollapsibleContent': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/collapsible/index")['CollapsibleContent']>
    'LazyUiCollapsibleTrigger': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/collapsible/index")['CollapsibleTrigger']>
    'LazyUiCommand': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['Command']>
    'LazyUiCommandEmpty': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandEmpty']>
    'LazyUiCommandGroup': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandGroup']>
    'LazyUiCommandInput': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandInput']>
    'LazyUiCommandItem': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandItem']>
    'LazyUiCommandList': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandList']>
    'LazyUiCommandSeparator': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandSeparator']>
    'LazyUiLabel': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/label/index")['Label']>
    'LazyUiDialog': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['Dialog']>
    'LazyUiDialogClose': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogClose']>
    'LazyUiDialogContent': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogContent']>
    'LazyUiDialogDescription': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogDescription']>
    'LazyUiDialogFooter': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogFooter']>
    'LazyUiDialogHeader': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogHeader']>
    'LazyUiDialogScrollContent': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogScrollContent']>
    'LazyUiDialogTitle': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogTitle']>
    'LazyUiDialogTrigger': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogTrigger']>
    'LazyUiNavigationMenu': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenu']>
    'LazyUiNavigationMenuContent': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuContent']>
    'LazyUiNavigationMenuItem': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuItem']>
    'LazyUiNavigationMenuLink': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuLink']>
    'LazyUiNavigationMenuList': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuList']>
    'LazyUiNavigationMenuTrigger': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuTrigger']>
    'LazyUiPopover': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['Popover']>
    'LazyUiPopoverContent': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['PopoverContent']>
    'LazyUiPopoverTrigger': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['PopoverTrigger']>
    'LazyUiPopoverAnchor': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['PopoverAnchor']>
    'LazyUiSeparator': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/separator/index")['Separator']>
    'LazyUiScrollArea': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/scroll-area/index")['ScrollArea']>
    'LazyUiScrollBar': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/scroll-area/index")['ScrollBar']>
    'LazyUiSheet': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['Sheet']>
    'LazyUiSheetClose': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetClose']>
    'LazyUiSheetContent': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetContent']>
    'LazyUiSheetDescription': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetDescription']>
    'LazyUiSheetFooter': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetFooter']>
    'LazyUiSheetHeader': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetHeader']>
    'LazyUiSheetTitle': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetTitle']>
    'LazyUiSheetTrigger': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetTrigger']>
    'LazyUiTabs': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['Tabs']>
    'LazyUiTabsContent': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['TabsContent']>
    'LazyUiTabsList': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['TabsList']>
    'LazyUiTabsTrigger': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['TabsTrigger']>
    'LazyUiToast': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['Toast']>
    'LazyUiToastAction': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastAction']>
    'LazyUiToastClose': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastClose']>
    'LazyUiToastDescription': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastDescription']>
    'LazyUiToaster': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['Toaster']>
    'LazyUiToastProvider': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastProvider']>
    'LazyUiToastTitle': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastTitle']>
    'LazyUiToastViewport': LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastViewport']>
    'LazyMDC': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
    'LazyMDCRenderer': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
    'LazyMDCSlot': LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const Accordion: typeof import("../node_modules/shadcn-docs-nuxt/components/content/Accordion.vue")['default']
export const AccordionItem: typeof import("../node_modules/shadcn-docs-nuxt/components/content/AccordionItem.vue")['default']
export const Alert: typeof import("../node_modules/shadcn-docs-nuxt/components/content/Alert.vue")['default']
export const Badge: typeof import("../node_modules/shadcn-docs-nuxt/components/content/Badge.vue")['default']
export const ButtonLink: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ButtonLink.vue")['default']
export const Callout: typeof import("../node_modules/shadcn-docs-nuxt/components/content/Callout.vue")['default']
export const Card: typeof import("../node_modules/shadcn-docs-nuxt/components/content/Card.vue")['default']
export const CardGroup: typeof import("../node_modules/shadcn-docs-nuxt/components/content/CardGroup.vue")['default']
export const CodeCopy: typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeCopy.vue")['default']
export const CodeGroup: typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeGroup.vue")['default']
export const CodeTree: typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTree.vue")['default']
export const CodeTreeInner: typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTreeInner.vue")['default']
export const CodeTreeItem: typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTreeItem.vue")['default']
export const CodeTreeRoot: typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTreeRoot.vue")['default']
export const Collapsible: typeof import("../node_modules/shadcn-docs-nuxt/components/content/Collapsible.vue")['default']
export const Field: typeof import("../node_modules/shadcn-docs-nuxt/components/content/Field.vue")['default']
export const FieldGroup: typeof import("../node_modules/shadcn-docs-nuxt/components/content/FieldGroup.vue")['default']
export const FileTree: typeof import("../node_modules/shadcn-docs-nuxt/components/content/FileTree.vue")['default']
export const FileTreeItem: typeof import("../node_modules/shadcn-docs-nuxt/components/content/FileTreeItem.vue")['default']
export const FileTreeRoot: typeof import("../node_modules/shadcn-docs-nuxt/components/content/FileTreeRoot.vue")['default']
export const Hero: typeof import("../node_modules/shadcn-docs-nuxt/components/content/Hero.vue")['default']
export const HeroAlt: typeof import("../node_modules/shadcn-docs-nuxt/components/content/HeroAlt.vue")['default']
export const Kbd: typeof import("../node_modules/shadcn-docs-nuxt/components/content/Kbd.vue")['default']
export const PmInstall: typeof import("../node_modules/shadcn-docs-nuxt/components/content/PmInstall.vue")['default']
export const PmRun: typeof import("../node_modules/shadcn-docs-nuxt/components/content/PmRun.vue")['default']
export const PmX: typeof import("../node_modules/shadcn-docs-nuxt/components/content/PmX.vue")['default']
export const ProseA: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseA.vue")['default']
export const ProseBlockquote: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseBlockquote.vue")['default']
export const ProseCode: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseCode.vue")['default']
export const ProseCodeInline: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseCodeInline.vue")['default']
export const ProseEm: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseEm.vue")['default']
export const ProseH1: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH1.vue")['default']
export const ProseH2: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH2.vue")['default']
export const ProseH3: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH3.vue")['default']
export const ProseH4: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH4.vue")['default']
export const ProseH5: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH5.vue")['default']
export const ProseH6: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH6.vue")['default']
export const ProseHr: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseHr.vue")['default']
export const ProseImg: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseImg.vue")['default']
export const ProseLi: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseLi.vue")['default']
export const ProseOl: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseOl.vue")['default']
export const ProseP: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseP.vue")['default']
export const ProsePre: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProsePre.vue")['default']
export const ProseStrong: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseStrong.vue")['default']
export const ProseTable: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTable.vue")['default']
export const ProseTbody: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTbody.vue")['default']
export const ProseTd: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTd.vue")['default']
export const ProseTh: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTh.vue")['default']
export const ProseThead: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseThead.vue")['default']
export const ProseTr: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTr.vue")['default']
export const ProseUl: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseUl.vue")['default']
export const ReadMore: typeof import("../node_modules/shadcn-docs-nuxt/components/content/ReadMore.vue")['default']
export const Shortcut: typeof import("../node_modules/shadcn-docs-nuxt/components/content/Shortcut.vue")['default']
export const SmartIcon: typeof import("../node_modules/shadcn-docs-nuxt/components/content/SmartIcon.vue")['default']
export const Stack: typeof import("../node_modules/shadcn-docs-nuxt/components/content/Stack.vue")['default']
export const Steps: typeof import("../node_modules/shadcn-docs-nuxt/components/content/Steps.vue")['default']
export const Tabs: typeof import("../node_modules/shadcn-docs-nuxt/components/content/Tabs.vue")['default']
export const TabsInner: typeof import("../node_modules/shadcn-docs-nuxt/components/content/TabsInner.vue")['default']
export const TeamCard: typeof import("../node_modules/shadcn-docs-nuxt/components/content/TeamCard.vue")['default']
export const TeamCardGroup: typeof import("../node_modules/shadcn-docs-nuxt/components/content/TeamCardGroup.vue")['default']
export const DarkModeToggle: typeof import("../node_modules/shadcn-docs-nuxt/components/DarkModeToggle.vue")['default']
export const ThemeCustomizer: typeof import("../node_modules/shadcn-docs-nuxt/components/ThemeCustomizer.vue")['default']
export const ThemePopover: typeof import("../node_modules/shadcn-docs-nuxt/components/ThemePopover.vue")['default']
export const LayoutAside: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Aside.vue")['default']
export const LayoutAsideTree: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/AsideTree.vue")['default']
export const LayoutAsideTreeItem: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/AsideTreeItem.vue")['default']
export const LayoutAsideTreeItemButton: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/AsideTreeItemButton.vue")['default']
export const LayoutBackToTop: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/BackToTop.vue")['default']
export const LayoutBanner: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Banner.vue")['default']
export const LayoutBreadcrumb: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Breadcrumb.vue")['default']
export const LayoutCarbonAds: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/CarbonAds.vue")['default']
export const LayoutDocsFooter: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/DocsFooter.vue")['default']
export const LayoutEditLink: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/EditLink.vue")['default']
export const LayoutFooter: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Footer.vue")['default']
export const LayoutHeader: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header.vue")['default']
export const LayoutHeaderLogo: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/Logo.vue")['default']
export const LayoutHeaderNav: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/Nav.vue")['default']
export const LayoutHeaderNavMobile: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/NavMobile.vue")['default']
export const LayoutHeaderNavMobileItem: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/NavMobileItem.vue")['default']
export const LayoutMobileNav: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/MobileNav.vue")['default']
export const LayoutPrevNext: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/PrevNext.vue")['default']
export const LayoutPrevNextButton: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/PrevNextButton.vue")['default']
export const LayoutSearchButton: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/SearchButton.vue")['default']
export const LayoutSearchDialog: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/SearchDialog.vue")['default']
export const LayoutTitle: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Title.vue")['default']
export const LayoutToc: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Toc.vue")['default']
export const LayoutTocTree: typeof import("../node_modules/shadcn-docs-nuxt/components/layout/TocTree.vue")['default']
export const ContentDoc: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']
export const ContentList: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']
export const ContentNavigation: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']
export const ContentQuery: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']
export const ContentRenderer: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']
export const ContentRendererMarkdown: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']
export const ContentSlot: typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']
export const DocumentDrivenEmpty: typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']
export const DocumentDrivenNotFound: typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']
export const Markdown: typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']
export const ProseScript: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']
export const ScriptAriaLoadingIndicator: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']
export const ScriptCarbonAds: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']
export const ScriptCrisp: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']
export const ScriptGoogleAdsense: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']
export const ScriptGoogleMaps: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue")['default']
export const ScriptIntercom: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']
export const ScriptLemonSqueezy: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']
export const ScriptLoadingIndicator: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']
export const ScriptStripePricingTable: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']
export const ScriptVimeoPlayer: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']
export const ScriptYouTubePlayer: typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const UiAlert: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/alert/index")['Alert']
export const UiAlertDescription: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/alert/index")['AlertDescription']
export const UiAlertTitle: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/alert/index")['AlertTitle']
export const UiAccordion: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['Accordion']
export const UiAccordionContent: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['AccordionContent']
export const UiAccordionItem: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['AccordionItem']
export const UiAccordionTrigger: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['AccordionTrigger']
export const UiBadge: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/badge/index")['Badge']
export const UiAvatar: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/avatar/index")['Avatar']
export const UiAvatarFallback: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/avatar/index")['AvatarFallback']
export const UiAvatarImage: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/avatar/index")['AvatarImage']
export const UiBreadcrumb: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['Breadcrumb']
export const UiBreadcrumbItem: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbItem']
export const UiBreadcrumbLink: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbLink']
export const UiBreadcrumbList: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbList']
export const UiBreadcrumbPage: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbPage']
export const UiBreadcrumbSeparator: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbSeparator']
export const UiButton: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/button/index")['Button']
export const UiCard: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['Card']
export const UiCardContent: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardContent']
export const UiCardDescription: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardDescription']
export const UiCardFooter: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardFooter']
export const UiCardHeader: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardHeader']
export const UiCardTitle: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardTitle']
export const UiCollapsible: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/collapsible/index")['Collapsible']
export const UiCollapsibleContent: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/collapsible/index")['CollapsibleContent']
export const UiCollapsibleTrigger: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/collapsible/index")['CollapsibleTrigger']
export const UiCommand: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['Command']
export const UiCommandEmpty: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandEmpty']
export const UiCommandGroup: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandGroup']
export const UiCommandInput: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandInput']
export const UiCommandItem: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandItem']
export const UiCommandList: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandList']
export const UiCommandSeparator: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandSeparator']
export const UiLabel: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/label/index")['Label']
export const UiDialog: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['Dialog']
export const UiDialogClose: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogClose']
export const UiDialogContent: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogContent']
export const UiDialogDescription: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogDescription']
export const UiDialogFooter: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogFooter']
export const UiDialogHeader: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogHeader']
export const UiDialogScrollContent: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogScrollContent']
export const UiDialogTitle: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogTitle']
export const UiDialogTrigger: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogTrigger']
export const UiNavigationMenu: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenu']
export const UiNavigationMenuContent: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuContent']
export const UiNavigationMenuItem: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuItem']
export const UiNavigationMenuLink: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuLink']
export const UiNavigationMenuList: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuList']
export const UiNavigationMenuTrigger: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuTrigger']
export const UiPopover: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['Popover']
export const UiPopoverContent: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['PopoverContent']
export const UiPopoverTrigger: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['PopoverTrigger']
export const UiPopoverAnchor: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['PopoverAnchor']
export const UiSeparator: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/separator/index")['Separator']
export const UiScrollArea: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/scroll-area/index")['ScrollArea']
export const UiScrollBar: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/scroll-area/index")['ScrollBar']
export const UiSheet: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['Sheet']
export const UiSheetClose: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetClose']
export const UiSheetContent: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetContent']
export const UiSheetDescription: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetDescription']
export const UiSheetFooter: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetFooter']
export const UiSheetHeader: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetHeader']
export const UiSheetTitle: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetTitle']
export const UiSheetTrigger: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetTrigger']
export const UiTabs: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['Tabs']
export const UiTabsContent: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['TabsContent']
export const UiTabsList: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['TabsList']
export const UiTabsTrigger: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['TabsTrigger']
export const UiToast: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['Toast']
export const UiToastAction: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastAction']
export const UiToastClose: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastClose']
export const UiToastDescription: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastDescription']
export const UiToaster: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['Toaster']
export const UiToastProvider: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastProvider']
export const UiToastTitle: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastTitle']
export const UiToastViewport: typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastViewport']
export const MDC: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']
export const MDCRenderer: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']
export const MDCSlot: typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAccordion: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Accordion.vue")['default']>
export const LazyAccordionItem: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/AccordionItem.vue")['default']>
export const LazyAlert: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Alert.vue")['default']>
export const LazyBadge: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Badge.vue")['default']>
export const LazyButtonLink: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ButtonLink.vue")['default']>
export const LazyCallout: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Callout.vue")['default']>
export const LazyCard: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Card.vue")['default']>
export const LazyCardGroup: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/CardGroup.vue")['default']>
export const LazyCodeCopy: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeCopy.vue")['default']>
export const LazyCodeGroup: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeGroup.vue")['default']>
export const LazyCodeTree: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTree.vue")['default']>
export const LazyCodeTreeInner: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTreeInner.vue")['default']>
export const LazyCodeTreeItem: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTreeItem.vue")['default']>
export const LazyCodeTreeRoot: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/CodeTreeRoot.vue")['default']>
export const LazyCollapsible: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Collapsible.vue")['default']>
export const LazyField: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Field.vue")['default']>
export const LazyFieldGroup: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/FieldGroup.vue")['default']>
export const LazyFileTree: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/FileTree.vue")['default']>
export const LazyFileTreeItem: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/FileTreeItem.vue")['default']>
export const LazyFileTreeRoot: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/FileTreeRoot.vue")['default']>
export const LazyHero: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Hero.vue")['default']>
export const LazyHeroAlt: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/HeroAlt.vue")['default']>
export const LazyKbd: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Kbd.vue")['default']>
export const LazyPmInstall: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/PmInstall.vue")['default']>
export const LazyPmRun: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/PmRun.vue")['default']>
export const LazyPmX: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/PmX.vue")['default']>
export const LazyProseA: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseA.vue")['default']>
export const LazyProseBlockquote: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseBlockquote.vue")['default']>
export const LazyProseCode: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseCode.vue")['default']>
export const LazyProseCodeInline: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseCodeInline.vue")['default']>
export const LazyProseEm: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseEm.vue")['default']>
export const LazyProseH1: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH1.vue")['default']>
export const LazyProseH2: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH2.vue")['default']>
export const LazyProseH3: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH3.vue")['default']>
export const LazyProseH4: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH4.vue")['default']>
export const LazyProseH5: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH5.vue")['default']>
export const LazyProseH6: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseH6.vue")['default']>
export const LazyProseHr: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseHr.vue")['default']>
export const LazyProseImg: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseImg.vue")['default']>
export const LazyProseLi: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseLi.vue")['default']>
export const LazyProseOl: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseOl.vue")['default']>
export const LazyProseP: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseP.vue")['default']>
export const LazyProsePre: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProsePre.vue")['default']>
export const LazyProseStrong: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseStrong.vue")['default']>
export const LazyProseTable: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTable.vue")['default']>
export const LazyProseTbody: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTbody.vue")['default']>
export const LazyProseTd: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTd.vue")['default']>
export const LazyProseTh: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTh.vue")['default']>
export const LazyProseThead: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseThead.vue")['default']>
export const LazyProseTr: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseTr.vue")['default']>
export const LazyProseUl: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ProseUl.vue")['default']>
export const LazyReadMore: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/ReadMore.vue")['default']>
export const LazyShortcut: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Shortcut.vue")['default']>
export const LazySmartIcon: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/SmartIcon.vue")['default']>
export const LazyStack: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Stack.vue")['default']>
export const LazySteps: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Steps.vue")['default']>
export const LazyTabs: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/Tabs.vue")['default']>
export const LazyTabsInner: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/TabsInner.vue")['default']>
export const LazyTeamCard: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/TeamCard.vue")['default']>
export const LazyTeamCardGroup: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/content/TeamCardGroup.vue")['default']>
export const LazyDarkModeToggle: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/DarkModeToggle.vue")['default']>
export const LazyThemeCustomizer: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ThemeCustomizer.vue")['default']>
export const LazyThemePopover: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ThemePopover.vue")['default']>
export const LazyLayoutAside: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Aside.vue")['default']>
export const LazyLayoutAsideTree: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/AsideTree.vue")['default']>
export const LazyLayoutAsideTreeItem: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/AsideTreeItem.vue")['default']>
export const LazyLayoutAsideTreeItemButton: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/AsideTreeItemButton.vue")['default']>
export const LazyLayoutBackToTop: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/BackToTop.vue")['default']>
export const LazyLayoutBanner: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Banner.vue")['default']>
export const LazyLayoutBreadcrumb: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Breadcrumb.vue")['default']>
export const LazyLayoutCarbonAds: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/CarbonAds.vue")['default']>
export const LazyLayoutDocsFooter: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/DocsFooter.vue")['default']>
export const LazyLayoutEditLink: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/EditLink.vue")['default']>
export const LazyLayoutFooter: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Footer.vue")['default']>
export const LazyLayoutHeader: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header.vue")['default']>
export const LazyLayoutHeaderLogo: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/Logo.vue")['default']>
export const LazyLayoutHeaderNav: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/Nav.vue")['default']>
export const LazyLayoutHeaderNavMobile: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/NavMobile.vue")['default']>
export const LazyLayoutHeaderNavMobileItem: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Header/NavMobileItem.vue")['default']>
export const LazyLayoutMobileNav: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/MobileNav.vue")['default']>
export const LazyLayoutPrevNext: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/PrevNext.vue")['default']>
export const LazyLayoutPrevNextButton: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/PrevNextButton.vue")['default']>
export const LazyLayoutSearchButton: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/SearchButton.vue")['default']>
export const LazyLayoutSearchDialog: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/SearchDialog.vue")['default']>
export const LazyLayoutTitle: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Title.vue")['default']>
export const LazyLayoutToc: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/Toc.vue")['default']>
export const LazyLayoutTocTree: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/layout/TocTree.vue")['default']>
export const LazyContentDoc: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentDoc.vue")['default']>
export const LazyContentList: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentList.vue")['default']>
export const LazyContentNavigation: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentNavigation.vue")['default']>
export const LazyContentQuery: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentQuery.vue")['default']>
export const LazyContentRenderer: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRenderer.vue")['default']>
export const LazyContentRendererMarkdown: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentRendererMarkdown.vue")['default']>
export const LazyContentSlot: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/ContentSlot.vue")['default']>
export const LazyDocumentDrivenEmpty: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenEmpty.vue")['default']>
export const LazyDocumentDrivenNotFound: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/DocumentDrivenNotFound.vue")['default']>
export const LazyMarkdown: LazyComponent<typeof import("../node_modules/@nuxt/content/dist/runtime/components/Markdown.vue")['default']>
export const LazyProseScript: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/prose/ProseScript.vue")['default']>
export const LazyScriptAriaLoadingIndicator: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptAriaLoadingIndicator.vue")['default']>
export const LazyScriptCarbonAds: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCarbonAds.vue")['default']>
export const LazyScriptCrisp: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptCrisp.vue")['default']>
export const LazyScriptGoogleAdsense: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleAdsense.vue")['default']>
export const LazyScriptGoogleMaps: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptGoogleMaps.vue")['default']>
export const LazyScriptIntercom: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptIntercom.vue")['default']>
export const LazyScriptLemonSqueezy: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLemonSqueezy.vue")['default']>
export const LazyScriptLoadingIndicator: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptLoadingIndicator.vue")['default']>
export const LazyScriptStripePricingTable: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptStripePricingTable.vue")['default']>
export const LazyScriptVimeoPlayer: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptVimeoPlayer.vue")['default']>
export const LazyScriptYouTubePlayer: LazyComponent<typeof import("../node_modules/@nuxt/scripts/dist/runtime/components/ScriptYouTubePlayer.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyUiAlert: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/alert/index")['Alert']>
export const LazyUiAlertDescription: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/alert/index")['AlertDescription']>
export const LazyUiAlertTitle: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/alert/index")['AlertTitle']>
export const LazyUiAccordion: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['Accordion']>
export const LazyUiAccordionContent: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['AccordionContent']>
export const LazyUiAccordionItem: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['AccordionItem']>
export const LazyUiAccordionTrigger: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/accordion/index")['AccordionTrigger']>
export const LazyUiBadge: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/badge/index")['Badge']>
export const LazyUiAvatar: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/avatar/index")['Avatar']>
export const LazyUiAvatarFallback: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/avatar/index")['AvatarFallback']>
export const LazyUiAvatarImage: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/avatar/index")['AvatarImage']>
export const LazyUiBreadcrumb: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['Breadcrumb']>
export const LazyUiBreadcrumbItem: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbItem']>
export const LazyUiBreadcrumbLink: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbLink']>
export const LazyUiBreadcrumbList: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbList']>
export const LazyUiBreadcrumbPage: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbPage']>
export const LazyUiBreadcrumbSeparator: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/breadcrumb/index")['BreadcrumbSeparator']>
export const LazyUiButton: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/button/index")['Button']>
export const LazyUiCard: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['Card']>
export const LazyUiCardContent: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardContent']>
export const LazyUiCardDescription: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardDescription']>
export const LazyUiCardFooter: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardFooter']>
export const LazyUiCardHeader: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardHeader']>
export const LazyUiCardTitle: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/card/index")['CardTitle']>
export const LazyUiCollapsible: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/collapsible/index")['Collapsible']>
export const LazyUiCollapsibleContent: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/collapsible/index")['CollapsibleContent']>
export const LazyUiCollapsibleTrigger: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/collapsible/index")['CollapsibleTrigger']>
export const LazyUiCommand: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['Command']>
export const LazyUiCommandEmpty: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandEmpty']>
export const LazyUiCommandGroup: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandGroup']>
export const LazyUiCommandInput: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandInput']>
export const LazyUiCommandItem: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandItem']>
export const LazyUiCommandList: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandList']>
export const LazyUiCommandSeparator: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/command/index")['CommandSeparator']>
export const LazyUiLabel: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/label/index")['Label']>
export const LazyUiDialog: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['Dialog']>
export const LazyUiDialogClose: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogClose']>
export const LazyUiDialogContent: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogContent']>
export const LazyUiDialogDescription: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogDescription']>
export const LazyUiDialogFooter: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogFooter']>
export const LazyUiDialogHeader: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogHeader']>
export const LazyUiDialogScrollContent: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogScrollContent']>
export const LazyUiDialogTitle: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogTitle']>
export const LazyUiDialogTrigger: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/dialog/index")['DialogTrigger']>
export const LazyUiNavigationMenu: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenu']>
export const LazyUiNavigationMenuContent: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuContent']>
export const LazyUiNavigationMenuItem: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuItem']>
export const LazyUiNavigationMenuLink: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuLink']>
export const LazyUiNavigationMenuList: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuList']>
export const LazyUiNavigationMenuTrigger: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/navigation-menu/index")['NavigationMenuTrigger']>
export const LazyUiPopover: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['Popover']>
export const LazyUiPopoverContent: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['PopoverContent']>
export const LazyUiPopoverTrigger: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['PopoverTrigger']>
export const LazyUiPopoverAnchor: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/popover/index")['PopoverAnchor']>
export const LazyUiSeparator: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/separator/index")['Separator']>
export const LazyUiScrollArea: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/scroll-area/index")['ScrollArea']>
export const LazyUiScrollBar: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/scroll-area/index")['ScrollBar']>
export const LazyUiSheet: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['Sheet']>
export const LazyUiSheetClose: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetClose']>
export const LazyUiSheetContent: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetContent']>
export const LazyUiSheetDescription: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetDescription']>
export const LazyUiSheetFooter: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetFooter']>
export const LazyUiSheetHeader: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetHeader']>
export const LazyUiSheetTitle: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetTitle']>
export const LazyUiSheetTrigger: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/sheet/index")['SheetTrigger']>
export const LazyUiTabs: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['Tabs']>
export const LazyUiTabsContent: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['TabsContent']>
export const LazyUiTabsList: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['TabsList']>
export const LazyUiTabsTrigger: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/tabs/index")['TabsTrigger']>
export const LazyUiToast: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['Toast']>
export const LazyUiToastAction: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastAction']>
export const LazyUiToastClose: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastClose']>
export const LazyUiToastDescription: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastDescription']>
export const LazyUiToaster: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['Toaster']>
export const LazyUiToastProvider: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastProvider']>
export const LazyUiToastTitle: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastTitle']>
export const LazyUiToastViewport: LazyComponent<typeof import("../node_modules/shadcn-docs-nuxt/components/ui/toast/index")['ToastViewport']>
export const LazyMDC: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDC.vue")['default']>
export const LazyMDCRenderer: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCRenderer.vue")['default']>
export const LazyMDCSlot: LazyComponent<typeof import("../node_modules/@nuxtjs/mdc/dist/runtime/components/MDCSlot.vue")['default']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
