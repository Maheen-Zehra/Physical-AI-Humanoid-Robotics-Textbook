import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';



type FeatureItem = {
  title: string;
  image: string; // path to JPEG, PNG, or SVG in /static folder
  description: ReactNode;
};


const FeatureList: FeatureItem[] = [
  {
  title: 'Physical AI and Humanoid Robotics',
  image: '/img/ai1.jpeg',
  description: (
    <>
     Humanoid robots combine Physical AI with human-like form factors to
      perform complex tasks in dynamic, unstructured environments.
    </>
  ),
},
  {
    title: 'Physical AI and Humanoid Robotics',
    image: '/img/ai2.jpeg',
    description: (
      <>
        Physical AI enables machines to perceive, reason, 
        and act intelligently within the real world through embodied intelligence.
      </>
    ),
  },
  {
    title: 'Physical AI and Humanoid Robotics',
    image: '/img/ai3.jpeg',
    description: (
      <>
       Together, Physical AI and humanoid robotics represent the convergence of perception, cognition,
        and autonomous action in intelligent machines.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
       
          <img src={image} alt={title} className={styles.featureSvg} />
  
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
