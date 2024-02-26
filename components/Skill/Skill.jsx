'use client'
import styles from './skill.module.scss'
import Image from 'next/image'
import { motion } from 'framer-motion';

const container = {
  hidden: {
    opacity: 0,
    y: 200, // offset
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: [50, 0],
    transition: {
      duration: .5,
      ease: 'easeInOut'
    },
  },
};

export default function Skill(){
  const categories = [
    { title: 'Tool', 
      images: ['/vscode.png', '/docker.png', '/github-mark.png', '/npm.png', '/webpack.png', '/gulp.jpg', '/chatGPT.png'] 
    },
    { title: 'Framework', 
      images: ['/next.png', '/gatsby.png', '/astro.png', '/vite.png'] 
    },
    { title: 'Frontend', 
      images: ['/php.png', '/js.png', '/ts.png', '/react.png', '/node.png', '/gas.png', '/python.png', '/html.png']
    },
    { title: 'CSS', 
      images: ['/tailwind.png', '/emotion.png', '/css-modules.png', '/sass.jpg'] 
    },
    { title: 'Hosting', 
    images: ['/firebase.png', '/vercel.png', '/netlify.png'] 
  },
    { title: 'CMS', 
      images: ['/microCMS.png', '/wp.png'] 
    },
    { title: 'Design', 
      images: ['/figma.png', '/xd.png', '/illustrator.png', '/photoshop.png'] 
    },
  ];

  return (
    <motion.section 
      id="skillSet"
      variants={container}
      initial="hidden"
      whileInView="show"
      className={styles.container}>
      <h2>スキルセット</h2>
      {categories.map((category, categoryIndex) => (
        <motion.div 
          key={categoryIndex}
          className={styles.content}
          variants={item}
        >
        <h3>{category.title}</h3>
          <div className={styles.inner}>
            {category.images.map((image, imageIndex) => (
              <figure 
                key={imageIndex}
                className={styles.imageWrap}
              >
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
          </motion.div>
        ))}
      </motion.section>
  );
}