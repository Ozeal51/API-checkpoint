import UserList from './UserList'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-section">
        <span className="eyebrow">JSONPlaceholder + Axios</span>
        <h1>User Directory</h1>
        <p>
          Fetching and displaying a list of users with <code>useEffect</code>,{' '}
          <code>useState</code>, and <code>axios</code>.
        </p>
      </section>

      <UserList />
    </main>
  )
}

export default App
