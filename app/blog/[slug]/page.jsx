import { getPostBySlug, getAllSlugs, getAllPosts } from '@/lib/api'
import { extractText } from '@/lib/extract-text'
import { prevNextPost } from '@/lib/prev-next-post'
import Container from '@/components/Container/Container'
import PostHeader from '@/components/Post/PostHeader'
import PostBody from '@/components/Post/PostBody'
import { TwoColumn, TwoColumnMain, TwoColumnSidebar }  from '@/components/TwoColumn'
import ConvertBody from '@/components/ContentBody'
import PostCategories from '@/components/Post/PostCategories'
import Pagination from '@/components/Pagination/Pagination'
import Image from 'next/legacy/image'
import { getPlaiceholder } from 'plaiceholder' 
import { eyecatchLocal } from '@/lib/constants'
import { siteMeta } from '@/lib/constants'
import { openGraphMetadata, twitterMetadata } from '@/lib/baseMetadata'
import Button from '@/components/Button/Button'
import styles from '@/styles/blog.module.scss'


export default async function Post({
  params })
  {
    const slug = params.slug
    const post = await getPostBySlug(slug)
    const { title, publishDate: publish, content, categories } = post
    const description = extractText(content)
    const eyecatch = post.eyecatch ?? eyecatchLocal
    const link = post.url
    const { base64 } = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64
    const allSlugs = await getAllSlugs()
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug)
    const spImage = post.spimage

    console.log(post)
  
    return(
    <Container>
      <article>
        <figure>
          <Image 
            key={eyecatch.url}
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            size="(min-width: 1152px) 1152px, 100vw"
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>
        <PostHeader title={title} subTitle="Work Article" publish={publish}/>
        <TwoColumn>
          <TwoColumnMain>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
            <div className={styles.flexContainer}>
                {
                spImage.map(({ url, index }) =>(
                  <Image
                    key={index}
                    src={url}
                    alt=""
                    width={340.5}
                    height={672}
                    layout="responsive"
                    priority
                    placeholder="blur"
                    blurDataURL={eyecatch.blurDataURL}>
                  </Image>
                  ))}
              </div>
              {link && (
            <Button url={link} className={styles.link}/>
              )}
          </TwoColumnMain>
          <TwoColumnSidebar>
            <PostCategories categories={categories} />
            {link && (
            <Button url={link}/>
            )}
          </TwoColumnSidebar>
        </TwoColumn>  
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
          />
      </article>
    </Container>
  )
}

/*404*/
export const dynamicParams = false
export async function generateStaticParams(){
  const allSlugs = await getAllSlugs()
  
  return allSlugs.map(({ slug }) => {
      return { slug: slug }
  })
}

//meta
const { siteTitle, siteUrl } = siteMeta
export async function generateMetadata({ params }) {
  const slug = params.slug
  const post = await getPostBySlug(slug)
  const { title: pageTitle, publishDate: publish, content, categories } = post
  const pageDesc = extractText(content)
  const eyecatch = post.eyecatch ?? eyecatchLocal
  const ogpTitle = `${pageTitle} | ${siteTitle}`
  const ogpUrl = new URL(`/blog/${slug}`, siteUrl).toString()
  const metadata = {
  title: pageTitle,
  description: pageDesc,
  openGraph: {
  ...openGraphMetadata,
  title: ogpTitle,
  description: pageDesc,
  url: ogpUrl,
  images: [
  {
  url: eyecatch.url,
  width: eyecatch.width,
  height: eyecatch.height,
  },
  ],
  },
  twitter: {
  ...twitterMetadata,
  title: ogpTitle,
  description: pageDesc,
  images: [eyecatch.url],
  },
  }
  return metadata
}