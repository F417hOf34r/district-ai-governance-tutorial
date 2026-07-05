import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AssessmentProvider } from './context/AssessmentContext.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Tutorial from './pages/Tutorial.jsx'
import TutorialDomain from './pages/TutorialDomain.jsx'
import AssessmentIntro from './pages/AssessmentIntro.jsx'
import AssessmentQuestions from './pages/AssessmentQuestions.jsx'
import Results from './pages/Results.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <BrowserRouter>
      <AssessmentProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/tutorial/:domainSlug" element={<TutorialDomain />} />
            <Route path="/assessment" element={<AssessmentIntro />} />
            <Route path="/assessment/questions" element={<AssessmentQuestions />} />
            <Route path="/results" element={<Results />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </AssessmentProvider>
    </BrowserRouter>
  )
}

export default App
