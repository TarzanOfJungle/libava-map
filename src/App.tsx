import ErrorBoundary from './components/error_boundry/ErrorBoundry'
import Layout from './components/layout/Layout'

function App() {
  return (
    <>
    <ErrorBoundary>
      <Layout />
    </ErrorBoundary>
    </>
  )
}

export default App
