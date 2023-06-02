
import { Button } from 'react-bootstrap';
import indexModule from '../aboutUs/index.module.css'
import {motion} from 'framer-motion'


const textAnimnation = {
  hidden: {
    x: -100,
    opacity: 0,
    
  },
  visible: {
    x: 0,
    opacity: 1,
  },
}



const AboutUs = () => {
  return (
    <section className={indexModule.section}>
      <div className={'${indexModule.main} container '}>
        <div className={indexModule.mainText}>
          <motion.h1 variants={textAnimnation} 
            initial='hidden'
            whileInView='visible'
          
           className={indexModule.h1}>ЯСТРУБ</motion.h1>
          <motion.h2 variants={textAnimnation} className={indexModule.h2}>
            Проект, який спрямьований покарати кожного причетного до українського геноциду 
          </motion.h2>
          <Button variant="warning">ДИВИТИСЯ СПИСОК</Button>{' '}
        </div>
      </div>
    </section>
  )
};

export default AboutUs;