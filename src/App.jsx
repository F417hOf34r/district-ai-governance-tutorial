import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AssessmentProvider } from './context/AssessmentContext.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Problem from './pages/Problem.jsx'
import Frameworks from './pages/Frameworks.jsx'
import FrameworkDetail from './pages/FrameworkDetail.jsx'
import OperatingModel from './pages/OperatingModel.jsx'
import Tutorial from './pages/Tutorial.jsx'
import TutorialDomain from './pages/TutorialDomain.jsx'
import AssessmentIntro from './pages/AssessmentIntro.jsx'
import AssessmentQuestions from './pages/AssessmentQuestions.jsx'
import Results from './pages/Results.jsx'
import BestPractices from './pages/BestPractices.jsx'
import Resources from './pages/Resources.jsx'
import About from './pages/About.jsx'

function App() {
  return (
    <BrowserRouter>
      <AssessmentProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problem" element={<Problem />} />
            <Route path="/frameworks" element={<Frameworks />} />
            <Route path="/frameworks/:slug" element={<FrameworkDetail />} />
            <Route path="/operating-model" element={<OperatingModel />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/tutorial/:domainSlug" element={<TutorialDomain />} />
            <Route path="/assessment" element={<AssessmentIntro />} />
            <Route path="/assessment/questions" element={<AssessmentQuestions />} />
            <Route path="/results" element={<Results />} />
            <Route path="/best-practices" element={<BestPractices />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </AssessmentProvider>
    </BrowserRouter>
  )
}

export default App
