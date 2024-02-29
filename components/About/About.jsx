'use client'
import styles from './about.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion';


export default function About(){
const skill = [
  {
    title: 'ディレクション',
    text: '接客業経験が10年ほどあるため顧客対応が得意です。制作経験があるからこその知識を提供することでクライアントからの信頼も頂いてきました。ディレクトリマップ、サイトマップ等ディレクション資料はGoogleスプレットシートまたはnotionを使用しています。'
  },
  {
    title: 'デザイン',
    text: 'アーティスティックよりもクライアントが求めるデザインかつ、ペルソナから考えユーザーに刺さるデザイン・操作性・回遊性・アクセシビリティへの配慮を提供したいと考えています。ツールはここ3年ほどはFigmaを主に使用していますがAdobeソフトの使用歴も長く印刷物デザインも経験しておりますのでマルチに何でも作成できます。'
  },
  {
    title: 'コーディング',
    text: 'コーディングはReactで書くのが好きです(環境構築・新しいフレームワークを試すのが好きです。)コンポーネント志向で再利用・変更が容易なように構築します。FirebaseでのGoogle認証等も作れます。EC-CUBEも構築・カスタマイズ経験有り。wordpressの場合はDocker上でwp-envを使用しPHPで書きます。子テーマ等は使わず1からテーマ制作します。プラグインは極力使用せず、長年運営するに当たって邪魔にならないシンプルな構造を得意とします。'
  },
];

return (
  <section>
    {skill.map(({title, text}, index) => (
    <div key={index} className={styles.textContent}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
    ))}
  </section>
  )
}
