import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '2bc441628505497c817cfc277e30bf81?v=55afd83b1af64a1186dcac73aa362c34',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: '73ac661a-e2d7-4aee-ba02-ceda0414340f',

  // basic site info (required)
  name: 'YesYouKen\'s MetaNest',
  domain: 'www.yesyouken.space',
  author: 'Kenneth Tan',

  // open graph metadata (optional)
  description: 'YesYouKen\'s MetaNest',

  // social usernames (optional)
  twitter: '0xYesYouKen',
  github: 'yesyoukenspace',
  linkedin: 'kennethtxytqw',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: "https://i.ibb.co/pRLdP7T/yyk-robot.webp",
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About Me',
      pageId: 'About-Me-cc295a10999a45679f15f137e1665491?pvs=4'
    },
    {
      title: 'Apps',
      pageId: 'Apps-94bc19c1d40b4b7686231fd4db838429?pvs=4'
    }
  ],

    // uncomment gisucs config to enable gisucs, get these keys from https://giscus.app/
  giscusRepo: 'yesyoukenspace/yesyouken.space-comments',
  giscusRepoId: 'R_kgDOMVCSIw',
  giscusCategory: 'Announcements',
  giscusCategoryId: 'DIC_kwDOMVCSI84CguYR'
})
