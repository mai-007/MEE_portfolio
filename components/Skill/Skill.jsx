import styles from './skill.module.scss'
import Image from 'next/image'

export default function Skill(){
  const categories = [
    { title: 'Tool', 
      images: ['/vscode.png', '/docker.png', '/github-mark.png', '/npm.png', '/webpack.png', '/gulp.jpg', '/chatGPT.png'] 
    },
    { title: 'Framework', 
      images: ['/next.png', '/gatsby.png', '/astro.png', '/vite.png'] 
    },
    { title: 'Frontend', 
      images: ['/php.png', '/js.png', '/ts.png', '/react.png', '/node.png', '/Gas.png', '/python.png', '/html.png']
    },
    { title: 'CSS', 
      images: ['/tailwind.png', '/emotion.png', '/css-modules.png', '/sass.jpg'] 
    },
    { title: 'Hosting', 
    images: ['/firebase.png', '/Vercel.png', '/netlify.png'] 
  },
    { title: 'CMS', 
      images: ['/microCMS.png', '/wp.png'] 
    },
    { title: 'Design', 
      images: ['/figma.png', '/xd.png', '/illustrator.png', '/photoshop.png'] 
    },
  ];

  return (
    <div className={styles.container}>
      <h2>スキルセット</h2>
      {categories.map((category, categoryIndex) => (
        <div key={categoryIndex} className={styles.content}>
        <h3>{category.title}</h3>
          <div className={styles.inner}>
            {category.images.map((image, imageIndex) => (
              <figure key={imageIndex} className={styles.imageWrap}>
                <Image
                  className={styles.image}
                  src={image}
                  alt=""
                  width={88}
                  height={88}
                />
              </figure>
            ))}
          </div>
          </div>
        ))}
      </div>
  );
}