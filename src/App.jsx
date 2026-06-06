import { ThemeProvider } from './context/ThemeContext'
import { AppProvider } from './context/AppContext'
import { ProgressProvider } from './context/ProgressContext'
import { BookmarkProvider } from './context/BookmarkContext'
import Layout from './components/layout/Layout'

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <ProgressProvider>
          <BookmarkProvider>
            <Layout />
          </BookmarkProvider>
        </ProgressProvider>
      </AppProvider>
    </ThemeProvider>
  )
}