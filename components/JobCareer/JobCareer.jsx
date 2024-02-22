import Link from 'next/link'
import styles from './JobCareer.module.scss'

export default function JobCareer() {
  const Career = [
    {
      date: '2024.1 ~',
      title: 'フリーランス',
      text: '前職からの仕事や新たに個人で請け負ったweb制作を行う。',
    },
    {
      date: '2023.4 ~ 2023.12',
      title: '株式会社エム・エス・ピー',
      text: 'web制作部の管理職として入社。マネジメント/制作/営業/外注折半/業務DX化の推進まで行う。',
    },
    {
      date: '2018.8 ~ 2023.1',
      title: '株式会社アクティネットワーク社',
      text: '制作部にて外注クライアントのweb制作とインハウスのAppデザイン/UI改善に携わる',
    },

    {
      date: '2016.6 ~ 2018.7',
      title: 'トランス・コスモス株式会社',
      text: '楽天ECサイトの問い合わせ対応業務',
    },
    {
      date: '2015.4 ~ 2016.3',
      title: '株式会社日本トータルテレマーケティング',
      text: 'ECサイトの問い合わせ対応業務。web制作の仕事がしたく福岡市へ転居の為退社',
    },
    {
      date: '2013.4 ~ 2014.1',
      title: '健康堂薬局',
      text: '処方箋調剤薬局にて調剤事務に従事。レセコン対応/接客対応等。第二子妊娠、育休取得不可のため退職'
    },
    {
      date: '2005.4 ~ 2010.3',
      title: 'ジャパンイメジネーション株式会社',
      text: 'アパレル接客販売業務。結婚で地元に戻るため離職'
    },
    {
      date: '2004.4 ~ 2005.3',
      title: '三祐商事',
      text: 'アミューズメント施設職員。上京のため退職'
    },
  ]
  const web = [
    {
      date: '2017.7 ~ 2018.8',
      title: 'デジタルハリウッド | ママグロースハッカー10期生',
      text: '選抜式のリクルート・ランサーズ・KAIZEN PLATFORM協賛の講座。基本的なweb制作、デザインの基礎からディレクション・UI設計・マーケティング・webサイトの改善法まで学ぶ。在学中の広告デザインが「とらばーゆ」に一面掲載される。フリーランスとしてコーディング・デザイン活動開始。'
    },
    {
      date: '2016.6 ~ 2016.12',
      title: '福岡県デジタルコンテンツクリエーター育成講座',
      text: '福岡県・福岡市主体の講座。週に一度の通学と終業後にHTML5,CSS,デザインの基礎を1から学び直す。'
    }
  ]
    // Careerとwebにtypeプロパティを追加
    const careerData = Career.map(item => ({ ...item, type: 'career' }));
    const webData = web.map(item => ({ ...item, type: 'web' }));

  // Careerとwebを年月でソート
    const sortedData = [...careerData, ...webData].sort((a, b) => b.date.localeCompare(a.date));

  return(
    <section id="Career">
      <h2>Career</h2>
      <div className={styles.container}>
        {sortedData.map((item, index) => (
          <div className={styles.inner}>
          <dl
            className={`${styles.box} ${item.type === 'web' ? styles.right : ''}`}
            key={index}>
            <dt className={styles.date}>{item.date}
            </dt>
            <dd className={styles.item}>
              <span className={styles.job}>{item.title}</span>
                {item.text}
            </dd>
          </dl>
          </div>
        ))}
      </div>
    </section>
  )
}
