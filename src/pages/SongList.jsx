import {useQuery} from '@apollo/client';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom'

const LİST_SONGS = gql`
{
    songs {
        id
        title
    }
}
`

const SongList = (props) => {

  const { loading, error, data } = useQuery(LİST_SONGS);

  const renderSongs = () => {
    console.log("data", data)
    return data?.songs.map(({title, id}) => (
      <li class="flex justify-between gap-x-6 py-5" key={`song-${id}`}>
        <div class="flex min-w-0 gap-x-4">
          <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">{title}</p>
          </div>
        </div>
    </li>
    ))
  }

  const showLoading = () => {
    return <div>Loading...</div>
  }

return (
  loading ? showLoading() : (
      <div className="min-h-full">
          <header className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Songs</h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <ul role="list" class="divide-y divide-gray-100">
                {renderSongs()}
              </ul>
              <Link to="/songs/new"
                className="flex w-100 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add New Song
              </Link>
            </div>
          </main>
      </div>
  )
)
}

export default SongList
