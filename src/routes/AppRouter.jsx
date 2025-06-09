import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'

import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Dashboard from '../pages/Dashboard'
import CourseList from '../pages/Courses/CourseList'
import CourseDetail from '../pages/Courses/CourseDetail'
import MyEnrollments from '../pages/Enrollments/MyEnrollments'
import JambSubjects from '../pages/Jamb/JambSubjects'
import PastQuestions from '../pages/Exams/PastQuestions'
import QuizMode from '../pages/Exams/QuizMode'
import TestimonialsList from '../pages/Testimonials/TestimonialsList'

export default function AppRouter() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/courses">Courses</Link> |{' '}
        <Link to="/jamb">JAMB</Link> | <Link to="/exams">Exams</Link> |{' '}
        <Link to="/testimonials">Testimonials</Link> |{' '}
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CourseList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute><Dashboard/></PrivateRoute>}
        />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route
          path="/enrollments"
          element={<PrivateRoute><MyEnrollments/></PrivateRoute>}
        />
        <Route path="/jamb" element={<JambSubjects />} />
        <Route path="/exams" element={<PastQuestions />} />
        <Route path="/exams/quiz/:quizId" element={<PrivateRoute><QuizMode/></PrivateRoute>} />
        <Route path="/testimonials" element={<TestimonialsList />} />
      </Routes>
    </>
  )
}
