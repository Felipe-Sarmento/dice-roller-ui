import { API_URL } from '@/const';
import j from '../../../package.json';
import axios from 'axios';

export default async function InfraPage() {
 const fetchData = async () => {
    const response = await axios.get(`${API_URL}/health`);
    if (response) {
      return response.data;
    }
 }

 const data = `${await fetchData()}`

 fetchData();

  return (
    <main>
      <h1>{j.name}</h1>
      <h2>version {j.version}</h2>
      {data ? <div className="content" dangerouslySetInnerHTML={{__html: data}}></div>
      : <></>}
    </main>
  );
}
