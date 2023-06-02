
import styles from '../OrcsList/index.module.css'
import { container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import listJSON from '../OrcsList/data.json'
import Button from 'react-bootstrap/Button';

function replaceWord(str) {
  return str.replace(/войсковая часть/g, "військова частина");
}

const orcsList = () =>  {
  const list = Object.values(listJSON.data).slice(0, 9);

  return(
    <section className={styles.section}>
      <div className='container'>
      <h2 className={styles.h2}>СПИСОК ОРКІВ</h2>
    <Pagination  className={styles.Pag}>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
    
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item >{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Item >{6}</Pagination.Item>
      <Pagination.Item active >{7}</Pagination.Item>
      <Pagination.Item >{8}</Pagination.Item>
      <Pagination.Item >{9}</Pagination.Item>
      <Pagination.Item >{10}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{220}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>№</th>
          <th>ПІБ</th>
          <th>Звання</th>
          <th>Військова частина</th>
          <th>Дата Народження</th>
          <th>Більше Інформації</th>
        </tr>
      </thead>
      <tbody>
        {list.map(({ orc_id, v_ch, fio, bdate, mil_rank_cl }) => (
          <tr key={orc_id}>
            <td>{orc_id}</td>
            <td>{fio}</td>
            <td>{mil_rank_cl}</td>
            <td>{replaceWord(v_ch)}</td>
            <td>{bdate}</td>
            <td>
              <Button variant="outline-warning">Детальніше</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>


      </div>
      
    </section>
  );
};

export default orcsList;