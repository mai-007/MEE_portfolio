import Link from 'next/link'
import styles from './JobCareer.module.scss'

export default function JobCareer() {
  const Career = [
    {
      date: '2024 ~',
      job: 'フリーランス',
      text: '前職からの仕事や新たに個人で請け負ったweb制作を行う。'
    },
    {
      date: '2023.4 ~ 2024.12',
      job: '株式会社MSP',
      text: 'web制作部の管理職として入社。マネジメント/制作/営業/外注せっぱん/業務DX化の推進まで行う'
    },
    {
      date: '2018 ~ 2023.3',
      job: '株式会社アクティネットワーク社',
      text: '制作部にて外注クライアントのweb制作とインハウスのAppデザイン/UI改善に携わる'
    },

    {
      date: '2016 ~ 2018',
      job: '株式会社',
      text: 'ECサイトの問い合わせ窓口のコールセンター業務'
    },
    {
      date: '2015 ~ 2016',
      job: '株式会社日本',
      text: 'ECサイトコールセンター業務。web制作の仕事がしたく福岡へ移住の為退社'
    },
    {
      date: '2012 ~ 2014',
      job: '島原市税務署(期限有りアルバイト)',
      text: '出産・育児中のため確定申告時期の12~4月の期間に毎年データ入力/納税者への入力補助に従事。気に入って頂き柔軟な勤務体制で毎年忙しい時期に呼んで頂いていました。'
    },
    {
      date: '2005 ~ 2010',
      job: 'セシルマクビー',
      text: 'アパレル販売業務。結婚・出産のため離職'
    },
    {
      date: '2004',
      job: '三祐商事',
      text: 'アミューズメント施設職員。上京のため'
    },
  ]
  const web = [
    {
      date: '2017',
      title: 'デジタルハリウッド | ママグロースハッカー10期生',
      text: '一般講座とは違い選抜式のリクルート・ランサーズ・KAIZEN PLATFORM協賛の講座。基本的なweb制作、デザインの基礎からディレクション・UI設計・マーケティング・webサイトの改善法まで学ぶ。在学中の広告デザインが「とらばーゆ」に一面掲載される。フリーランスとしてコーディング・デザイン活動開始。'
    },
    {
      date: '2016',
      title: 'デジタルコンテンツクリエーター育成講座',
      text: '福岡県・福岡市主体の講座。週に一度の通学と終業後にHTML5,CSS,デザインの基礎を1から学び直す。'
    }
  ]
  return(
    <section id="Career">
    <h2>Career</h2>
    <div className={styles.container}>
      <div className={styles.inner}>
        {Career.map(( career, index ) => (
          <dl className={styles.box} key={index}>
            <dt className={styles.date}>{career.date}</dt>
            <dd className={styles.flex}>
              <span className={styles.job}>{career.job}</span>
              {career.text}
            </dd>
          </dl>
        ))}
      </div>
      <div className={styles.inner}>
        {web.map(( web, index ) => (
          <dl className={styles.box} key={index}>
            <dt className={styles.date}>{web.date}</dt>
            <dd className={styles.flex}>
              <span className={styles.job}>{web.title}</span>
              {web.text}
            </dd>
          </dl>
        ))}
      </div>
    </div>
  </section>
  )
}
