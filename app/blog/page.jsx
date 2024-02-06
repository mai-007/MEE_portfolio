import { siteMeta } from '@/lib/constants'
import { openGraphMetadata, twitterMetadata } from '@/lib/baseMetadata'
import { getAllPosts } from '@/lib/api'
import Container from '@/components/Container/Container'
import Hero from '@/components/Hero/Hero'
import Posts from '@/components/Post/Posts'
import { getPlaiceholder } from 'plaiceholder'

// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from '@/lib/constants'

export default async function Blog() {

  const posts = await getAllPosts()
  console.log(posts)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return (
    <Container>
      <Hero title="Blog" subtitle="Recent Posts" />
      <Posts posts={posts} />
    </Container>
  )
}


//meta
const { siteTitle, siteUrl } = siteMeta
const pageTitle = 'プログ'
const pageDesc = 'ブログの記事一覧'
const ogpTitle = `${pageTitle} | ${siteTitle}`
const ogpUrl = new URL('/blog', siteUrl).toString()

export const metadata = {
  title: pageTitle,
  description: pageDesc,

  openGraph: {
    ...openGraphMetadata,
    title: ogpTitle,
    description: pageDesc,
    url: ogpUrl,
  },
  twitter: {
    ...twitterMetadata,
      title: ogpTitle,
      description: pageDesc,
      },
    }
  