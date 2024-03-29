import Head from 'next/head'
import { useRouter } from 'next/router'
import siteImg from '@/images/ogp.jpg'

//Information about this site
import { siteMeta } from '@/lib/constants'
const { siteTitle, siteDesc, siteUrl, siteLocale, siteType, siteIcon } = siteMeta

export default function Meta({ pageTitle, pageDesc, pageImg, pageImgW, pageImgH }) {
  //pageTitle
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  //page description
  const desc = pageDesc ?? siteDesc
  //pageUrl
  const router = useRouter()
  const url = `${siteUrl}${router.asPath}`
  //OGP
  const img = pageImg || siteImg.src
  const imgW = pageImgW || siteImg.width
  const imgH = pageImgH || siteImg.height
  const imgUrl = img.startsWith('https') ? img : `${siteUrl}${img}`


  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={`${pageTitle} | ${siteTitle}`} />

      <meta name = 'description' content = {desc} />
      <meta property='og:description' content={desc} />

      <link rel ='canonical' href = {url} />
      <meta property='og:url' content={url} />
      <meta property='og:site_name' content={siteTitle} />
      <meta property='og:type' content={siteType} />
      <meta property='og:locale' content={siteLocale} />

      <link rel='icon' href={siteIcon} />
      <link rel='apple-touch-icon' href={siteIcon} />

      <meta property='og:image' content={imgUrl} />
      <meta property='og:image:width' content={imgW} />
      <meta property='og:image:height' content={imgH} />
      <meta name='twitter:card' content='summary_large_image' />
    </Head>
  )
}
