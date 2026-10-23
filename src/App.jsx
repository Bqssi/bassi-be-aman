import React, { useMemo, useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import {
  adminStats,
  faqList,
  featureCards,
  parentProfile,
  studentProfile,
  driverProfile,
  supportTickets,
  recentMessages,
  tripSchedule,
} from './data/mockData.js'

const navItems = [
  { to: '/', label: 'الرئيسية' },
  { to: '/parent', label: 'ولي الأمر' },
  { to: '/student', label: 'الطالب' },
  { to: '/driver', label: 'السائق' },
  { to: '/admin', label: 'الإدارة' },
  { to: '/contact', label: 'تواصل معنا' },
]

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

function AppLayout() {
  const [tickets, setTickets] = useState(supportTickets)
  const [messages, setMessages] = useState(recentMessages)

  const handleTicketSubmit = (newTicket) => {
    setTickets((current) => [newTicket, ...current])
  }

  const handleSendMessage = (newMessage) => {
    setMessages((current) => [...current, newMessage])
  }

  return (
    <>
      <header className="topbar">
        <div className="container nav-wrap">
          <div className="brand-box">
            <div className="brand-mark">ب</div>
            <div>
              <strong>باصي بأمان</strong>
              <small>رحلة آمنة، وراحة بال لأهلك</small>
            </div>
          </div>

          <nav className="main-nav" aria-label="التنقل الرئيسي">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/parent"
            element={
              <ParentDashboard
                parent={parentProfile}
                messages={messages}
                onSendMessage={handleSendMessage}
                onTicketSubmit={handleTicketSubmit}
              />
            }
          />
          <Route path="/student" element={<StudentDashboard student={studentProfile} />} />
          <Route path="/driver" element={<DriverDashboard />} />
          <Route
            path="/admin"
            element={<AdminDashboard tickets={tickets} onTicketStatusChange={setTickets} />}
          />
          <Route
            path="/contact"
            element={<ContactPage onTicketSubmit={handleTicketSubmit} />} 
          />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 باصي بأمان</span>
          <span>دعم: support@bassi-be-aman.com</span>
        </div>
      </footer>
    </>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">منصة النقل المدرسي الذكية</span>
            <h1>رحلة آمنة، وراحة بال لأهلك</h1>
            <p>
              يساعد تطبيق باصي بأمان في تنظيم رحلات الطلاب، متابعة الصعود والوصول، وتسهيل
              التواصل بين أولياء الأمور والسائقين والإدارة في وقتٍ واحد.
            </p>
            <div className="hero-actions">
              <NavLink to="/parent" className="primary-btn">
                دخول ولي الأمر
              </NavLink>
              <NavLink to="/student" className="secondary-btn">
                دخول الطالب
              </NavLink>
            </div>
            <div className="mini-role-row">
              <NavLink to="/driver">السائق</NavLink>
              <NavLink to="/admin">الإدارة</NavLink>
            </div>
          </div>

          <div className="hero-panel">
            <div className="stat-pill">+12 مدرسة متصلة</div>
            <div className="mini-cards">
              <div className="mini-card">
                <strong>850</strong>
                <span>طالب</span>
              </div>
              <div className="mini-card">
                <strong>42</strong>
                <span>حافلة</span>
              </div>
              <div className="mini-card">
                <strong>92%</strong>
                <span>نسبة الالتزام</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">مميزات التطبيق</span>
            <h2>كل ما يحتاجه النقل المدرسي في لوحة واحدة</h2>
          </div>

          <div className="feature-grid">
            {featureCards.map((item) => (
              <article className="feature-card" key={item.title}>
                <div className="feature-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">الأسئلة الشائعة</span>
            <h2>إجابات سريعة حول التطبيق</h2>
          </div>

          <div className="faq-list">
            {faqList.map((item) => (
              <details key={item.q} open={item.q === 'كيف يتم ربط الأبناء بحساب ولي الأمر؟'}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <span className="eyebrow">خدمة العملاء</span>
              <h2>تواصل معنا في أي وقت</h2>
            </div>
            <NavLink to="/contact" className="primary-btn">
              إرسال طلب
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}

function ParentDashboard({ parent, messages, onSendMessage, onTicketSubmit }) {
  const [selectedChildId, setSelectedChildId] = useState(parent.children[0].id)
  const [messageText, setMessageText] = useState('')
  const [ticketForm, setTicketForm] = useState({ name: parent.name, type: 'استفسار', detail: '' })
  const [ticketSuccess, setTicketSuccess] = useState('')

  const selectedChild = parent.children.find((child) => child.id === selectedChildId) || parent.children[0]

  const handleSend = (event) => {
    event.preventDefault()
    if (!messageText.trim()) return

    onSendMessage({
      id: Date.now(),
      sender: 'ولي الأمر',
      text: messageText.trim(),
      time: 'الآن',
    })
    setMessageText('')
  }

  const handleTicket = (event) => {
    event.preventDefault()
    if (!ticketForm.detail.trim()) {
      setTicketSuccess('يرجى كتابة تفاصيل الطلب.')
      return
    }

    const newTicket = {
      id: Date.now(),
      user: ticketForm.name,
      type: ticketForm.type,
      detail: ticketForm.detail,
      status: 'جديد',
      createdAt: 'الآن',
    }

    onTicketSubmit(newTicket)
    setTicketSuccess('تم إرسال الطلب بنجاح.')
    setTicketForm((current) => ({ ...current, detail: '' }))
  }

  return (
    <div className="container dashboard">
      <div className="page-header">
        <div>
          <span className="eyebrow">لوحة ولي الأمر</span>
          <h2>مرحبًا، {parent.name}</h2>
        </div>
      </div>

      <div className="dashboard-grid two-col">
        <section className="panel">
          <h3>بيانات ولي الأمر</h3>
          <div className="info-list">
            <div><span>الاسم</span><strong>{parent.name}</strong></div>
            <div><span>رقم الهاتف</span><strong>{parent.phone}</strong></div>
            <div><span>المدينة</span><strong>{parent.city}</strong></div>
            <div><span>عدد الأبناء</span><strong>{parent.children.length}</strong></div>
          </div>
        </section>

        <section className="panel">
          <h3>حالة الاشتراك</h3>
          <div className="subscription-box">
            <div>
              <span>إجمالي الاشتراك</span>
              <strong>{parent.children.length * 300} ر.س</strong>
            </div>
            <div>
              <span>الحالة</span>
              <strong className="success-text">مفعّل</strong>
            </div>
            <div>
              <span>تاريخ البداية</span>
              <strong>01/09/2026</strong>
            </div>
            <div>
              <span>تاريخ النهاية</span>
              <strong>01/10/2026</strong>
            </div>
          </div>
        </section>
      </div>

      <div className="dashboard-grid two-col">
        <section className="panel">
          <h3>الأبناء المربوطون</h3>
          <div className="child-switcher" role="tablist">
            {parent.children.map((child) => (
              <button
                key={child.id}
                className={child.id === selectedChildId ? 'switch active' : 'switch'}
                onClick={() => setSelectedChildId(child.id)}
              >
                {child.name}
              </button>
            ))}
          </div>

          <div className="child-profile">
            <div className="row"><span>الصف</span><strong>{selectedChild.grade}</strong></div>
            <div className="row"><span>المدرسة</span><strong>{selectedChild.school}</strong></div>
            <div className="row"><span>السائق</span><strong>{selectedChild.driver}</strong></div>
            <div className="row"><span>الحافلة</span><strong>{selectedChild.bus}</strong></div>
            <div className="row"><span>خط السير</span><strong>{selectedChild.route}</strong></div>
            <div className="row"><span>حالة الرحلة</span><strong>{selectedChild.tripStatus}</strong></div>
          </div>
        </section>

        <section className="panel">
          <h3>جدول الرحلات</h3>
          <table>
            <thead>
              <tr>
                <th>اليوم</th>
                <th>الرحلة</th>
                <th>الوقت</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {tripSchedule.map((trip) => (
                <tr key={trip.day}>
                  <td>{trip.day}</td>
                  <td>{trip.route}</td>
                  <td>{trip.time}</td>
                  <td>{trip.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <div className="dashboard-grid two-col">
        <section className="panel">
          <h3>سجل تأكيدات الصعود والوصول</h3>
          <ul className="timeline">
            {selectedChild.logs.map((item) => (
              <li key={item.id}>
                <strong>{item.type}</strong>
                <span>{item.detail}</span>
                <small>{item.time}</small>
              </li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <h3>الإشعارات</h3>
          <ul className="notification-list">
            {selectedChild.notifications.map((item) => (
              <li className="notice" key={item.id}>
                <span className="dot"></span>
                {item.text}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="dashboard-grid two-col">
        <section className="panel">
          <h3>محادثة مع السائق</h3>
          <div className="chat-box">
            {messages.map((msg) => (
              <div key={msg.id} className={msg.sender === 'ولي الأمر' ? 'bubble me' : 'bubble'}>
                <span>{msg.sender}</span>
                <p>{msg.text}</p>
                <small>{msg.time}</small>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="chat-form">
            <input
              value={messageText}
              onChange={(event) => setMessageText(event.target.value)}
              placeholder="اكتب رسالة للسائق..."
            />
            <button type="submit">إرسال</button>
          </form>
        </section>

        <section className="panel">
          <h3>نموذج تواصل مع خدمة العملاء</h3>
          <form className="stack-form" onSubmit={handleTicket}>
            <input
              value={ticketForm.name}
              onChange={(event) => setTicketForm({ ...ticketForm, name: event.target.value })}
              placeholder="اسم المستخدم"
              required
            />
            <select
              value={ticketForm.type}
              onChange={(event) => setTicketForm({ ...ticketForm, type: event.target.value })}
            >
              <option>استفسار</option>
              <option>شكوى</option>
              <option>طلب خدمة</option>
              <option>مشكلة تقنية</option>
            </select>
            <textarea
              value={ticketForm.detail}
              onChange={(event) => setTicketForm({ ...ticketForm, detail: event.target.value })}
              placeholder="تفاصيل الطلب..."
              rows="4"
              required
            />
            <button type="submit">إرسال الطلب</button>
            {ticketSuccess && <p className="success-text">{ticketSuccess}</p>}
          </form>
        </section>
      </div>
    </div>
  )
}

function StudentDashboard({ student }) {
  return (
    <div className="container dashboard">
      <div className="page-header">
        <div>
          <span className="eyebrow">لوحة الطالب</span>
          <h2>{student.name}</h2>
        </div>
      </div>

      <div className="dashboard-grid two-col">
        <section className="panel">
          <h3>بيانات الطالب</h3>
          <div className="info-list">
            <div><span>الاسم</span><strong>{student.name}</strong></div>
            <div><span>الصف</span><strong>{student.grade}</strong></div>
            <div><span>المدرسة</span><strong>{student.school}</strong></div>
            <div><span>السائق</span><strong>{student.driverName}</strong></div>
            <div><span>الحافلة</span><strong>{student.busNumber}</strong></div>
          </div>
        </section>

        <section className="panel">
          <h3>حالة الرحلة الحالية</h3>
          <div className="trip-status-box">
            <span>{student.tripStatus}</span>
            <strong>{student.route}</strong>
            <small>آخر تحديث: {student.lastUpdate}</small>
          </div>
        </section>
      </div>

      <div className="dashboard-grid two-col">
        <section className="panel">
          <h3>جدول الرحلات</h3>
          <table>
            <thead>
              <tr>
                <th>اليوم</th>
                <th>الوقت</th>
                <th>الرحلة</th>
              </tr>
            </thead>
            <tbody>
              {student.schedule.map((item) => (
                <tr key={item.day}>
                  <td>{item.day}</td>
                  <td>{item.time}</td>
                  <td>{item.route}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="panel">
          <h3>تنبيهات مهمة</h3>
          <ul className="notification-list">
            {student.alerts.map((item) => (
              <li className="notice" key={item.id}>
                <span className="dot"></span>
                {item.text}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="panel">
        <h3>السجل السابق للرحلات</h3>
        <table>
          <thead>
            <tr>
              <th>التاريخ</th>
              <th>الإتجاه</th>
              <th>التأكيد</th>
            </tr>
          </thead>
          <tbody>
            {student.history.map((item) => (
              <tr key={item.date}>
                <td>{item.date}</td>
                <td>{item.direction}</td>
                <td>{item.confirmation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

function DriverDashboard() {
  const [students, setStudents] = useState(driverProfile.students)

  const confirmBoarding = (id) => {
    setStudents((current) =>
      current.map((student) =>
        student.id === id ? { ...student, boardingStatus: 'مؤكد', boardingTime: 'الآن' } : student,
      ),
    )
  }

  const confirmArrival = (id) => {
    setStudents((current) =>
      current.map((student) =>
        student.id === id ? { ...student, arrivalStatus: 'وصل', arrivalTime: 'الآن' } : student,
      ),
    )
  }

  return (
    <div className="container dashboard">
      <div className="page-header">
        <div>
          <span className="eyebrow">لوحة السائق</span>
          <h2>{driverProfile.name}</h2>
        </div>
      </div>

      <div className="dashboard-grid two-col">
        <section className="panel">
          <h3>بيانات الحساب</h3>
          <div className="info-list">
            <div><span>الاسم</span><strong>{driverProfile.name}</strong></div>
            <div><span>الهاتف</span><strong>{driverProfile.phone}</strong></div>
            <div><span>رقم الرخصة</span><strong>{driverProfile.license}</strong></div>
            <div><span>الحافلة</span><strong>{driverProfile.busNumber}</strong></div>
            <div><span>خط السير</span><strong>{driverProfile.route}</strong></div>
          </div>
        </section>

        <section className="panel">
          <h3>الرحلات اليومية</h3>
          <table>
            <thead>
              <tr>
                <th>الرحلة</th>
                <th>الوقت</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {driverProfile.dailyTrips.map((trip) => (
                <tr key={trip.time}>
                  <td>{trip.route}</td>
                  <td>{trip.time}</td>
                  <td>{trip.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <section className="panel">
        <h3>قائمة الطلاب المرتبطين</h3>
        <div className="driver-student-list">
          {students.map((student) => (
            <div key={student.id} className="driver-student-item">
              <div>
                <strong>{student.name}</strong>
                <span>{student.school}</span>
              </div>
              <div className="student-actions">
                <button className="small-btn" onClick={() => confirmBoarding(student.id)}>
                  تأكيد صعود
                </button>
                <button className="small-btn alt" onClick={() => confirmArrival(student.id)}>
                  تأكيد وصول
                </button>
              </div>
              <div className="status-row">
                <small>الصعود: {student.boardingStatus}</small>
                <small>الوصول: {student.arrivalStatus}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="panel">
        <h3>طلب توظيف سائق جديد</h3>
        <form className="stack-form">
          <input placeholder="اسم المتقدم" required />
          <input placeholder="رقم الهاتف" required />
          <textarea rows="4" placeholder="معلومات الخبرة وملاحظات الطلب..." required />
          <button type="submit">إرسال الطلب</button>
        </form>
      </section>
    </div>
  )
}

function AdminDashboard({ tickets, onTicketStatusChange }) {
  const [formMessage, setFormMessage] = useState('')

  const updateTicketStatus = (id, status) => {
    onTicketStatusChange((current) =>
      current.map((ticket) => (ticket.id === id ? { ...ticket, status } : ticket)),
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormMessage('تم حفظ البيانات التجريبية بنجاح.')
  }

  return (
    <div className="container dashboard">
      <div className="page-header">
        <div>
          <span className="eyebrow">لوحة الإدارة</span>
          <h2>إحصائيات النظام</h2>
        </div>
      </div>

      <div className="stats-grid">
        {adminStats.map((stat) => (
          <div className="stat-box" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>

      <div className="dashboard-grid two-col">
        <section className="panel">
          <h3>إضافة طالب</h3>
          <form className="stack-form" onSubmit={handleSubmit}>
            <input placeholder="اسم الطالب" required />
            <input placeholder="المرحلة أو الصف" required />
            <input placeholder="اسم المدرسة" required />
            <input placeholder="ولي الأمر" required />
            <button type="submit">حفظ</button>
            {formMessage && <p className="success-text">{formMessage}</p>}
          </form>
        </section>

        <section className="panel">
          <h3>إدارة الاشتراكات</h3>
          <table>
            <thead>
              <tr>
                <th>الطالب</th>
                <th>المبلغ</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>عبدالله محمد</td>
                <td>300 ر.س</td>
                <td>مفعّل</td>
              </tr>
              <tr>
                <td>سارة علي</td>
                <td>600 ر.س</td>
                <td>مفعّل</td>
              </tr>
              <tr>
                <td>خالد سالم</td>
                <td>300 ر.س</td>
                <td>قيد المتابعة</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <section className="panel">
        <h3>طلبات خدمة العملاء</h3>
        <div className="ticket-list">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="ticket-card">
              <div>
                <strong>{ticket.user}</strong>
                <small>{ticket.type}</small>
              </div>
              <p>{ticket.detail}</p>
              <div className="ticket-actions">
                <span className="status-badge">{ticket.status}</span>
                <button onClick={() => updateTicketStatus(ticket.id, 'قيد المعالجة')}>قيد المعالجة</button>
                <button onClick={() => updateTicketStatus(ticket.id, 'تم الرد')}>تم الرد</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function ContactPage({ onTicketSubmit }) {
  const [form, setForm] = useState({ name: '', type: 'استفسار', detail: '' })
  const [submitted, setSubmitted] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.detail) {
      setSubmitted('يرجى إدخال الاسم والتفاصيل.')
      return
    }

    onTicketSubmit({
      id: Date.now(),
      user: form.name,
      type: form.type,
      detail: form.detail,
      status: 'جديد',
      createdAt: 'الآن',
    })

    setSubmitted('تم إرسال طلبك بنجاح. سيتم الرد خلال 24 ساعة.')
    setForm({ name: '', type: 'استفسار', detail: '' })
  }

  return (
    <div className="container compact-page">
      <section className="panel">
        <h2>تواصل مع خدمة العملاء</h2>
        <form className="stack-form" onSubmit={handleSubmit}>
          <input
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="الاسم الكامل"
            required
          />
          <select
            value={form.type}
            onChange={(event) => setForm({ ...form, type: event.target.value })}
          >
            <option>استفسار</option>
            <option>شكوى</option>
            <option>طلب خدمة</option>
            <option>مشكلة تقنية</option>
          </select>
          <textarea
            value={form.detail}
            onChange={(event) => setForm({ ...form, detail: event.target.value })}
            rows="6"
            placeholder="اكتب تفاصيل طلبك هنا..."
            required
          />
          <button type="submit">إرسال الطلب</button>
        </form>
        {submitted && <p className="success-text">{submitted}</p>}
      </section>
    </div>
  )
}

export default App
