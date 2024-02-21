import { getAllPosts } from '@/lib/api'
import Container from '@/components/Container/Container'
import Hero from '@/components/Hero/Hero'
import Posts from '@/components/Post/Posts'
import Skill from '@/components/Skill/Skill'
import { getPlaiceholder } from 'plaiceholder'


// ローカルの代替アイキャッチ画像
import { eyecatchLocal } from 'lib/constants'

export default  async function Home() {
  const posts = await getAllPosts(10)

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return (
    <>
      <Hero/>
      <Container>
        <Posts posts={posts} />
        {/* <Pagination nextUrl="/blog" nextText="More Posts" /> */}
      </Container>
      <Skill/>
    </>
  )
}