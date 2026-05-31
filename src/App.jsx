import { ThemeProvider } from './context/ThemeContext'
import { AppProvider } from './context/AppContext'
import Layout from './components/layout/Layout'

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <Layout />
      </AppProvider>
    </ThemeProvider>
  )
}