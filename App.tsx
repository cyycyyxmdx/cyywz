import { BrowserRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { ApplicationList } from './pages/ApplicationList'
import { AddApplication } from './pages/AddApplication'
import { ApplicationDetail } from './pages/ApplicationDetail'
import { ResumeManage } from './pages/ResumeManage'

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <nav className="nav">
          <div className="nav-brand">求职追踪</div>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            统计面板
          </NavLink>
          <NavLink to="/list" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            投递列表
          </NavLink>
          <NavLink to="/add" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            添加投递
          </NavLink>
          <NavLink to="/resumes" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            简历管理
          </NavLink>
        </nav>
        <main className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/list" element={<ApplicationList />} />
            <Route path="/add" element={<AddApplication />} />
            <Route path="/detail/:id" element={<ApplicationDetail />} />
            <Route path="/resumes" element={<ResumeManage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
