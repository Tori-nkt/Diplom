import style from '../infoGraph/index.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';
import { Pie, PolarArea } from 'react-chartjs-2';
import {data} from '../infoGraph/graph1'
import { data1 } from './graph2';

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);


const InfoGraphics = () => {
  return (
    <section className={`${style.section}`}>
      <div className='container'>
        <h2 className={style.h2}>ГРАФІК</h2>
        <div className={style.charts}>
        <Pie className = {style.pie} data={data} />
        <Pie className = {style.pie} data={data} />
        <Pie className = {style.pie} data={data} />
        </div>

        <div className={style.charts1}>
        
        </div>
        
      </div>
    </section>
  )
};


export default InfoGraphics;