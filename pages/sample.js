import { useSelector } from "react-redux";


export default function Sample() {
  const data = useSelector(state => state.test.data)
  return <div>Data from Redux: {data}</div>;
}
