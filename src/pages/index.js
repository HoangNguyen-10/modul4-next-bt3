// import moment from "moment";
import axios from "axios"
export const getStaticProps = async () => {
  const res = await axios.get('https://api.covid19api.com/total/country/vietnam')
  const data = await res.data

  return {
    props: { data }
  }
}
export default function index({ data }) {
  return (
    <div>
      <h1>Vietnam'Covid Information</h1>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Recovered</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.Date}</td>
              <td>{item.Confirmed}</td>
              <td>{item.Active}</td>
              <td>{item.Recovered}</td>
              <td>{item.Deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
