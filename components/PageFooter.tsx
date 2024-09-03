import * as React from 'react'

import Giscus from '@giscus/react'

import * as config from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'

export const PageFooter: React.FC<{
  isBlogPost: boolean
}> = ({ isBlogPost }) => {
  const { isDarkMode } = useDarkMode()
  // only display comments and page actions on blog post pages
  if (isBlogPost) {
    return (
      config.giscusRepo && (
        <div className={styles.comments}>
          <Giscus
            id='comments'
            repo={config.giscusRepo}
            repoId={config.giscusRepoId}
            category={config.giscusCategory}
            categoryId={config.giscusCategoryId}
            mapping='pathname'
            reactionsEnabled='1'
            emitMetadata='0'
            inputPosition='top'
            theme={isDarkMode ? 'dark' : 'light'}
            lang='en'
            loading='lazy'
          />
        </div>
      )
    )
  }

  return null
}
