import SimpleLayout from '../components/layouts/SimpleLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

export default function Index(props) {
  return (
    <SimpleLayout>
      <p>Hello World ! This is Simple page made by using common Layout</p>
      <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="#">
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    </SimpleLayout>
  );
}

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
  
    console.log(`Show data fetched. Count: ${data.length}`);
  
    return {
      shows: data.map(entry => entry.show)
    };
  };